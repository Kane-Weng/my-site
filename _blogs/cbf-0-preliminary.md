---
title: "[CBF] Preliminaries"
excerpt: "Fundamental blocks that Control Barrier Function builds upon"
categories: control
order: 1
date: 2026-06-29
use_math: true
---

<span class="lang-tag">Control Theory</span>
<span class="topic-tag">CBF</span>
<span class="topic-tag">Math</span>
<span class="topic-tag">Preliminaries</span>

Control Barrier Function (CBF) is a fascinating concept that is widely applied in safe autonomous systems and robotics.
Lots of concepts forms this powerful tool. This page organizes the concepts that contributes to the formulation of CBF.

*Topics planned:*
- Barrier Function -> Control Barrier Function
- Basic control knowledge: control-affine, linearity, state & control input, relative degree
- Lipschitz continuous
- Class K functions
- Quadratic Program (QP)
- Dynamic Models
- Set (set invariance, Nagumo ...)

*TODO*
- The info inside each tab, period/comma/.. can't be solely at front of a sentence
- fix the dynamic models visual element

<h2 class="section-header build">Basic control knowledge</h2>

First, lets start with some basic concepts in control theory: control-affine, linearity, state & control input, relative degree, Control Lyapunov Functions (CLFs), input constraints, ...

<div class="concept-tabs concept-tabs--build">
  <div class="tab-nav" role="tablist">
    <button class="tab-btn is-active" data-tab="state">State &amp; Input</button>
    <button class="tab-btn" data-tab="affine">Control-Affine</button>
    <button class="tab-btn" data-tab="reldeg">Relative Degree</button>
    <button class="tab-btn" data-tab="clf">Control Lyapunov Fn</button>
  </div>
  <div class="tab-panels">
    <div class="tab-panel is-active" data-panel="state">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>state</strong> $x \in \mathbb{R}^n$ collects every quantity needed to fully describe the system at an instant. The <strong>control input</strong> $u \in \mathbb{R}^m$ is the signal we are free to command in order to influence how the state evolves.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>For a point-mass vehicle moving on a line, the state is its position and velocity $x = (p, v)$, and the input is the commanded acceleration $u = a$. Knowing $x$ today and the inputs we apply, we can predict tomorrow.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Math</span>
        <p>The evolution of the system is written as a first-order ODE:</p>
        <p>$$ \dot{x} = f(x, u), \qquad x \in \mathbb{R}^n,\; u \in \mathbb{R}^m. $$</p>
      </div>
    </div>
    <div class="tab-panel" data-panel="affine">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>A system is <strong>control-affine</strong> when its dynamics are <em>linear in the control input</em> $u$ — even though they may be highly nonlinear in the state $x$. This is the structure CBFs (and CLFs) rely on, because it makes $\dot{h}$ affine in $u$ and therefore a <em>linear</em> constraint we can enforce.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>The unicycle and most kinematic robot models are control-affine: the drift term $f(x)$ captures the natural motion, while $g(x)$ maps the commanded velocities/accelerations into state rates.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Math</span>
        <p>$$ \dot{x} = f(x) + g(x)\,u, \qquad f:\mathbb{R}^n \!\to\! \mathbb{R}^n,\; g:\mathbb{R}^n \!\to\! \mathbb{R}^{n \times m}. $$</p>
      </div>
    </div>
    <div class="tab-panel" data-panel="reldeg">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>relative degree</strong> of an output $h(x)$ is the number of times you must differentiate it with respect to time before the control input $u$ shows up explicitly. CBF design wants relative degree $1$, so that $u$ already appears in $\dot{h}$ and can be used to keep the system safe.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>If $h$ depends only on <em>position</em> but $u$ is an <em>acceleration</em>, then $\dot{h}$ still has no $u$ in it — you must differentiate twice, giving relative degree $2$ (this motivates High-Order CBFs).</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Math</span>
        <p>$h$ has relative degree $r$ if</p>
        <p>$$ L_g L_f^{\,k} h(x) = 0 \;\; (k < r-1), \qquad L_g L_f^{\,r-1} h(x) \neq 0. $$</p>
      </div>
    </div>
    <div class="tab-panel" data-panel="clf">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>A <strong>Control Lyapunov Function (CLF)</strong> $V(x) \ge 0$ certifies that <em>some</em> input can drive the system toward a goal (stability) — the mirror image of how a CBF certifies that some input can keep the system safe.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>Reaching a target $x_{\text{goal}}$: pick $V(x) = \lVert x - x_{\text{goal}} \rVert^2$. Any input that makes $V$ decrease pulls the state toward the goal.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Math</span>
        <p>There exists an input $u$ such that</p>
        <p>$$ \dot{V}(x,u) = L_f V(x) + L_g V(x)\,u \le -\gamma\big(V(x)\big), $$</p>
        <p>for some class $\mathcal{K}$ function $\gamma$.</p>
      </div>
    </div>
  </div>
