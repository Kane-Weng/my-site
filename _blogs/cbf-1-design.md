---
title: "[CBF] Design & Use"
excerpt: "Building a control barrier function from a single distance, and the inequality that turns it into a real-time safety guarantee."
categories: control
order: 2
date: 2026-06-29
use_math: true
---

<span class="lang-tag">Control Theory</span>
<span class="topic-tag">CBF</span>
<span class="topic-tag">Safety</span>
<span class="topic-tag">Design</span>

The previous post laid out the mathematical and control-theoretic pieces in isolation. Here we put them together. Starting from a single distance measurement, we construct a control barrier function, see why naively forcing safety is far too conservative, arrive at the one inequality that defines a CBF, and fold it into the quadratic program that runs as a real-time safety filter.

<h2 class="section-header build">From a distance to a safe set</h2>

Suppose a robot at position $p$ must avoid an obstacle at $p_o$, keeping at least a clearance $d$ between them. The most direct way to measure safety is the signed distance to that limit:

$$ h(x) = \lVert p - p_o \rVert ^2 - d^2 . $$

This scalar is our **barrier function**, and its sign tells us everything. The set we care about, the **safe set**, is exactly where $h$ is non-negative:

$$ \mathcal{C} = \{\, x : h(x) \ge 0 \,\} . $$

Reading off the three regimes:

- $h(x) > 0$: the robot is strictly inside $\mathcal{C}$, safely clear of the obstacle.
- $h(x) = 0$: the robot is right on the boundary, at the minimum allowed distance.
- $h(x) < 0$: the robot has entered the danger set, a collision.

Designing a CBF almost always starts here, with a physically meaningful quantity whose zero-superlevel set is the region we want to stay in.

<h2 class="section-header teach">Forward invariance: never crossing the boundary</h2>

Starting safe is not enough. We want the robot to remain safe for *all* future time, which is precisely the notion of **forward invariance**: a trajectory that begins in $\mathcal{C}$ never leaves it.

The useful insight from Nagumo's theorem is that we do not have to police the whole set. The only place a trajectory can escape is through the boundary, so it is enough to ensure that on the boundary the state never moves outward. In terms of the barrier function, $h$ must not be decreasing at the moment it hits zero:

$$ \dot{h}(x) \ge 0 \quad \text{whenever} \quad h(x) = 0 . $$

So safety reduces to controlling a single rate of change, $\dot h$, and only the sign it takes right at the edge of the safe set.

<h2 class="section-header learn">Relaxing the condition: the CBF inequality</h2>

A tempting shortcut is to demand $\dot{h}(x) \ge 0$ everywhere, not just on the boundary. That certainly keeps the system safe, but it is badly conservative: it forbids $h$ from ever decreasing, so the robot is never allowed to approach the obstacle at all, even when it sits a hundred meters away with plenty of room to spare.

What we actually want is a condition that is permissive when there is margin to burn and only becomes strict as that margin runs out. The CBF condition achieves this by letting $\dot h$ go negative in proportion to how safe we currently are, using a class $\mathcal{K}$ function $\alpha$:

$$ \dot{h}(x, u) \ge -\alpha\big(h(x)\big) . $$

- When $h$ is large (far from the obstacle), $-\alpha(h)$ is very negative, so $\dot h$ is allowed to be very negative. The robot may freely close the distance.
- As $h \to 0$ (approaching the boundary), $-\alpha(h) \to 0$, and we recover the strict Nagumo condition $\dot h \ge 0$ exactly where it matters.

This is the defining inequality of a **control barrier function**. Any input $u$ that satisfies it at every state renders $\mathcal{C}$ forward invariant, so the robot is provably safe for all time while still being free to use the space it has.

<h2 class="section-header build">Computing the constraint</h2>

The condition above is stated in terms of $\dot h$, but we never command $\dot h$ directly. We command $u$. To expose how the input enters, differentiate $h$ along the dynamics with the chain rule. For a control-affine system $\dot x = f(x) + g(x)\,u$, this splits into a drift part and an input part through the Lie derivatives:

$$ \dot{h} = \nabla h(x)^{\top}\big(f(x) + g(x)\,u\big) = L_f h(x) + L_g h(x)\,u . $$

Substituting back into the CBF condition turns it into a constraint we can actually impose on the controller:

$$ L_f h(x) + L_g h(x)\,u \ge -\alpha\big(h(x)\big) . $$

