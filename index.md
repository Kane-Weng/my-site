---
layout: archive
author_profile: true
title: "Welcome to Kane's Website!"
excerpt: "Check out what I'm working on ~"
header:
  overlay_image: ./assets/images/banner_crop.jpg 
  overlay_filter: 0.3 
  actions:
    - label: "View My Projects"
      url: "/projects/"
    - label: "View My Experiences"
      url: "/experiences/"
---
<!-- brief intro -->
I am a **Robotics x CS student** at the **University of Michigan**, dedicated to bridging the gap between high-level code and physical motion. My work sits at the intersection of autonomous systems, deep learning, and robust software architecture. 

Beyond the code, I’m passionate about distilling complex concepts into intuition. Whether through tutoring or my work as an IA, I find as much fulfillment in debugging a peer’s logic as I do in optimizing a robot’s trajectory.

<!-- current project -->
<h2 class="section-header build">What I’m ENGINEERING</h2>

<div class="showcase-container">
  <div class="showcase-block">
    <div class="showcase-img">
      <img src="./assets/images/nift_shuttle.png" alt="NiFT Autonomous Shuttle">
    </div>
    <div class="showcase-text">
      <h3>NiFT Autonomous Shuttle</h3>
      <span class="role-date">Perot Jain TechLab at Mcity</span>
      <p>Co-leading the team that is turning the NiFT Shuttle QB into an L4 autonomous vehicle. This fall I rebuilt our ROS 2 stack so it drives the same way in simulation and on the road, as groundwork for a VLA driver. You can drive it yourself in the browser.</p>
      <div class="project-links">
        <a class="repo-link" href="https://kane-weng.github.io/nift_playground/"><i class="fas fa-play-circle"></i> Live Demo</a>
        <a class="repo-link" href="{{ '/projects/nift/' | relative_url }}"><i class="fas fa-arrow-right"></i> Project Page</a>
      </div>
    </div>
  </div>

  <div class="showcase-block reverse">    <!-- Can add/delete reverse  -->
    <div class="showcase-text">
      <h3>SIM-26 Driving Simulator</h3>
      <span class="role-date">Multidisciplinary Design Program</span>
      <p>Leading development on an accessible driving simulator powered by Unreal Engine 5 to assist research on driver workload and distraction.</p>
      <div class="project-links">
        <a class="repo-link" href="{{ '/projects/sim-26/' | relative_url }}"><i class="fas fa-arrow-right"></i> Project Page</a>
      </div>
    </div>
    <div class="showcase-img">
      <img src="./assets/images/sim26_drive_screen.png" alt="SIM-26 Driving Simulator">
    </div>
  </div>

  <div class="showcase-block">
    <div class="showcase-img">
      <img src="./assets/images/dpcbf_all_models.png" alt="Safety-critical control research at the DASC Lab">
    </div>
    <div class="showcase-text">
      <h3>Safety-Critical Control with CBFs</h3>
      <span class="role-date">Distributed Autonomous Systems and Control Lab</span>
      <p>Extending Dynamic Parabolic Control Barrier Functions from 2D to 3D for navigation in dense environments, and deploying Policy Library CBFs on a DJI RoboMaster tracked by Vicon.</p>
      <div class="project-links">
        <a class="repo-link" href="https://dasc-lab.github.io/"><i class="fas fa-flask"></i> DASC Lab</a>
        <a class="repo-link" href="{{ '/projects/dasc/' | relative_url }}"><i class="fas fa-arrow-right"></i> Project Page</a>
      </div>
    </div>
  </div>

  <!-- Hidden showcase: SURE ended Jul 2026, kept here in case it comes back -->
  <!-- <div class="showcase-block">
    <div class="showcase-text">
      <h3>Visual Physics Dataset</h3>
      <span class="role-date">Corso Group, SURE 2026</span>
      <p>Packing 7 large-scale 3D datasets into one cluster-ready HDF5 source and benchmarking VLM/LLM mass estimation for physically grounded AI.</p>
    </div>
    <div class="showcase-img">
      <img src="..." alt="Visual Physics Dataset">
    </div>
  </div> -->
</div>

<!-- current position -->
<h2 class="section-header teach">What I’m MENTORING</h2>

<div class="exp-container">
  <div class="exp-card">
    <img src="./assets/images/eecs445_nn.jpeg" class="exp-banner-img" alt="EECS 445">
    <div class="exp-card-content">
      <span class="role-date">U-M CSE | Fall 2026 – Now</span>
      <h3>EECS 445 Instructional Aide</h3>
      <p>Leading weekly discussion sections and office hours for 250+ students in Introduction to Machine Learning, and building and checking projects against reference solutions so the autograder catches edge cases.</p>
    </div>
  </div>

  <div class="exp-card">
    <img src="./assets/images/ros.jpg" class="exp-banner-img" alt="ROS">
    <div class="exp-card-content">
      <span class="role-date">U-M Robotics | 2026 – Now</span>
      <h3>ROB 320 Instructional Aide</h3>
      <p>Leading lab sections, holding office hours, and writing exams on Linux IPC, the Robot Interprocess eXchange (RIX) middleware, and kinematics and transforms.</p>
    </div>
  </div>
</div>