</div>

<h2 class="section-header teach">Mathematics</h2>

Follow up, advance math theories are used to support CBF: Lipschitz, class K, Set, QP, Lie derivatives, feasibility ...

<div class="concept-tabs concept-tabs--teach">
  <div class="tab-nav" role="tablist">
    <button class="tab-btn is-active" data-tab="lipschitz">Lipschitz</button>
    <button class="tab-btn" data-tab="classk">Class $\mathcal{K}$</button>
    <button class="tab-btn" data-tab="lie">Lie Derivative</button>
    <button class="tab-btn" data-tab="qp">Quadratic Program</button>
  </div>
  <div class="tab-panels">
    <div class="tab-panel is-active" data-panel="lipschitz">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p><strong>Lipschitz continuity</strong> bounds how fast a function can change: its slope can never exceed a fixed constant $L$. It is the key regularity condition that guarantees an ODE has a unique solution (Picard–Lindelöf).</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>$f(x) = \sin x$ is Lipschitz with constant $L = 1$. By contrast $f(x) = \sqrt{x}$ is <em>not</em> Lipschitz near $0$, where its slope blows up.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Math</span>
        <p>$$ \lVert f(x) - f(y) \rVert \le L \, \lVert x - y \rVert \quad \forall\, x, y. $$</p>
      </div>
    </div>
    <div class="tab-panel" data-panel="classk">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>A <strong>class $\mathcal{K}$ function</strong> $\alpha:[0,a)\to[0,\infty)$ is continuous, strictly increasing, with $\alpha(0)=0$. It belongs to $\mathcal{K}_\infty$ if it is also unbounded. CBFs use an <em>extended</em> class $\mathcal{K}_\infty$ function (defined on all of $\mathbb{R}$) to soften strict invariance.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>$\alpha(r) = r$, $\alpha(r) = c\,r$ with $c>0$, or $\alpha(r) = \tanh(r)$ are all class $\mathcal{K}$.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Math</span>
        <p>It appears directly in the CBF safety condition, relaxing $\dot{h}\ge 0$ into</p>
        <p>$$ \dot{h}(x,u) \ge -\alpha\big(h(x)\big). $$</p>
      </div>
    </div>
    <div class="tab-panel" data-panel="lie">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>Lie derivative</strong> $L_f h$ is the directional derivative of a scalar field $h$ along a vector field $f$ — i.e. the instantaneous rate of change of $h$ as the state flows along $f$.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>For a control-affine system the chain rule splits $\dot{h}$ neatly into a drift part and an input part:</p>
        <p>$$ \dot{h} = L_f h(x) + L_g h(x)\,u. $$</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Math</span>
        <p>$$ L_f h(x) = \nabla h(x)^{\top} f(x), \qquad L_g h(x) = \nabla h(x)^{\top} g(x). $$</p>
      </div>
    </div>
    <div class="tab-panel" data-panel="qp">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>A <strong>Quadratic Program (QP)</strong> minimizes a quadratic objective subject to linear constraints. It is convex (and efficiently solvable) when the quadratic term is positive semidefinite — exactly the case for the CBF safety filter.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Example</span>
        <p>The <strong>CBF-QP</strong> takes a nominal controller $u_{\text{nom}}$ and minimally adjusts it so the safety constraint holds — the smallest "nudge" that keeps the robot safe.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Math</span>
        <p>$$ \min_{u}\; \tfrac{1}{2}\lVert u - u_{\text{nom}} \rVert^2 \quad \text{s.t.}\quad L_f h + L_g h\,u \ge -\alpha\big(h(x)\big). $$</p>
      </div>
    </div>
  </div>
</div>

<h2 class="section-header learn">Dynamic Models</h2>

An appendix-like for referencing the dynamics: kinematic_bicycle, ...

