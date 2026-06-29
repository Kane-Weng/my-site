---
title: "[CBF] HOCBF & Collision Cones"
excerpt: "Two ways past the relative-degree wall: higher-order CBFs that differentiate more, and collision cone CBFs that redefine the barrier geometrically."
categories: control
order: 3
date: 2026-06-29
use_math: true
---

<span class="lang-tag">Control Theory</span>
<span class="topic-tag">CBF</span>
<span class="topic-tag">HOCBF</span>
<span class="topic-tag">C3BF</span>

With the context built, we now know what a CBF is and how it aims to keep an autonomous system safe. However, the simple distance-based CBF runs into relative-degree issues for every dynamic model except the single integrator, which makes it impractical on its own. To address this, modern control research takes two directions: **HOCBF**, which keeps the same barrier and changes the method, and **C3BF**, which keeps the same method and changes the geometry of the barrier.

Recall from the previous post, a barrier that depends only on position, used on a system whose input is acceleration, produces

$$ \dot{h}(x) = \nabla h(x)^{\top} v, \qquad L_g h(x) = 0 . $$

The input never appears, so the CBF constraint is vacuous. Everything below is a way around this single equation.

<h2 class="section-header build">HOCBF: differentiate until the input appears</h2>

The most direct fix keeps the barrier $h$ exactly as it is and simply differentiates further. If the input shows up only in the second derivative, then build a condition out of the second derivative. The bookkeeping that makes this safe, each one the previous condition turned into a new barrier.

Start from the original barrier and define a sequence, each term adding a class $\mathcal{K}$ margin $\alpha_i$ to the rate of the term before it:

$$ \psi_0(x) = h(x), \qquad \psi_i(x) = \dot{\psi}_{i-1}(x) + \alpha_i\big(\psi_{i-1}(x)\big) . $$

Every term carries its own set $$\mathcal{C}_{i} = \{\, x : \psi_{i-1}(x) \ge 0 \,\}$$ . For a barrier of relative degree $m$, the input first appears in $\psi_m$, and the **HOCBF condition** is the requirement that this last term stay non-negative:

$$ \psi_m(x, u) = \dot{\psi}_{m-1}(x, u) + \alpha_m\big(\psi_{m-1}(x)\big) \ge 0 . $$

Because $\psi_m$ contains $\dot{\psi}_{m-1}$, which after $m$ differentiations of $h$ finally exposes $u$, this is once again a linear inequality in the input, ready to drop into the same quadratic program. Enforcing it keeps the whole nested family $\mathcal{C}_1 \cap \dots \cap \mathcal{C}_m$ forward invariant, and in particular keeps the system inside the original safe set $\mathcal{C}$.

<div class="concept-tabs concept-tabs--build">
  <div class="tab-nav" role="tablist">
    <button class="tab-btn is-active" data-tab="psi0">$\psi_0$</button>
    <button class="tab-btn" data-tab="psi1">$\psi_1$</button>
    <button class="tab-btn" data-tab="psi2">$\psi_2$</button>
  </div>
  <div class="tab-panels">
    <!-- psi 0 -->
    <div class="tab-panel is-active" data-panel="psi0">
      <div class="tab-section">
        <span class="tab-label">The original barrier</span>
        <p>$\psi_0 = h$ is just the distance margin we started with. For a position-based $h$ on a double integrator it has no $u$ in its first derivative, so we cannot stop here.</p>
        <p>$$ \psi_0(x) = h(x) = \lVert p - p_o \rVert^2 - d^2 . $$</p>
      </div>
    </div>
    <!-- psi 1 -->
    <div class="tab-panel" data-panel="psi1">
      <div class="tab-section">
        <span class="tab-label">A velocity-aware margin</span>
        <p>With a linear $\alpha_1(s) = \gamma_1 s$, the condition $\psi_1 \ge 0$ reads $\dot{h} \ge -\gamma_1 h$. It caps how fast the gap may close in proportion to how large the gap still is.</p>
        <p>$$ \psi_1(x) = \dot{h}(x) + \gamma_1\, h(x) . $$</p>
      </div>
    </div>
    <!-- psi 2 -->
    <div class="tab-panel" data-panel="psi2">
      <div class="tab-section">
        <span class="tab-label">Where the input appears</span>
        <p>One more derivative brings in $\ddot{h}$, and with it the acceleration $u$. This is the constraint actually handed to the QP for a relative-degree-2 system.</p>
        <p>$$ \psi_2(x, u) = \ddot{h}(x, u) + \gamma_1 \dot{h}(x) + \gamma_2\, \psi_1(x) \ge 0 . $$</p>
      </div>
    </div>
  </div>
</div>

