---
title: "NiFT Autonomous Shuttle"
excerpt: "Project Co-Lead for transforming the NiFT Shuttle QB into an L4 autonomous vehicle."
header:
  teaser: ./assets/images/nift_teaser.png
date: 2026-03-08
categories: program
order: 1
---
<script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"></script>
<span class="lang-tag">Undergraduate Research</span>
<span class="topic-tag">Winter/Fall 2026</span>
<span class="topic-tag">Entrepreneurship</span>
<span class="topic-tag">Grade: A</span>

<div class="project-links">
  <a class="repo-link" href="https://github.com/Kane-Weng/NiFT-AV-shuttle"><i class="fab fa-github"></i> NiFT-AV-shuttle</a>
  <a class="repo-link" href="https://kane-weng.github.io/nift_playground/"><i class="fas fa-play-circle"></i> Web Playground</a>
</div>

<div class="terminal-window">
  <div class="terminal-header">
    <span class="terminal-title">kane@umich:~/projects/nift</span>
    <div class="win-controls">
      <span>&#8211;</span> <span>&#9634;</span> <span>&times;</span> 
    </div>
  </div>
  
  <div class="terminal-body">
    <div class="command" data-prompt="kane@umich:~/projects/nift$ ">info --detailed</div>
    <code class="output">
      Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Detail <br>
      ------- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ------- <br>
      TIME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jan 2026 – Present <br>
      LAB/ORG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Perot Jain TechLab, Mcity @ U-M; NiFT <br>
      ROLE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Project Co-Lead & System Integration <br>
      STACK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Python, C++, ROS 2 Humble, CAN bus, CARLA, React, Linux
    </code>
    <div class="command" data-prompt="kane@umich:~/projects/nift$ ">ros2 launch nift_bringup system.launch.py profile:=sim_kinematic<span class="cursor">_</span></div>
  </div>
</div>

<!-- project abstract -->
<h2 class="section-header build">Mission</h2>

This project builds an autonomous depot shuttle for **Mcity** with the mobility startup **NiFT**. The goal is a proof of concept that turns the NiFT Shuttle QB into an *L4 autonomous vehicle*, using infrastructure-based sensing and routing.

<div class="model-viewer-wrap">
  <model-viewer 
    src="/my-site/assets/models/nift_shuttle_twin.glb" 
    alt="3D Model of the NiFT Autonomous Shuttle" 
    auto-rotate 
    camera-controls 
    style="width: 100%; height: 100%;">
  </model-viewer>
</div>
<p class="model-viewer-caption"><em>The shuttle model from our CARLA digital twin. Click and drag to rotate it.</em></p>

I co-lead the student team and designed the shuttle's ROS 2 software stack, from raw GNSS and LiDAR data down to the drive-by-wire CAN frames. In the winter we built a classical autonomy stack and drove it on the real shuttle. This fall the team is working toward a learned driver, and I rebuilt the stack underneath it so the shuttle drives the same way in simulation and on the road.

<div class="project-carousel" id="nift-carousel">
  <div class="carousel-inner">
    <div class="carousel-track" id="nift-track">
      <div class="carousel-slide" data-caption="The 2026 Perot Jain TechLab Mcity cohort.">
        <img src="/my-site/assets/images/nift_pjtl26_cohort.png" alt="2026 Perot Jain TechLab Mcity cohort">
      </div>
      <div class="carousel-slide" data-caption="The NiFT team, Winter 2026.">
        <img src="/my-site/assets/images/nift_cohort_2026.jpeg" alt="NiFT Winter 2026 Team">
      </div>
      <div class="carousel-slide" data-caption="The NiFT shuttle in the Mcity garage.">
        <img src="/my-site/assets/images/nift_shuttle_garage.jpg" alt="NiFT shuttle in the Mcity garage">
      </div>
    </div>
    <button class="carousel-btn carousel-prev" onclick="carouselStep('nift', -1)" aria-label="Previous">&#8249;</button>
    <button class="carousel-btn carousel-next" onclick="carouselStep('nift', 1)" aria-label="Next">&#8250;</button>
  </div>
  <div class="carousel-dots" id="nift-dots">
    <span class="carousel-dot active" onclick="carouselGoTo('nift', 0)"></span>
    <span class="carousel-dot" onclick="carouselGoTo('nift', 1)"></span>
    <span class="carousel-dot" onclick="carouselGoTo('nift', 2)"></span>
  </div>
  <span class="project-caption">The 2026 Perot Jain TechLab Mcity cohort.</span>
