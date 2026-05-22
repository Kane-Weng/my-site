---
title: "NiFT Autonomous Shuttle"
excerpt: "System Integration Engineer for transforming the NiFT Shuttle QB into an L4 autonomous vehicle."
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
      ROLE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; System Integration Engineer <br>
      STACK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Python, C++, ROS 2, CAN bus, Gazebo, Git, Linux
    </code>
    <div class="command" data-prompt="kane@umich:~/projects/nift$ ">ros2 launch nift_bringup system.launch.py<span class="cursor">_</span></div>
  </div>
</div>

<!-- project abstract -->
<h2 class="section-header build">Mission</h2>

This project aims to develop an autonomous depot shuttle platform for **Mcity** in collaboration with **NiFT**. Our goal is to deliver a proof-of-concept transforming the NiFT Shuttle QB into an *L4 autonomous vehicle* by leveraging infrastructure-based sensing and routing.

<div class="model-viewer-wrap">
  <model-viewer 
    src="/my-site/assets/models/nift_shuttle.glb" 
    alt="3D Model of the NiFT Autonomous Shuttle" 
    auto-rotate 
    camera-controls 
    style="width: 100%; height: 100%;">
  </model-viewer>
</div>
<p class="model-viewer-caption"><em>Interactive URDF: Click and drag to inspect the shuttle's sensor payload and chassis.</em></p>

As part of a six-person student team, I architected the end-to-end <strong>ROS 2 Humble</strong> software stack, bridging high-level autonomy with low-level hardware execution. My core achievements include developing a custom <strong>Active Disturbance Rejection Control (ADRC)</strong> system alongside an adaptive pure pursuit planner, engineering the <strong>SocketCAN</strong> communication bridge for by-wire control, and integrating RTK GNSS localization with a fail-safe hardware state machine. To validate our navigation algorithms prior to physical deployment, I also built a high-fidelity <strong>Gazebo</strong> simulation environment of the Mcity testing grounds, complete with custom URDF models and RViz 2 diagnostic tools.

<div class="project-carousel" id="nift-carousel">
  <div class="carousel-inner">
    <div class="carousel-track" id="nift-track">
      <div class="carousel-slide">
        <img src="/my-site/assets/images/nift_pjtl26_cohort.png" alt="2026 Perot Jain TechLab Mcity cohort">
      </div>
      <div class="carousel-slide">
        <img src="/my-site/assets/images/nift_cohort_2026.jpeg" alt="NiFT Winter 2026 Team">
      </div>
      <div class="carousel-slide">
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

  <span class="project-caption">NiFT photo gallery — PJTL cohort, NiFT team, and the NiFT shuttle</span>
</div>


<script>
(function() {
  var _idx = {}, _timers = {};

  function getTrack(id)  { return document.getElementById(id + '-track'); }
  function getInner(id)  { return getTrack(id).parentElement; }
  function getSlides(id) { return getTrack(id).querySelectorAll('.carousel-slide'); }
  function getDots(id)   { return document.querySelectorAll('#' + id + '-dots .carousel-dot'); }

  function render(id) {
    var i  = _idx[id];
    var ss = getSlides(id);
    var offset = 0;
    for (var k = 0; k < i; k++) offset += ss[k].offsetWidth;
    getTrack(id).style.transform = 'translateX(-' + offset + 'px)';
    getInner(id).style.width     = ss[i].offsetWidth + 'px';
    getDots(id).forEach(function(d, j) { d.classList.toggle('active', j === i); });
  }

  window.carouselGoTo = function(id, idx) {
    var n = getSlides(id).length;
    _idx[id] = ((idx % n) + n) % n;
    render(id);
  };
  window.carouselStep = function(id, dir) {
    carouselGoTo(id, (_idx[id] || 0) + dir);
  };

  function startAuto(id) {
    clearInterval(_timers[id]);
    _timers[id] = setInterval(function() { carouselStep(id, 1); }, 4000);
  }

  function initCarousel(id) {
    _idx[id] = 0;
    var inn  = getInner(id);
    var imgs = inn.querySelectorAll('img');
    var pending = imgs.length;
    function onLoad() {
      if (--pending > 0) return;
      render(id);
      startAuto(id);
      inn.addEventListener('mouseenter', function() { clearInterval(_timers[id]); });
      inn.addEventListener('mouseleave', function() { startAuto(id); });
    }
    imgs.forEach(function(img) {
      if (img.complete && img.naturalWidth > 0) onLoad();
      else { img.addEventListener('load', onLoad); img.addEventListener('error', onLoad); }
    });
  }

  document.addEventListener('DOMContentLoaded', function() { initCarousel('nift'); });
})();
</script>

