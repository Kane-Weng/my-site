---
title: "[CBF] Preliminaries"
excerpt: "The core mathematical and control-theoretic building blocks behind Control Barrier Functions."
categories: control
order: 1
date: 2026-06-29
use_math: true
---

<span class="lang-tag">Control Theory</span>
<span class="topic-tag">CBF</span>
<span class="topic-tag">Math</span>
<span class="topic-tag">Preliminaries</span>

How do you guarantee an autonomous vehicle or robot will never crash, while letting it efficiently achieve its goal? In modern control theory, the answer is often **Control Barrier Functions (CBFs)**.

By acting as a mathematical safety filter, CBFs have revolutionized how we enforce hard safety constraints in real-time robotics. However, because the framework sits at the intersection of non-linear dynamics, real analysis, and optimization, it relies on a specific constellation of foundational concepts.

This page serves as an interactive reference guide to those core building blocks. We start from the underlying mathematics, move to system dynamics, and finish with the common robot models.

<h2 class="section-header teach">Mathematics</h2>

These are the analytical tools the rest of the framework leans on. Each one is a self-contained idea from real analysis or optimization, independent of any particular controller.

<div class="concept-tabs concept-tabs--teach">
  <div class="tab-nav" role="tablist">
    <button class="tab-btn is-active" data-tab="lipschitz">Lipschitz</button>
    <button class="tab-btn" data-tab="classk">Class $\mathcal{K}$</button>
    <button class="tab-btn" data-tab="lie">Lie Derivative</button>
    <button class="tab-btn" data-tab="barrier">Barrier Function</button>
    <button class="tab-btn" data-tab="set">Set Invariance</button>
    <button class="tab-btn" data-tab="qp">Quadratic Program</button>
  </div>
  <div class="tab-panels">
    <!-- lipschitz -->
    <div class="tab-panel is-active" data-panel="lipschitz">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p><strong>Lipschitz continuity</strong> bounds how fast a function can change: its slope can never exceed a fixed constant $L$. It is the key regularity condition that guarantees an ODE has a unique solution (Picard-Lindelof).</p>
        <p>$$ \lVert f(x) - f(y) \rVert \le L \, \lVert x - y \rVert \quad \forall\, x, y. $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>$f(x) = \sin x$ is Lipschitz with constant $L = 1$. By contrast $f(x) = \sqrt{x}$ is <em>not</em> Lipschitz near $0$, where its slope blows up.</p>
      </div>
    </div>
    <!-- class K -->
    <div class="tab-panel" data-panel="classk">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>A <strong>class $\mathcal{K}$ function</strong> $\alpha:[0,a)\to[0,\infty)$ is continuous, strictly increasing, with $\alpha(0)=0$. It belongs to $\mathcal{K}_\infty$ if it is also unbounded. An <em>extended</em> class $\mathcal{K}_\infty$ function, defined on all of $\mathbb{R}$, is the version most often used to relax strict inequalities.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>$\alpha(r) = r$, $\alpha(r) = c\,r$ with $c>0$, or $\alpha(r) = \tanh(r)$ are all class $\mathcal{K}$.</p>
      </div>
    </div>
    <!-- lie derivative -->
    <div class="tab-panel" data-panel="lie">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>Lie derivative</strong> $L_f h$ is the directional derivative of a scalar field $h$ along a vector field $f$. It captures the instantaneous rate of change of $h$ as the state flows along $f$.</p>
        <p>$$ L_f h(x) = \nabla h(x)^{\top} f(x), \qquad L_g h(x) = \nabla h(x)^{\top} g(x). $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>For a control-affine system the chain rule splits $\dot{h}$ neatly into a drift part and an input part:</p>
        <p>$$ \dot{h} = L_f h(x) + L_g h(x)\,u. $$</p>
      </div>
    </div>
    <!-- barrier function -->
    <div class="tab-panel" data-panel="barrier">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>A <strong>barrier function</strong> $h:\mathbb{R}^n \to \mathbb{R}$ encodes a desired (safe) set as its zero-superlevel set. By convention $h(x) > 0$ in the interior, $h(x) = 0$ on the boundary, and $h(x) < 0$ outside. A <strong>safe set $\mathcal{C}$</strong> is defined as:</p>
        <p>$$ \mathcal{C} = \{\, x \in \mathbb{R}^n : h(x) \ge 0 \,\}. $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>For a robot that must stay at least $d$ away from an obstacle at $p_o$, a natural choice is $h(x) = \lVert p - p_o \rVert ^2 - d^2$. It is positive when safely clear and zero exactly at the minimum allowed distance.</p>
      </div>
    </div>
    <!-- set invariance -->
    <div class="tab-panel" data-panel="set">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>A set $\mathcal{C}$ is <strong>forward invariant</strong> if a trajectory that starts inside it never leaves. <strong>Nagumo's theorem</strong> characterizes this by looking at the boundary: the system's vector field must not point outward. Mathematically, the rate of change of the barrier function cannot be negative when the system is right on the edge.</p>
        <p>$$ \dot{h}(x) \ge 0 \quad \text{whenever} \quad h(x) = 0. $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>Take the distance set $\mathcal{C} = \{\, h \ge 0 \,\}$ from the barrier example. As long as the system's dynamics push the state parallel to the boundary or back inside ($\dot{h} \ge 0$), the robot can never cross into the unsafe region, guaranteeing $\mathcal{C}$ stays invariant.</p>
      </div>
    </div>
    <!-- QP -->
    <div class="tab-panel" data-panel="qp">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>A <strong>Quadratic Program (QP)</strong> minimizes a quadratic objective subject to linear constraints. It is convex and efficiently solvable when the quadratic term is positive semidefinite.</p>
        <p>$$ \min_{u}\; \tfrac{1}{2}\lVert u - u_{\text{nom}} \rVert^2 \quad \text{s.t. linear constraints} . $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>A safety filter takes a nominal controller $u_{\text{nom}}$ and minimally adjusts it so a linear inequality constraint holds, applying the smallest change that still keeps the robot safe.</p>
      </div>
    </div>

  </div>
