---
title: "DASC Lab"
excerpt: "Research Assistant working on safety-critical control."
header:
  teaser: ./assets/images/umich_rob.jpg
date: 2026-05-22
categories: research
order: 1
use_math: true
---
<span class="lang-tag">Undergraduate Research</span>
<span class="topic-tag">Mar 2026 – Present</span>
<span class="topic-tag">Control & Planning</span>
<span class="topic-tag">Safety-Critical Control</span>

<div class="project-links">
  <a class="repo-link" href="https://www.taekyung.me/dpcbf"><i class="fas fa-globe"></i> DPCBF Project Page</a>
  <a class="repo-link" href="https://www.taekyung.me/plcbf"><i class="fas fa-globe"></i> PLCBF Project Page</a>
  <a class="repo-link" href="https://dasc-lab.github.io/"><i class="fas fa-flask"></i> DASC Lab</a>
</div>

<div class="terminal-window">
  <div class="terminal-header">
    <span class="terminal-title">kane@umich:~/projects/dasc</span>
    <div class="win-controls">
      <span>&#8211;</span> <span>&#9634;</span> <span>&times;</span> 
    </div>
  </div>
  
  <div class="terminal-body">
    <div class="command" data-prompt="kane@umich:~/projects/dasc$ ">info --detailed</div>
    <code class="output">
      Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Detail <br>
      ------- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ------- <br>
      TIME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mar 2026 – Present <br>
      LAB/ORG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DASC Lab, U-M Robotics <br>
      ROLE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Research Assistant <br>
      SIM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Python, cvxpy, CasADi, do-mpc, Optuna, W&B <br>
      HARDWARE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ROS 2 Humble, JAX, Vicon, DJI RoboMaster EP, Docker
    </code>
    <div class="command" data-prompt="kane@umich:~/projects/dasc$ "><span class="cursor">_</span></div>
  </div>
</div>

<!-- project abstract -->
<h2 class="section-header build">Mission</h2>

The Distributed Autonomous Systems and Control (DASC) Lab works on planning, learning, and control for autonomous robots, with a focus on safety and provable guarantees. I work on the safety side with Control Barrier Functions (CBFs). A CBF acts as a filter on top of any nominal controller: it leaves the command alone while the robot is safe, and changes it only as much as needed to avoid a collision.

<video class="project-img" autoplay loop muted playsinline>
  <source src="/my-site/assets/videos/dpcbf_bicycle_100obs.mp4" type="video/mp4">
</video>
<span class="project-caption">A DPCBF safety filter steering a car-like robot through 100 moving obstacles.</span>

<!-- project details -->
<h2 class="section-header teach">Implementation</h2>

### DPCBF: Beyond Collision Cones
A common CBF for moving obstacles is the collision-cone CBF (C3BF). It rejects any relative velocity that points into the cone toward an obstacle, no matter how slow, so a robot cannot even drift toward an obstacle that is still far away. In crowded scenes the cones can leave no safe input at all, even when a path exists.

The Dynamic Parabolic CBF (DPCBF), from Park, Kim, and Panagou at ICRA 2026, replaces the cone with a parabola that adapts to distance and relative speed. A slow approach from far away is allowed, while a fast approach in the same direction is not.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">The Math</div>
    </div>
  </summary>
  <div class="project-content">
    <p>For a control-affine robot $\dot{x} = f(x) + g(x)u$ with safe set $\lbrace x : h(x) \ge 0 \rbrace$, a CBF filter solves a small quadratic program (QP) at every step: stay as close as possible to the nominal input while satisfying</p>
    <p>$$ L_f h(x) + L_g h(x)\, u \ge -\alpha\big(h(x)\big). $$</p>
    <p>The DPCBF picks $h$ for each obstacle. Let $p_{\text{rel}}$ and $v_{\text{rel}}$ be the obstacle's position and velocity relative to the robot, and $r$ their combined radius. Rotating $v_{\text{rel}}$ into a line-of-sight frame splits it into $v_{\parallel}$ along the line to the obstacle and $v_{\perp}$ across it. Then</p>
    <p>$$ h = v_{\parallel} + \lambda\, v_{\perp}^2 + \mu, \qquad \lambda = k_\lambda \frac{\sqrt{\lVert p_{\text{rel}} \rVert^2 - r^2}}{\lVert v_{\text{rel}} \rVert}, \qquad \mu = k_\mu \sqrt{\lVert p_{\text{rel}} \rVert^2 - r^2}. $$</p>
    <p>The boundary $h = 0$ is a parabola in relative-velocity space: $\mu$ moves its vertex and $\lambda$ sets its curvature. Both shrink to zero at contact, so the constraint tightens as the obstacle gets closer.</p>
  </div>
</details>