<!-- project details -->
<h2 class="section-header teach">Implementation</h2>
I architected the ROS 2 workspace to achieve the **Sense-Think-Act pipeline** for the shuttle. For testing, **simulation** is also developed. The system can be split into 4 core layers:

<!-- Hidden content templates — populated into the inline detail panel by JS -->
<div id="tpl-impl-perception" class="pipeline-tpl">
  <ul>
    <li><strong>LiDAR-Based Obstacle Detection:</strong> Processed raw point cloud data to extract obstacle coordinates and implemented spatial transformations (<code>TF2</code>) to map object detections from the sensor frame to the vehicle's local coordinate system.</li>
    <li><strong>GNSS-Based State Estimation:</strong> Developed an integration for Mcity Octane via Socket.IO to stream global positioning data. Implemented a dual-beacon configuration to accurately compute the shuttle's absolute heading and real-time coordinates.</li>
  </ul>
</div>
<div id="tpl-impl-navigation" class="pipeline-tpl">
  <ul>
    <li><strong>Decision Logic & Safety Layer:</strong> Implemented a sensor fusion strategy to synthesize LiDAR and GNSS data, enabling real-time decision-making for path progression and autonomous Emergency Stop (E-Stop) protocols.</li>
    <li><strong>Global Routing & Waypoint Generation:</strong> Engineered a central orchestration node utilizing <strong>Lanelet2</strong> HD maps to compute navigable trajectories. Implemented a 3-phase routing strategy (Bezier curve entry, graph search, and exit) to smoothly transition the vehicle between unconstrained off-road poses and structured road networks while strictly adhering to Ackermann kinematic constraints.</li>
    <li><strong>Path Tracking & Velocity Control:</strong> Developed a Pure Pursuit controller integrated with Cross-Track Error (CTE) compensation to ensure high-fidelity waypoint following and stable velocity management.</li>
  </ul>
</div>
<div id="tpl-impl-actuation" class="pipeline-tpl">
  <ul>
    <li><strong>CAN Bus Integration:</strong> Utilized <code>ros2_socketcan</code> to interface with the vehicle's control bus. I performed frame decoding using proprietary DBC files to map raw bus signals, including throttle, brake, gear, and steering.</li>
    <li><strong>By-Wire Controller:</strong> Developed a controller node to bridge high-level ROS 2 <code>Twist</code> commands with low-level CAN frames. This included implementing a Finite State Machine (FSM) and ADRC controller to translate target velocities and steering angles into precise actuator setpoints.</li>
  </ul>
</div>
<div id="tpl-impl-simulation" class="pipeline-tpl">
  <ul>
    <li><strong>Environment Mirroring:</strong> Engineered a digital twin of the NiFT shuttle and Mcity depot within Gazebo and Rviz2, ensuring accurate physical modeling and sensor data replication.</li>
    <li><strong>Parity Testing:</strong> Structured the simulation nodes to be "plug-and-play" with the physical hardware nodes. This meant the exact same Planner and CAN nodes were used in both sim and reality, significantly reducing deployment bugs.</li>
  </ul>
  <div style="border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); margin-top: 1rem;">
    <video width="100%" autoplay loop muted playsinline>
      <source src="/my-site/assets/videos/nift_demo.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <p class="text-center" style="font-size: 0.85em; color: #888; margin-top: 0.5rem;">
    <em>RViz2 Telemetry: Adaptive Pure Pursuit tracking the generated Bezier trajectory.</em>
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
        <span>Bezier Routing</span>
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

<!-- project hurdles -->
<h2 class="section-header learn">Challenges</h2>
### CAN Bus & Hardware
Coming into the project with no prior CAN experience, the learning curve for low-level vehicle communication was steep.
* **CAN Frame:** I moved beyond high-level code to understand the bit-level details of the DBC file. I had to learn how to manually manipulate bytes to input meaningful velocity and steering data into CAN frames.
* **Linux Networking:** A major hurdle was configuring the Linux Kernel to recognize our Kvaser interface. I spent significant time troubleshooting the bridge between `can-utils` and the hardware, eventually successfully masking our laptop as a native node on the vehicle's bus.

### Software & API
The L4 aspect of NiFT shuttle relies on external data, which introduced unique software integration challenges.
* **Real-time External Comms:** I had to implement a Socket.io client within our ROS 2 stack to communicate with the Mcity Octane API. Ensuring that infrastructure-based routing data reached our planner with minimal latency was critical for safe operation.
* **ROS 2 Ecosystem:** Beyond just writing nodes, I had to master managing complex Parameter files, launch configurations, and package dependencies to ensure the system was modular and reproducible for the rest of the team.