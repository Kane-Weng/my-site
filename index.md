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
---
<!-- brief intro -->
I am a **Robotics x CS student** at the **University of Michigan**, dedicated to bridging the gap between high-level code and physical motion. My work sits at the intersection of autonomous systems, deep learning, and robust software architecture. 

Beyond the code, I’m passionate about distilling complex concepts into intuition. Whether through tutoring or my work as an IA, I find as much fulfillment in debugging a peer’s logic as I do in optimizing a robot’s trajectory.

<!-- current project -->
<h2 class="section-header build">What I’m ENGINEERING</h2>

**NiFT Autonomous Shuttle (Perot Jain TechLab at Mcity):** <br> I am delivering a proof-of-concept that transforms the NiFT Shuttle QB into an L4 autonomous vehicle, leveraging infrastructure-based sensing and routing protocols. My detailed responsibilities include vehicle assembly, sensor configuration, robust systems engineering, and an economic analysis of depot autonomy.
<img src="./assets/images/nift_shuttle.png" class="project-img" alt="NiFT Autonomous Shuttle">
<span class="project-caption">NiFT Shuttle QB here!</span>

**SIM-26 Driving Simulator (Multidisciplinary Design Program):** <br> I am leading development on an accessible driving simulator powered by Unreal Engine 5. The engineering scope includes procedurally generating drivable worlds, configuring vehicle dynamics, simulating complex traffic flows, and implementing a low-cost steering system and motion base to enhance realism. Utilizing these high-fidelity simulations, the MDP team designs and conducts human performance experiments to research driver workload and distraction.
<img src="./assets/images/mdp_sim.png" class="project-img" alt="SIM-26 Driving Simulator">
<span class="project-caption">Multiplayer server in UE5 environment</span>

<!-- current position -->
<h2 class="section-header teach">What I’m MENTORING</h2>

<div class="exp-container">
  <div class="exp-card">
    <img src="./assets/images/ros.jpg" class="exp-banner-img" alt="ROS">
    <div class="exp-card-content">
      <span class="role-date">U-M Robotics | 2026 – Now</span>
      <h3>ROB 320 Instructional Aid</h3>
      <p>Helping lab sections, holding office hours, creating exam and grading for <i>ROB 320: Robot Operation Systems</i>. I support students on topics like <strong>Linux IPC in C/C++</strong>, developing <strong>custom ROS-like middleware</strong>, and <strong>kinematics & transforms</strong>.</p>
    </div>
  </div>

  <div class="exp-card">
    <img src="./assets/images/calculus.jpeg" class="exp-banner-img" alt="Calculus">
    <div class="exp-card-content">
      <span class="role-date">U-M Math | 2025 – Now</span>
      <h3>Math 115/116/215 Tutor</h3>
      <p>Delivering 10 hrs per week of drop-in and group tutoring for <strong>Calculus I-III</strong> at Math Learning Center. I also facilitate weekly <i>MATH 215 (Multivariable Calculus)</i> study groups with GSIs, supporting 20–30 students with structured problem sets.</p>
    </div>
  </div>
</div>

<!-- current course -->
<h2 class="section-header learn">What I’m mastering</h2>

<div class="course-grid">
  <div class="course-card">
    <span class="course-number">EECS 445</span>
    <h4>Introduction to Machine Learning</h4>
    <div class="lang-tag">Python</div>
    <div class="topic-tag">Classification</div>
    <div class="topic-tag">Regression</div>
    <div class="topic-tag">Trees/Boosting</div>
    <div class="topic-tag">CNN/RNN</div>
    <div class="topic-tag">Transformers</div>
    <div class="topic-tag">Clustering/GMMs</div>
    <div class="topic-tag">Reinforcement Learning</div>
  </div>

  <div class="course-card">
    <span class="course-number">EECS 504</span>
    <h4>Foundations of Computer Vision</h4>
    <div class="lang-tag">Python</div>
    <div class="topic-tag">Filtering</div> 
    <div class="topic-tag">Convolutions</div>
    <div class="topic-tag">Feature Detection/Matching</div>
    <div class="topic-tag">Image Segmentation</div>
    <div class="topic-tag">Motion & Tracking</div>
    <div class="topic-tag">Deep Learning</div>
  </div>

  <div class="course-card">
    <span class="course-number">EECS 370</span>
    <h4>Introduction to Computer Organization</h4>
    <div class="lang-tag">C</div>
    <div class="topic-tag">Assembly</div>
    <div class="topic-tag">LC2K & ARM</div>
    <div class="topic-tag">Multi-Cycle Processor</div>
    <div class="topic-tag">Pipeline</div>
    <div class="topic-tag">Cache</div>
    <div class="topic-tag">Virtual Memory</div>
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
  <a href="/my-site/projects/" class="btn btn--primary btn--large">View All Projects</a>
  <a href="/my-site/experiences/" class="btn btn--primary btn--large">View All Experiences</a>
</div>