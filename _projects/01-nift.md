---
title: "NiFT Autonomous Shuttle"
excerpt: "System Integration Engineer for transforming the NiFT Shuttle QB into an L4 autonomous vehicle."
header:
  teaser: ./assets/images/pjtl_2.png
---
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
    <div class="command" data-prompt="kane@umich:~/projects/nift$ ">ros2 launch shuttle_simulation launch_sim.launch.py<span class="cursor">_</span></div>
  </div>
</div>

<!-- project abstract -->
<h2 class="section-header build">Mission</h2>
This project aims to develop an autonomous depot shuttle platform for **Mcity** in collaboration with **NiFT**. Our goal is to deliver a proof-of-concept transforming the NiFT Shuttle QB into an *L4 autonomous vehicle* by leveraging infrastructure-based sensing and routing.

As part of a six-person student team, I lead the system integration of by-wire controls, sensor suites, and data communication protocols. My specific contributions involve architecting the ROS 2 framework, mapping CAN bus communications, and developing high-fidelity simulation environments to validate navigation algorithms before physical deployment.

<!-- project details -->
<h2 class="section-header teach">Implementation</h2>
I architected the ROS 2 workspace to achieve the **Sense-Think-Act pipeline** for the shuttle. For testing, **simulation** is also developed. The system can be split into 4 core layers:

* **Communication & Actuation**
  * **CAN Bus Integration:** Utilized `ros2_socketcan` to interface with the vehicle's control bus. I performed frame decoding using proprietary DBC files to map raw bus signals, including throttle, brake, gear, and steering.
  * **By-Wire Controller:** Developed a controller node to bridge high-level ROS 2 `Twist` commands with low-level CAN frames. This included implementing a Finite State Machine (FSM) to translate target velocities and steering angles into precise actuator setpoints.

* **Perception & Localization**
  * **LiDAR-Based Obstacle Detection:** Processed raw point cloud data to extract obstacle coordinates and implemented spatial transformations (`TF2`) to map object detections from the sensor frame to the vehicle's local coordinate system.
  * **GNSS-Based State Estimation:** Developed an integration for Mcity Octane via Socket.IO to stream global positioning data. Implemented a dual-beacon configuration to accurately compute the shuttle's absolute heading and real-time coordinates.

* **Navigation & Planning**
  * **Decision Logic & Safety Layer:** Implemented a sensor fusion strategy to synthesize LiDAR and GNSS data, enabling real-time decision-making for path progression and autonomous Emergency Stop (E-Stop) protocols.
  * **Path Tracking & Velocity Control:** Developed a Pure Pursuit controller integrated with Cross-Track Error (CTE) compensation to ensure high-fidelity waypoint following and stable velocity management.

* **Simulation**
  * **Environment Mirroring:** Engineered a digital twin of the NiFt shuttle and Mcity depot within Gazebo and Rviz2, ensuring accurate physical modeling and sensor data replication.
  * **Parity Testing:** Structured the simulation nodes to be "plug-and-play" with the physical hardware nodes. This meant the exact same Planner and CAN nodes were used in both sim and reality, significantly reducing deployment bugs.

<!-- project hurdles -->
<h2 class="section-header learn">Challenges</h2>
1. **CAN Bus & Hardware**<br>
Coming into the project with no prior CAN experience, the learning curve for low-level vehicle communication was steep.
  * **CAN Frame:** I moved beyond high-level code to understand the bit-level details of the DBC file. I had to learn how to manually manipulate bytes to input meaningful velocity and steering data into CAN frames.
  * **Linux Networking:** A major hurdle was configuring the Linux Kernel to recognize our Kvaser interface. I spent significant time troubleshooting the bridge between `can-utils` and the hardware, eventually successfully masking our laptop as a native node on the vehicle's bus.

2. **Software & API**<br>
The L4 aspect of NiFT shuttle relies on external data, which introduced unique software integration challenges.
  * **Real-time External Comms:** I had to implement a Socket.io client within our ROS 2 stack to communicate with the Mcity Octane API. Ensuring that infrastructure-based routing data reached our planner with minimal latency was critical for safe operation.
  * **ROS 2 Ecosystem:** Beyond just writing nodes, I had to master managing complex Parameter files, launch configurations, and package dependencies to ensure the system was modular and reproducible for the rest of the team.

<!-- takeaway & goals -->
<h2 class="section-header build">Reflection</h2>
My biggest takeaway from this project is that building the NiFT autonomy stack from scratch gave me a transformative, under-the-hood look at how ROS 2 operates on physical hardware. Moving beyond simple simulations, I gained hands-on experience managing the problems of real-world systems, from synchronizing infrastructure-based sensor data via Socket.io to the nuances of bit-level CAN bus manipulation. 

This whole experience pushed me toward the intersection of high-level intelligence and low-level execution. Now that I’ve built the vehicle comms and simulation from the ground up, I’m ready to dive into precise motion planning and non-smooth trajectory optimization. I want to take what I learned at PJTL and tackle more complex algorithms that let robots move through high-stakes environments with more mathematical rigor and agility.