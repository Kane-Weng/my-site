---
title: "NiFT Autonomous Shuttle"
excerpt: "System Integration Engineer for transforming the NiFT Shuttle QB into an L4 autonomous vehicle"
header:
  teaser: ./assets/images/nift_shuttle.png
---

* **Time**: Jan 2026 - Present
* **Role**: System Integration Engineer
* **Stack**: Python, C++, ROS 2, CAN bus, Gazebo, Kvaser, Git, Linux

<h2 class="section-header build">Overview</h2>
The **NiFT** project creates an autonomous depot shuttle platform for Mcity, delivering a proof-of-concept that transforms the NiFT Shuttle QB into an L4 autonomous vehicle using infrastructure-based sensing and routing. Our team leads the system integration of by-wire controls, sensor and data communication devices, and software to enable seamless interaction between the shuttle and depot infrastructure. My work focuses on building the ROS 2 structure, mapping CAN bus communications, and developing the simulation environments necessary for safe algorithm testing.

<h2 class="section-header teach">The Reality of Implementation</h2>
In coursework like ROB 320, ROS is often presented with a safety net, including starter code, pre-defined node structures, and autograders. Transitioning to NiFT was a "leap into the deep end." There was no blueprint. My team and I had to architect the ROS 2 node-topic graph from scratch, determine which wrappers (like `ros2_socketcan`) were robust enough for field use, and write custom Python scripts to interface with Mcity's GNSS beacon API. 

### Bridging the Gap: CAN Bus & DBC Mapping
A significant technical milestone this semester was demystifying the vehicle's communication. While the team previously established the physical Kvaser connection, I focused on the **DBC file interpretation**. 
* **Challenge:** Initial mappings from research mentors were inconsistent (e.g., misidentifying 5-byte driving messages as 1-byte).
* **Result:** I successfully mapped the CAN messages to ROS topics, ensuring that the planner's commands translated accurately to pedal, brake, gear, and steering angle inputs for the vehicle.

### Engineering Trade-offs in Simulation
Building the Gazebo simulation environment required constant decision-making regarding "fidelity vs. functionality". One specific choice I made is on the controller of the shuttle in simulation.
* **Choice:** I opted for a **Tricycle Controller** over a fully modeled Ackermann steering system. 
* **Logic:** My goal was to validate navigation algorithms, not to model tire-to-ground friction. By abstracting the steering complexity, I was able to build a functional testing suite faster, aligning with our hardware parameters (height, max speed) while keeping the focus on autonomy logic.

<h2 class="section-header learn">Technical Friction</h2>
The hardest part of this project wasn't the high-level math; it was the **technical friction** of environment configuration. I spent hours wrestling with Xacro files and parameter rendering, only to find that a single `:` in a comment line was breaking the entire rendering engine. 

> **Lesson Learned:** Documentation, parameter tuning, and debugging configuration files are just as critical as the algorithm itself. Without a robust simulation and testing script, a successful real-world deployment is impossible.

<h2 class="section-header build">Future Goals</h2>
Working on NiFT has solidified my interest in **Planning and Control**. While perception and localization are fascinating input problems, the challenge of coordinating a vehicle’s movement through a waypoint-following goal is what excites me most.