The intuition behind the chain is worth stating plainly. The condition $\psi_1 \ge 0$, meaning $\dot{h} \ge -\alpha_1(h)$, says the closing speed must shrink as the margin shrinks, so that by the time the robot reaches the boundary its approach rate has already fallen to zero. HOCBF does not invent a new notion of safety; it forces the system to start braking early enough that the original distance constraint is never violated.

The cost is that the behavior now depends on the whole stack of class $\mathcal{K}$ functions $\alpha_1, \dots, \alpha_m$. Choosing them too aggressively makes the filter conservative, and a poor choice can shrink the feasible set or stall the robot far from the obstacle, so the gains usually need tuning per system.

<h2 class="section-header learn">C3BF: redefine the barrier with a collision cone</h2>

The second direction asks a different question. Instead of forcing a position-only barrier to behave through repeated differentiation, it builds a barrier that already knows about velocity, so a single derivative is enough to expose the input. The idea comes from the **collision cone** of velocity-obstacle planning.

Picture the robot and an obstacle of combined safety radius $r$. From the robot, the obstacle subtends a cone of directions: any relative velocity pointing into that cone leads to a collision if both keep their current motion, while any relative velocity pointing outside it guarantees a miss. With relative position $p_{\text{rel}} = p_o - p$ and relative velocity $v_{\text{rel}} = v_o - v$, the cone has half-angle $\phi$ given by

$$ \sin\phi = \frac{r}{\lVert p_{\text{rel}} \rVert} . $$

Safety is no longer "are we far enough" but "is the relative velocity pointed away from the obstacle." The **C3BF** encodes exactly that, comparing the alignment of $p_{\text{rel}}$ and $v_{\text{rel}}$ against the cone angle:

$$ h(x) = \langle p_{\text{rel}}, v_{\text{rel}} \rangle + \lVert v_{\text{rel}} \rVert \sqrt{\lVert p_{\text{rel}} \rVert^2 - r^2} . $$

When $h \ge 0$ the relative velocity lies outside the collision cone and the robot is on a non-colliding course. The key structural win is that $h$ already contains $v_{\text{rel}}$, so differentiating it once produces the acceleration, and therefore the input $u$, directly:

$$ \dot{h}(x, u) = L_f h(x) + L_g h(x)\, u, \qquad L_g h(x) \neq 0 . $$

The barrier is relative degree $1$ by construction. There is no chain to build and no stack of gains to tune, just the same single linear constraint in the same quadratic program, now valid for the double integrator, unicycle, and bicycle models that defeated the distance barrier.

The trade is one of modeling rather than mechanics. C3BF buys a clean relative degree and a notably less conservative filter, since it permits fast motion as long as the heading is safe, but it relies on knowing the obstacle velocity $v_o$ and assumes the cone geometry of a roughly disk-shaped obstacle. HOCBF, by contrast, makes no such geometric assumption and extends to any barrier whose relative degree you are willing to differentiate through.

<h2 class="section-header teach">Two answers to the same wall</h2>

Both methods recover a usable, relative-degree-1 constraint for the QP; they just disagree on where to spend the effort.

<div class="concept-tabs concept-tabs--teach">
  <div class="tab-nav" role="tablist">
    <button class="tab-btn is-active" data-tab="idea">Core idea</button>
    <button class="tab-btn" data-tab="barrier">Barrier</button>
    <button class="tab-btn" data-tab="tradeoff">Trade-off</button>
  </div>
  <div class="tab-panels">
    <!-- idea -->
    <div class="tab-panel is-active" data-panel="idea">
      <div class="tab-section">
        <span class="tab-label">HOCBF</span>
        <p>Keep the distance barrier, differentiate $m$ times, and add a class $\mathcal{K}$ margin at each step so the chain stays forward invariant.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">C3BF</span>
        <p>Replace the barrier with one that already encodes relative velocity, so a single derivative exposes the input.</p>
      </div>
    </div>
    <!-- barrier -->
    <div class="tab-panel" data-panel="barrier">
      <div class="tab-section">
        <span class="tab-label">HOCBF</span>
        <p>$$ \psi_0 = \lVert p - p_o \rVert^2 - d^2 . $$ A position-only margin, relative degree $m$.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">C3BF</span>
        <p>$$ h = \langle p_{\text{rel}}, v_{\text{rel}} \rangle + \lVert v_{\text{rel}} \rVert \sqrt{\lVert p_{\text{rel}} \rVert^2 - r^2} . $$ A velocity-aware margin, relative degree $1$.</p>
      </div>
    </div>
    <!-- tradeoff -->
    <div class="tab-panel" data-panel="tradeoff">
      <div class="tab-section">
        <span class="tab-label">HOCBF</span>
        <p>General and geometry-free, but needs a tuned stack of $\alpha_i$ and tends to be more conservative near the boundary.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">C3BF</span>
        <p>Less conservative and tuning-light, but assumes a known obstacle velocity and a disk-like collision cone.</p>
      </div>
    </div>
  </div>
</div>