</div>

<!-- project details -->
<h2 class="section-header teach">Implementation</h2>

### Winter 2026: Traditional AV Stack
I set up the ROS 2 workspace as a **Sense-Think-Act pipeline**, with a simulation that swaps in for the hardware. Click a stage to see what is inside.

<!-- Hidden content templates — populated into the inline detail panel by JS -->
<div id="tpl-impl-perception" class="pipeline-tpl">
  <ul>
    <li><strong>LiDAR Obstacles:</strong> Open3D RANSAC removes the ground, DBSCAN clusters what is left, and each cluster is sent as a 2D convex hull in the vehicle frame through <code>TF2</code>.</li>
    <li><strong>GNSS State:</strong> A Socket.IO client streams Mcity's RTK GNSS feed. Two antennas on the roof give both the position and the heading.</li>
  </ul>
</div>
<div id="tpl-impl-navigation" class="pipeline-tpl">
  <ul>
    <li><strong>Routing:</strong> A route planner searches a <strong>Lanelet2</strong> HD map, then joins the route to the shuttle and the goal with Bezier curves that respect the Ackermann turning radius.</li>
    <li><strong>Path Tracking:</strong> Pure Pursuit steers, with cross-track error (CTE) feedback and speed scaling in curves.</li>
    <li><strong>Safety Filters:</strong> A kinematic Control Barrier Function and a potential field slow the shuttle or stop it near LiDAR obstacles.</li>
  </ul>
</div>
<div id="tpl-impl-actuation" class="pipeline-tpl">
  <ul>
    <li><strong>CAN Bus:</strong> <code>ros2_socketcan</code> connects to the vehicle bus. I decoded the vendor DBC file to map throttle, brake, gear, and steering signals.</li>
    <li><strong>By-Wire Control:</strong> An ADRC speed controller and a mode state machine turn target speed and steering into CAN frames for the shuttle's ECU.</li>
  </ul>
</div>
<div id="tpl-impl-simulation" class="pipeline-tpl">
  <ul>
    <li><strong>Digital Twin:</strong> A Gazebo model of the shuttle and the Mcity depot, with RViz 2 for live diagnostics.</li>
    <li><strong>Same Nodes, Sim or Real:</strong> The planner and CAN nodes run unchanged in simulation and on the shuttle, which cut down on bugs at deployment.</li>
  </ul>
  <div style="border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); margin-top: 1rem;">
    <video width="100%" autoplay loop muted playsinline>
      <source src="/my-site/assets/videos/nift_demo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <p class="text-center" style="font-size: 0.85em; color: #888; margin-top: 0.5rem;">
    <em>RViz 2: Pure Pursuit tracking the Bezier route.</em>
  </p>
</div>

