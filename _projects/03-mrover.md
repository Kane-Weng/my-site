---
title: "Michigan Mars Rover Team"
excerpt: "Engineering autonomous navigation and robotic arm systems for U-M’s competitive Mars rover."
header:
  teaser: ./assets/images/mrover_logo.png
---
<div class="terminal-window">
  <div class="terminal-header">
    <span class="terminal-title">kane@umich:~/projects/mrover</span>
    <div class="win-controls">
      <span>&#8211;</span> <span>&#9634;</span> <span>&times;</span> 
    </div>
  </div>
  
  <div class="terminal-body">
    <div class="command" data-prompt="kane@umich:~/projects/mrover$ ">info --detailed</div>
    <code class="output">
      Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Detail <br>
      ------- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ------- <br>
      TIME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sep 2024 - Present <br>
      LAB/ORG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Michigan Mars Rover Team @ U-M <br>
      ROLE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Autonomy & Robotics Arm subteam member <br>
      STACK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Python, C++, ROS 2, CAD, Git
    </code>
    <div class="command" data-prompt="kane@umich:~/projects/mrover$ ">git fetch<span class="cursor">_</span></div>
  </div>
</div>

<!-- project abstract -->
<h2 class="section-header build">Mission</h2>
The Michigan Mars Rover (MRover) team designs and builds a heavy-duty, semi-autonomous rover for the annual University Rover Challenge (URC). The mission is to create a platform capable of traversing the extreme terrain of the Utah desert while performing complex tasks like autonomous navigation, soil sampling, and equipment servicing.

My contribution to the team has evolved from the physical to the digital. I spent my first year on the Robotic Arm subteam focusing on mechanical design and precision fabrication. Transitioning to the Autonomy subteam in my sophomore year, I now focus on the rover's perception and navigation stack

<!-- project details -->
<h2 class="section-header teach">Implementation</h2>
* **Mechanical Design & Fabrication (Year 1):** I managed the full mechanical lifecycle of robotic arm components using Siemens NX and CNC machining.
  * **Self-Centering Camera:** Engineered a custom camera mount with 100% return accuracy to ensure a stable visual baseline during high-precision tasks.
  * **End-Effector Iteration:** Designed and prototyped screw and roller mechanisms for the rover's grip to solve clamping lock, a failure where the fingers would seize upon contact and fail to release.

* **Autonomy & Perception Stack (Year 2):** Currently, I am upgrading the rover’s intelligence using the ROS 2 framework to improve spatial awareness. 
  * **Sensor Fusion:** Implemented REP-105 standards to fuse multi-modal data (RTK-GPS, IMU, and CV), linearizing geodetic data for centimeter-level navigation.
  * **Fiducial Tracking:** Developed a 6-DoF pose estimation pipeline using OpenCV and ArUco markers, which successfully reduced positional drift by 75% during autonomous missions.

<!-- project hurdles -->
<h2 class="section-header learn">Challenges</h2>
* **Mechanical Design:** Joining the robotics arm subteam with no prior CAD experience was a steep learning curve. I had to learn the fundamentals of spatial reasoning and Design for Manufacturing (DFM) on the fly, navigating the nuances of tolerances, dimensions, and structural integrity in Siemens NX to ensure parts could actually be machined or 3D printed.

* **System Complexity:** Transitioning to Autonomy, I had to master ROS 2 and the principles of localization and perception while simultaneously navigating a massive, multi-language (C++/Python) codebase. Deciphering complex node interactions and managing version control with Git, all while still learning Python syntax, required a disciplined approach to peer code review and architectural documentation.

<!-- takeaway & goals -->
<h2 class="section-header build">Reflection</h2>
This experience really taught me the value of a hardware-aware software engineer. Having spent a year physically fabricating the arm, I have a much deeper intuition now when writing the code to control it. In robotics, sensors and actuators aren't just abstract data points. They’re defined by physical constraints and real-world noise that you only truly understand after you’ve turned the wrenches yourself.