<div class="project-carousel" id="dpcbf-carousel">
  <div class="carousel-inner">
    <div class="carousel-track" id="dpcbf-track">
      <div class="carousel-slide" data-caption="Head-on encounter: the C3BF (a) turns away early, while the DPCBF (b) holds course longer and still reaches the goal.">
        <img src="/my-site/assets/images/dpcbf_c3bf_vs_dpcbf.png" alt="C3BF versus DPCBF in a head-on encounter">
      </div>
      <div class="carousel-slide" data-caption="The same DPCBF filter on six robot models, in 2D and 3D.">
        <img src="/my-site/assets/images/dpcbf_all_models.png" alt="DPCBF on six robot models">
      </div>
    </div>
    <button class="carousel-btn carousel-prev" onclick="carouselStep('dpcbf', -1)" aria-label="Previous">&#8249;</button>
    <button class="carousel-btn carousel-next" onclick="carouselStep('dpcbf', 1)" aria-label="Next">&#8250;</button>
  </div>
  <div class="carousel-dots" id="dpcbf-dots">
    <span class="carousel-dot active" onclick="carouselGoTo('dpcbf', 0)"></span>
    <span class="carousel-dot" onclick="carouselGoTo('dpcbf', 1)"></span>
  </div>
  <span class="project-caption">Head-on encounter: the C3BF (a) turns away early, while the DPCBF (b) holds course longer and still reaches the goal.</span>
</div>

**My part:** The original paper shows the DPCBF on a kinematic bicycle and a dynamic unicycle in the plane. I am extending it to more robot models and to 3D, and benchmarking it against other CBF filters. We are working toward a journal paper on this extension.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">What I Built</div>
      <div class="summary-tags">
        <span class="lang-tag">Python</span>
        <span class="topic-tag">QP & MPC</span>
        <span class="topic-tag">Benchmarking</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Robot models:</strong> Double integrator in 2D and 3D, quadrotor, and a satellite among orbital debris, each as a robot wrapper on the lab's <code>safe_control</code> library.</li>
      <li><strong>Controllers:</strong> A DPCBF-QP safety filter in cvxpy, and a DPCBF-MPC version in CasADi and do-mpc that enforces the barrier over a short horizon.</li>
      <li><strong>Benchmark:</strong> A parallel batch runner over randomized scenes with up to 100 moving obstacles, comparing the DPCBF against other CBF filters. Gains are tuned with Optuna and every run is logged to Weights & Biases.</li>
    </ul>
  </div>
</details>

### PLCBF: Safety on Real Hardware
A Policy Library CBF (PLCBF) keeps a small library of backup policies, like braking or turning away. At every step it rolls each one forward in parallel with JAX, and treats the state as safe as long as at least one backup policy stays safe. The robot follows its normal controller and only gets corrected when that guarantee is about to break, with no safe set to design offline.

I brought PLCBF up on a DJI RoboMaster EP in the lab's Vicon space, as a ROS 2 Humble stack in a Docker container. **Result:** collision-free waypoint navigation on the real robot, with the filter running in the loop.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">System Architecture</div>
      <div class="summary-tags">
        <span class="lang-tag">ROS 2</span>
        <span class="topic-tag">JAX</span>
        <span class="topic-tag">Vicon</span>
        <span class="topic-tag">Docker</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Sensing:</strong> Vicon Tracker streams the robot's pose, and a bridge node publishes it into ROS 2.</li>
      <li><strong>Filtering:</strong> A PLCBF node filters the waypoint-following command against the obstacles and publishes the safe velocity on <code>cmd_vel</code>.</li>
      <li><strong>Acting:</strong> The RoboMaster driver sends that command to the mecanum chassis over the lab Wi-Fi.</li>
      <li><strong>Operation:</strong> A mission-control GUI checks the robot connection, switches between the experiment and Xbox teleop, and edits waypoints live, with RViz alongside.</li>
    </ul>
  </div>
</details>

<video class="project-img" style="max-width: 100%;" autoplay loop muted playsinline>
  <source src="/my-site/assets/videos/plcbf_rover.mp4" type="video/mp4">
</video>
<span class="project-caption">RoboMaster hardware run at 3× speed, with the fallback policies and the selected one drawn over the camera view.</span>

<!-- project hurdles -->
<h2 class="section-header learn">Challenges</h2>

### Building on an Existing Codebase
Almost everything I wrote extends the lab's `safe_control` library, so progress depended on reading its abstractions, finding the right places to subclass, and staying compatible with upstream instead of forking away from it. Learning to extend a system I did not write, without breaking it, taught me as much as the control theory.

### Sim to Hardware
The real robot surfaced problems a simulator never shows. The SDK keeps the last wheel speed when commands stop, so I set a chassis timeout to make it halt. The mecanum base strafes slower than it drives forward, so I measured its real speed limits and added heading tracking. The SDK also needs host networking to find the robot, and the robot accepts only one controller at a time.