<div class="pipeline-wrap">
  <div class="pipeline-stages">
    <div class="pipeline-stage" onclick="pipelineActivate(this,'impl-perception','Sense','Perception & Localization')">
      <div class="stage-phase">Sense</div>
      <i class="fas fa-satellite stage-icon"></i>
      <div class="stage-title">Perception & Localization</div>
      <div class="stage-chips">
        <span>LiDAR Point Cloud</span>
        <span>GNSS / RTK</span>
        <span>TF2 Transforms</span>
      </div>
    </div>
    <div class="pipeline-arrow"></div>
    <div class="pipeline-stage" onclick="pipelineActivate(this,'impl-navigation','Think','Navigation & Planning')">
      <div class="stage-phase">Think</div>
      <i class="fas fa-route stage-icon"></i>
      <div class="stage-title">Navigation & Planning</div>
      <div class="stage-chips">
        <span>Lanelet2 HD Maps</span>
        <span>Pure Pursuit</span>
        <span>Safety Filters</span>
      </div>
    </div>
    <div class="pipeline-arrow"></div>
    <div class="pipeline-stage" onclick="pipelineActivate(this,'impl-actuation','Act','Communication & Actuation')">
      <div class="stage-phase">Act</div>
      <i class="fas fa-microchip stage-icon"></i>
      <div class="stage-title">Communication & Actuation</div>
      <div class="stage-chips">
        <span>CAN Bus</span>
        <span>By-Wire FSM</span>
        <span>ADRC Controller</span>
      </div>
    </div>
  </div>
  <div class="pipeline-sim" onclick="pipelineActivate(this,'impl-simulation','Sim','Simulation')">
    <div class="stage-phase">Sim</div>
    <i class="fas fa-cube stage-icon"></i>
    <div class="stage-title">Simulation</div>
    <div class="stage-chips">
      <span>Gazebo Digital Twin</span>
      <span>RViz2</span>
      <span>Plug-and-play Nodes</span>
    </div>
  </div>

  <!-- Inline detail panel — expands below the sim bar, no page scroll needed -->
  <div class="pipeline-detail-outer" id="pipeline-detail-outer">
    <div class="pipeline-detail" id="pipeline-detail">
      <div class="pipeline-detail-header">
        <div class="pipeline-detail-meta">
          <span class="pipeline-detail-phase" id="pipeline-detail-phase"></span>
          <span class="pipeline-detail-title" id="pipeline-detail-title"></span>
        </div>
        <button class="pipeline-detail-close" onclick="pipelineClose()" aria-label="Close">&#x2715;</button>
      </div>
      <div class="pipeline-detail-body" id="pipeline-detail-body"></div>
    </div>
  </div>
</div>

<script>
function pipelineActivate(el, targetId, phase, title) {
  var outer = document.getElementById('pipeline-detail-outer');
  var allCards = document.querySelectorAll('.pipeline-stage, .pipeline-sim');

  // Clicking the active card again closes the panel
  if (outer.classList.contains('is-open') && outer.dataset.active === targetId) {
    pipelineClose();
    return;
  }

  allCards.forEach(function(s) { s.classList.remove('active'); });
  el.classList.add('active');

  document.getElementById('pipeline-detail-phase').textContent = phase;
  document.getElementById('pipeline-detail-title').textContent = title;
  document.getElementById('pipeline-detail-body').innerHTML =
    document.getElementById('tpl-' + targetId).innerHTML;

  outer.dataset.active = targetId;
  outer.classList.add('is-open');
}

function pipelineClose() {
  document.querySelectorAll('.pipeline-stage, .pipeline-sim').forEach(function(s) {
    s.classList.remove('active');
  });
  var outer = document.getElementById('pipeline-detail-outer');
  outer.classList.remove('is-open');
  outer.dataset.active = '';
}
</script>

### Fall 2026: Groundwork for a VLA Driver
This semester the team set a bigger goal: let a **vision-language-action (VLA)** model, NVIDIA's Alpamayo, drive the shuttle from camera images. A learned driver still needs a stack under it that knows where the shuttle is, follows the path it is given, and stops safely when something fails. My part is that stack. I rebuilt the simulation and localization so that what we test in sim is what happens on the road, and the VLA can plug in on top without changing anything below it.

<video class="project-img" style="max-width: 100%;" autoplay loop muted playsinline>
  <source src="/my-site/assets/videos/nift_real_vs_sim.mp4" type="video/mp4">