The key feature is that this is **linear in $u$**. Everything else is a number once the state is known, so the safety requirement is just a linear inequality on the input, the exact shape a quadratic program can enforce while minimally adjusting a nominal controller.

<h2 class="section-header teach">The safety filter: a quadratic program</h2>

A CBF tells us which inputs are safe, but it says nothing about which task we are trying to accomplish. In practice some other controller already does that: a planner or a Control Lyapunov Function hands us a **nominal input** $u_{\text{nom}}$ that drives toward the goal but knows nothing about the obstacle.

The idea of the **safety filter** is to leave that controller alone whenever it is safe and to overrule it as gently as possible when it is not. Among all inputs that satisfy the CBF constraint, we pick the one closest to $u_{\text{nom}}$. That is a quadratic objective under a single linear constraint, a **quadratic program**:

$$ u^{*}(x) = \arg\min_{u}\; \tfrac{1}{2}\lVert u - u_{\text{nom}} \rVert^2 \quad \text{s.t.}\quad L_f h(x) + L_g h(x)\,u \ge -\alpha\big(h(x)\big) . $$

Because the objective is convex and the constraint is linear, this solves in microseconds and can run at the control loop rate. Its two regimes mirror the CBF condition itself:

- When $u_{\text{nom}}$ already satisfies the constraint, it is the minimizer, so $u^{*} = u_{\text{nom}}$ and the filter is completely transparent.
- When $u_{\text{nom}}$ would violate safety, the solution lands exactly on the constraint boundary, the smallest possible correction that keeps the system inside $\mathcal{C}$.

Extending the program is just as direct. Actuator limits enter as an extra constraint $u \in \mathcal{U}$, and several obstacles each contribute one more linear inequality. The cost is that adding constraints can make the program **infeasible**: if no input satisfies all of them at once, the filter has no safe action left to return, which is the failure mode worth watching for in any real deployment.

<h2 class="section-header learn">Relative degree and dynamic models</h2>

There is a catch hiding in that inequality. For the input to constrain anything, $u$ has to actually appear, which means $L_g h(x)$ must be non-zero. That is exactly the requirement that $h$ have **relative degree 1**: differentiating it once already brings in $u$.

Whether this holds depends on the model. If the barrier $h$ depends on position but the input is an acceleration, then $\dot h$ contains only velocity and no $u$, so $L_g h = 0$ and the constraint says nothing. The barrier has relative degree 2, and the plain CBF condition is vacuous. Handling that case needs higher-order CBFs, the subject of the next post.

<div class="concept-tabs concept-tabs--learn">
  <div class="tab-nav" role="tablist">
    <button class="tab-btn is-active" data-tab="single">Single Integrator</button>
    <button class="tab-btn" data-tab="double">Double Integrator</button>
    <button class="tab-btn" data-tab="unicycle">Dynamic Unicycle</button>
  </div>
  <div class="tab-panels">
    <!-- single integrator -->
    <div class="tab-panel is-active" data-panel="single">
      <div class="tab-section">
        <span class="tab-label">Relative degree 1</span>
        <p>The input <em>is</em> the velocity, $\dot{p} = u$. A position-based barrier therefore sees the input after a single derivative, so $L_g h \neq 0$ and the plain CBF condition works directly.</p>
        <p>$$ \dot{h} = \nabla h(x)^{\top} u . $$</p>
      </div>
    </div>
    <!-- double integrator -->
    <div class="tab-panel" data-panel="double">
      <div class="tab-section">
        <span class="tab-label">Relative degree 2</span>
        <p>Here the input is acceleration, $\dot{p} = v,\ \dot{v} = u$. The first derivative of a position barrier returns only velocity, with no $u$ in sight, so $L_g h = 0$ and the constraint is empty until we differentiate again.</p>
        <p>$$ \dot{h} = \nabla h(x)^{\top} v, \qquad L_g h = 0 . $$</p>
      </div>
    </div>
    <!-- unicycle -->
    <div class="tab-panel" data-panel="unicycle">
      <div class="tab-section">
        <span class="tab-label">Relative degree 2</span>
        <p>The dynamic unicycle is commanded through linear acceleration $a$ and angular velocity $\omega$. A distance barrier again depends on position only, so the acceleration command shows up one derivative too late, leaving the same relative-degree-2 obstacle to resolve.</p>
      </div>
    </div>
  </div>
</div>