<!-- current course -->
<h2 class="section-header learn">What I’m mastering</h2>

<!-- Fall 2026 courses. Tags come from the course descriptions below -->

<!-- Feedback control design/analysis for robotics applications, including mobile robots, actuators, and flexible joints. Classical and modern control topics include state space representations, linearization, time response, stability, block diagrams, transfer functions, poles/zeros, root locus, frequency response, Bode plots, gain/phase margins, and lead/lag/PID control.
 -->
<div class="course-grid">
  <div class="course-card">
    <span class="course-number">ROB 314</span>
    <h4>Introduction to Robot Controls</h4>
    <div class="lang-tag">MATLAB</div>
    <div class="topic-tag">Feedback Control</div>
    <div class="topic-tag">Linear/Nonlinear Systems</div>
    <div class="topic-tag">State Space</div>
    <div class="topic-tag">Root Locus</div>
    <div class="topic-tag">Bode Plots & Margins</div>
    <div class="topic-tag">Lead/Lag & PID</div>
  </div>

  <!-- Development of full-stack autonomous navigation and mapping for mobile robots. Topics include dead reckoning from odometry, sensor modeling of LIDAR and cameras, visual odometry, path planning, and simultaneous localization and mapping (SLAM). Course topics will be implemented in hardware. -->
  <div class="course-card">
    <span class="course-number">ROB 330</span>
    <h4>Localization, Mapping, and Navigation</h4>
    <div class="lang-tag">C++</div>
    <div class="lang-tag">Python</div>
    <div class="topic-tag">Odometry</div>
    <div class="topic-tag">LiDAR & Camera Models</div>
    <div class="topic-tag">Visual Odometry</div>
    <div class="topic-tag">Path Planning</div>
    <div class="topic-tag">SLAM</div>
    <div class="topic-tag">Hardware</div>
  </div>

<!-- By the end of the course you can
Choose a 3D representation from the downstream task, collision checking, grasp synthesis, navigation, rendering, and justify the memory, latency, and accuracy tradeoff.
Compose and calibrate a multi-sensor 3D perception stack, and reason about pose and its uncertainty on SE(3).
Build a metric-semantic map and a queryable 3D scene graph from a posed RGB-D sequence using open-vocabulary 2D foundation models.
Explain what a world model predicts, what it is conditioned on, and why visual fidelity is a poor proxy for usefulness in closed-loop control.
Read, present, and critique a current research paper, and reproduce a published result well enough to know where it breaks. -->
  <div class="course-card">
    <span class="course-number">ROB 498</span>
    <h4>3D Robot Perception</h4>
    <div class="lang-tag">Python</div>
    <div class="topic-tag">3D Representations</div>
    <div class="topic-tag">Multi-Sensor Calibration</div>
    <div class="topic-tag">Pose on SE(3)</div>
    <div class="topic-tag">Metric-Semantic Maps</div>
    <div class="topic-tag">3D Scene Graphs</div>
    <div class="topic-tag">World Models</div>
  </div>
</div>

<!-- skills -->
<h2 class="section-header build">Tech Stacks</h2>

<div class="terminal-window">
  <div class="terminal-header">
    <span class="terminal-title">kane@umich:~</span>
    <div class="win-controls">
      <span>&#8211;</span> <span>&#9634;</span> <span>&times;</span> 
    </div>
  </div>
  
  <div class="terminal-body">
    <div class="command" data-prompt="kane@umich:~$ ">cat /etc/issue</div>
    <code class="output">Ubuntu 22.04.5 LTS</code>
    <div class="command" data-prompt="kane@umich:~$ ">ls -m ./languages</div>
    <code class="output">
      C/C++, Python, Julia, MATLAB, R, Verilog, ARM_Assembly, Blueprint
    </code>
    <div class="command" data-prompt="kane@umich:~$ ">ros2 pkg list | grep "autonomy"</div>
    <code class="output">
      nav2, tf2_ros, eigen, robot_localization, gazebo_sim, rviz2, fast_dds
    </code>
    <div class="command" data-prompt="kane@umich:~$ ">pip list --format=columns</div>
    <code class="output">
      Package &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Version <br>
      ------- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ------- <br>
      torch &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.2.0 <br>
      opencv-python &nbsp; 4.9.0 <br>
      scikit-learn &nbsp;&nbsp; 1.4.1 <br>
      scipy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.12.0 <br>
      numpy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.26.4 <br>
      matplotlib&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.10.6 <br>
      pandas &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.2.1
    </code>
    <div class="command" data-prompt="kane@umich:~$ ">ls /usr/local/bin</div>
    <code class="output">
      docker&nbsp;&nbsp; git&nbsp;&nbsp; cmake&nbsp;&nbsp; gdb&nbsp;&nbsp; valgrind
    </code>
    <div class="command" data-prompt="kane@umich:~$ "> <span class="cursor">_</span></div>
  </div>
</div>

<!-- explore more -->
<h2 class="section-header learn">Explore More</h2>

<p>Check out my other past projects, my highlighted courseworks, and my work experiences:</p>

<div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
  <a href="/my-site/projects/" class="btn btn--explore">View All Projects</a>
  <a href="/my-site/experiences/" class="btn btn--explore">View All Experiences</a>
</div>