</div>

<h2 class="section-header build">Basic control knowledge</h2>

These core control theory concepts define how a system behaves and how our chosen inputs steer it. They build directly on the Lie derivative introduced above.

<div class="concept-tabs concept-tabs--build">
  <div class="tab-nav" role="tablist">
    <button class="tab-btn is-active" data-tab="state">State &amp; Input</button>
    <button class="tab-btn" data-tab="affine">Control-Affine</button>
    <button class="tab-btn" data-tab="reldeg">Relative Degree</button>
    <button class="tab-btn" data-tab="clf">Control Lyapunov Fn</button>
    <button class="tab-btn" data-tab="feasibility">Feasibility</button>
  </div>
  <div class="tab-panels">
    <!-- state & input -->
    <div class="tab-panel is-active" data-panel="state">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>state</strong> $x \in \mathbb{R}^n$ collects every quantity needed to fully describe the system at an instant. The <strong>control input</strong> $u \in \mathbb{R}^m$ is the signal we are free to command in order to influence how the state evolves.</p>
        <p>$$ \dot{x} = f(x, u), \qquad x \in \mathbb{R}^n,\; u \in \mathbb{R}^m. $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>For a point-mass vehicle moving on a line, the state is its position and velocity $x = (p, v),$ and the input is the commanded acceleration $u = a$. Knowing the current state $x$ and the applied inputs allows us to predict the system's future trajectory $\dot{x}$.</p>
      </div>
    </div>
    <!-- control-affine -->
    <div class="tab-panel" data-panel="affine">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>A system is <strong>control-affine</strong> when its dynamics are <em>linear in the control input</em> $u$, even though they may be highly nonlinear in the state $x$.</p>
        <p>$$ \dot{x} = f(x) + g(x)\,u, \qquad f:\mathbb{R}^n \!\to\! \mathbb{R}^n,\; g:\mathbb{R}^n \!\to\! \mathbb{R}^{n \times m}. $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>The unicycle and most kinematic robot models are control-affine: the drift term $f(x)$ captures the natural motion, while $g(x)$ maps the commanded velocities and accelerations into state rates.</p>
      </div>
    </div>
    <!-- relative degree -->
    <div class="tab-panel" data-panel="reldeg">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>relative degree</strong> of an output $h(x)$ is the number of times you must differentiate it with respect to time before the control input $u$ shows up explicitly.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>If $h$ depends only on <em>position</em> but $u$ is an <em>acceleration</em>, then $\dot{h}$ still has no $u$ in it. One must differentiate it twice, giving relative degree $2$.</p>
      </div>
    </div>
    <!-- clf -->
    <div class="tab-panel" data-panel="clf">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>A <strong>Control Lyapunov Function (CLF)</strong> $V(x) \ge 0$ acts like a topographical map where the target is the lowest valley ($V = 0$). It guarantees that no matter where the system is, we have enough control authority to drive downhill toward the goal. Mathematically, there must exist an input $u$ that forces the "energy" or distance to decrease at a strict minimum rate.</p>
        <p>$$ \dot{V}(x,u) = L_f V(x) + L_g V(x)\,u \le -\gamma\big(V(x)\big) $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>If we want to reach a target $x_{\text{goal}}$, we can define our "altitude" as the squared distance: $V(x) = \lVert x - x_{\text{goal}} \rVert^2$. The CLF condition ensures we can always pick a control input $u$ that makes this distance shrink over time.</p>
      </div>
    </div>
    <!-- feasibility -->
    <div class="tab-panel" data-panel="feasibility">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p><strong>Feasibility</strong> asks whether a valid control input even exists at a given state. A state is feasible when the set of inputs satisfying every constraint at once, the safety condition together with the actuator limits $u \in \mathcal{U}$, is non-empty. Once that set is empty the controller has no admissible action left.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>Tight actuator limits can make a state infeasible. If a car is already braking as hard as its tires allow but still cannot satisfy the safety inequality, no remaining input keeps it safe, so the problem has no solution at that instant.</p>
      </div>
    </div>
  </div>