</video>
<span class="project-caption">One waypoint run on the real shuttle (top) replayed in the kinematic sim and in CARLA (bottom). All three land within 0.02 m in mean cross-track error.</span>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Simulation That Drives Like the Shuttle</div>
      <div class="summary-tags">
        <span class="lang-tag">CARLA</span>
        <span class="topic-tag">Mcity Digital Twin</span>
        <span class="topic-tag">Vehicle Modeling</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>CARLA World:</strong> Moved the simulation from Gazebo to CARLA on the public Mcity Digital Twin, with the shuttle as a native CARLA vehicle and a Lanelet2 map regenerated from the twin's OpenDRIVE file.</li>
      <li><strong>Swap Only the Hardware:</strong> The sim stands in for the GNSS server, the LiDAR, and the drive-by-wire ECU, so every node under test is the node that drives the shuttle. A kinematic backend runs the same stack for teammates without a GPU.</li>
      <li><strong>Measure the Real Vehicle:</strong> Garage tests showed the steering pulls about 2.2° right, the wheels turn only 70% of the command, there is about 0.45 s of dead time, and our steering sign was reversed. I fed these numbers back into both simulators.</li>
    </ul>
    <video class="project-img" style="max-width: 100%;" autoplay loop muted playsinline>
      <source src="/my-site/assets/videos/nift_carla_route.mp4" type="video/mp4">
    </video>
    <span class="project-caption">The shuttle driving a 200 m block loop in CARLA on the Mcity digital twin, at 3× speed.</span>
  </div>
</details>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Localization That Survives GNSS Dropouts</div>
      <div class="summary-tags">
        <span class="lang-tag">Python</span>
        <span class="topic-tag">EKF</span>
        <span class="topic-tag">Fault Injection</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>The Problem:</strong> The real GNSS feed repeats about 40% of its fixes and drops out for a second or more about once a minute. The winter stack stopped the shuttle about twice per minute of driving.</li>
      <li><strong>Feed Checks:</strong> Catch fixes that arrive out of order, repeat, jump, or put the two antennas the wrong distance apart, so silent failures become clean stops.</li>
      <li><strong>EKF:</strong> The shuttle reports no wheel speed, so the filter predicts from the speed and steering we command through the measured vehicle model, then corrects with GNSS. It bridges gaps of up to 1.5 s.</li>
      <li><strong>Results:</strong> In simulation on a realistic feed, stops dropped from 1.09 to 0.35 per minute, and the fault bench went from 2 to 21 of 34 scenarios passed. On the real shuttle, the filter plus steering compensation cut the steady sideways offset from 0.53 m to 0.13 m.</li>
    </ul>
    <video class="project-img" style="max-width: 100%;" autoplay loop muted playsinline>
      <source src="/my-site/assets/videos/nift_filter_runs.mp4" type="video/mp4">
    </video>
    <span class="project-caption">Four real waypoint runs on the Mcity garage pad, from no filter to filter plus steering compensation.</span>
  </div>
</details>

**Web Playground.** To let anyone try the stack, I put it in a web page. The [playground](https://kane-weng.github.io/nift_playground/) runs our own ROS 2 Python nodes in the browser through Pyodide, on a small fake ROS, with nothing to install. Set a goal, start the shuttle, then cut its GNSS and watch the real controller react.

<video class="project-img" style="max-width: 100%;" autoplay loop muted playsinline>
  <source src="/my-site/assets/videos/nift_playground.mp4" type="video/mp4">
</video>
<span class="project-caption">The shuttle driving a route in the web playground, over the 3D Mcity twin.</span>

Next, the team will close the loop with the VLA in CARLA and then run inference on the shuttle. I also used the same platform for my [ROB 498 project](/my-site/projects/rob498/) on open-vocabulary navigation.
<!-- TODO(Kane): update this paragraph once the VLA runs closed-loop (CARLA demo video, on-vehicle results). -->

<!-- project hurdles -->
<h2 class="section-header learn">Challenges</h2>

### CAN Bus & Hardware
I came into the project with no CAN experience.
* **CAN Frames:** I had to work at the bit level of the DBC file, packing bytes by hand to send meaningful speed and steering commands.
* **Linux Networking:** Getting the Linux kernel to recognize our Kvaser interface took a lot of troubleshooting with `can-utils`, until the laptop showed up as a native node on the vehicle bus.

### The Shuttle Is Not the Model
The fall testing taught me to trust measurements over assumptions.
* **Unreliable Sensors:** I first treated GNSS as ground truth. Logging the real feed showed repeats, gaps, and late bursts, so the stack had to expect a bad feed instead of stopping on every hiccup.
* **Hidden Vehicle Behavior:** Steering bias, dead time, and a flipped sign all looked like controller bugs in the logs. Measuring the vehicle first, then fixing the model, saved far more time than tuning gains.