<div class="concept-tabs concept-tabs--learn">
  <div class="tab-nav" role="tablist">
    <button class="tab-btn is-active" data-tab="integrator">Single Integrator</button>
    <button class="tab-btn" data-tab="unicycle">Unicycle</button>
    <button class="tab-btn" data-tab="bicycle">Kinematic Bicycle</button>
  </div>
  <div class="tab-panels">
    <div class="tab-panel is-active" data-panel="integrator">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>single integrator</strong> is the simplest model: the control input <em>is</em> the velocity, so the point can move instantly in any direction. Great for high-level planning and quick CBF demos.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Math</span>
        <p>$$ \dot{x} = u, \qquad x \in \mathbb{R}^2,\; u \in \mathbb{R}^2. $$</p>
      </div>
      <figure class="tab-diagram">
        <svg viewBox="0 0 260 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Single integrator: a point with a commanded velocity vector">
          <circle cx="55" cy="65" r="7" fill="currentColor"/>
          <line x1="62" y1="65" x2="190" y2="65" stroke="currentColor" stroke-width="2"/>
          <polyline points="182,59 192,65 182,71" fill="none" stroke="currentColor" stroke-width="2"/>
          <text x="112" y="52" fill="currentColor" font-size="14" font-style="italic">u = ẋ</text>
        </svg>
        <figcaption>Velocity-controlled point mass.</figcaption>
      </figure>
    </div>
    <div class="tab-panel" data-panel="unicycle">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>unicycle</strong> adds a heading $\theta$: the robot can only drive along the direction it faces (linear speed $v$) and turn in place (angular speed $\omega$). This nonholonomic constraint makes it a classic control-affine testbed.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Math</span>
        <p>$$ \dot{x} = v\cos\theta, \quad \dot{y} = v\sin\theta, \quad \dot{\theta} = \omega, \qquad u = (v, \omega). $$</p>
      </div>
      <figure class="tab-diagram">
        <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Unicycle: a body with heading, forward velocity v and turn rate omega">
          <circle cx="95" cy="75" r="22" fill="none" stroke="currentColor" stroke-width="2"/>
          <line x1="95" y1="75" x2="175" y2="38" stroke="currentColor" stroke-width="2"/>
          <polyline points="166,35 178,37 171,46" fill="none" stroke="currentColor" stroke-width="2"/>
          <text x="180" y="36" fill="currentColor" font-size="13" font-style="italic">v, θ</text>
          <path d="M 120 60 A 28 28 0 0 1 124 92" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <polyline points="120,88 124,93 128,87" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <text x="130" y="80" fill="currentColor" font-size="12" font-style="italic">ω</text>
        </svg>
        <figcaption>Drives along its heading, turns with $\omega$.</figcaption>
      </figure>
    </div>
    <div class="tab-panel" data-panel="bicycle">
      <div class="tab-section">
        <span class="tab-label">Definition</span>
        <p>The <strong>kinematic bicycle</strong> lumps the two wheels of each axle into one. Steering angle $\delta$ at the front wheel sets the turn rate, scaled by the wheelbase $L$. It is the workhorse model for car-like robots and autonomous driving.</p>
      </div>
      <div class="tab-section">
        <span class="tab-label">Math</span>
        <p>$$ \dot{x} = v\cos\theta, \quad \dot{y} = v\sin\theta, \quad \dot{\theta} = \frac{v}{L}\tan\delta, \quad \dot{v} = a. $$</p>
      </div>
      <figure class="tab-diagram">
        <svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kinematic bicycle: rear and steered front wheel joined by a wheelbase">
          <line x1="60" y1="80" x2="175" y2="80" stroke="currentColor" stroke-width="2"/>
          <line x1="48" y1="68" x2="72" y2="92" stroke="currentColor" stroke-width="4"/>
          <line x1="162" y1="66" x2="188" y2="94" stroke="currentColor" stroke-width="4"/>
          <line x1="175" y1="80" x2="215" y2="62" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
          <polyline points="208,60 217,61 212,69" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <text x="105" y="98" fill="currentColor" font-size="13" font-style="italic">L</text>
          <text x="196" y="58" fill="currentColor" font-size="13" font-style="italic">δ</text>
        </svg>
        <figcaption>Front steering angle $\delta$, wheelbase $L$.</figcaption>
      </figure>
    </div>
  </div>
</div>