</div>

<h2 class="section-header learn">Dynamic Models</h2>

A quick reference for the kinematic models used throughout, listed from the simplest point mass to the more car-like steering model.

<div class="concept-tabs concept-tabs--learn">
  <div class="tab-nav" role="tablist">
    <button class="tab-btn is-active" data-tab="integrator">Single Integrator</button>
    <button class="tab-btn" data-tab="double">Double Integrator</button>
    <button class="tab-btn" data-tab="unicycle">Dynamic Unicycle</button>
    <button class="tab-btn" data-tab="bicycle">Kinematic Bicycle</button>
  </div>
  <div class="tab-panels">
    <!-- integrator -->
    <div class="tab-panel is-active" data-panel="integrator">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>single integrator</strong> is the simplest model: the control input <em>is</em> the velocity, so the point can move instantly in any direction. It is convenient for high-level planning and quick demos.</p>
        <p>$$ \dot{x} = u, \qquad x \in \mathbb{R}^2,\; u \in \mathbb{R}^2. $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">State-Space</span>
        <p>$$ \mathbf{x} = \begin{bmatrix} x \\ y \end{bmatrix}, \quad \mathbf{u} = \begin{bmatrix} u_x \\ u_y \end{bmatrix}, \qquad \dot{\mathbf{x}} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \mathbf{u}. $$</p>
      </div>
    </div>
    <!-- double integrator -->
    <div class="tab-panel" data-panel="double">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>double integrator</strong> models a point mass whose control input is acceleration, so position responds only after two integrations. It is the canonical second-order system, and because the input is acceleration while $h$ usually depends on position, the safety output has relative degree $2$.</p>
        <p>$$ \dot{p} = v, \quad \dot{v} = u, \qquad p, v \in \mathbb{R},\; u = a. $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">State-Space</span>
        <p>Stacking position and velocity gives a linear (LTI) system $\dot{\mathbf{x}} = A\mathbf{x} + B u$:</p>
        <p>$$ \mathbf{x} = \begin{bmatrix} p \\ v \end{bmatrix}, \qquad \dot{\mathbf{x}} = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} \mathbf{x} + \begin{bmatrix} 0 \\ 1 \end{bmatrix} u. $$</p>
      </div>
    </div>
    <!-- unicycle -->
    <div class="tab-panel" data-panel="unicycle">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>dynamic unicycle</strong> extends the standard kinematic model by incorporating linear velocity $v$ into the state. The robot is commanded via linear acceleration $a$ and angular velocity $\omega$.</p>
        <p>$$ \dot{x} = v\cos\theta, \quad \dot{y} = v\sin\theta, \quad \dot{\theta} = \omega, \quad \dot{v} = a, \qquad u = (a, \omega). $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">State-Space</span>
        <p>$$ \mathbf{x} = \begin{bmatrix} x \\ y \\ \theta \\ v \end{bmatrix}, \quad \mathbf{u} = \begin{bmatrix} a \\ \omega \end{bmatrix}, \qquad \dot{\mathbf{x}} = \begin{bmatrix} v\cos\theta \\ v\sin\theta \\ 0 \\ 0 \end{bmatrix} + \begin{bmatrix} 0 & 0 \\ 0 & 0 \\ 0 & 1 \\ 1 & 0 \end{bmatrix} \mathbf{u}. $$</p>
      </div>
    </div>
    <!-- bicycle -->
    <div class="tab-panel" data-panel="bicycle">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>kinematic bicycle</strong> lumps the two wheels of each axle into one. To use this model in a CBF framework, we must make it control-affine. We do this by tracking the Center of Mass (CoM) and treating the slip angle $\beta$ as our control input alongside acceleration $a$. Assuming small slip angles ($\sin\beta \approx \beta$), this yields a clean affine system.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">State-Space</span>
        <p>For a state vector $\mathbf{x} = [x, y, \theta, v]^{\top}$ and input vector $\mathbf{u} = [a, \beta]^{\top}$, the control-affine dynamics $\dot{\mathbf{x}} = f(\mathbf{x}) + g(\mathbf{x})\mathbf{u}$ are:</p>
        <p>$$ \dot{\mathbf{x}} = \begin{bmatrix} v\cos\theta \\ v\sin\theta \\ 0 \\ 0 \end{bmatrix} + \begin{bmatrix} 0 & -v\sin\theta \\ 0 & v\cos\theta \\ 0 & \frac{v}{l_r} \\ 1 & 0 \end{bmatrix} \begin{bmatrix} a \\ \beta \end{bmatrix} $$</p>
        <p>where $l_r$ is the distance from the CoM to the rear axle, and $\beta = \tan^{-1}\big(\frac{l_r}{l_f + l_r}\tan\delta\big)$.</p>
      </div>
    </div>

  </div>
</div>