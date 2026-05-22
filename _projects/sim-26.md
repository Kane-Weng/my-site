---
title: "SIM-26 Driving Simulator"
excerpt: "Technical Lead for high-fidelity Unreal Engine 5 autonomous vehicle simulation for driver behavior research."
header:
  teaser: ./assets/images/sim26_logo.jpeg
date: 2026-03-08
categories: program
order: 3
---
<span class="lang-tag">Undergraduate Research</span>
<span class="topic-tag">Winter/Fall 2026</span>
<span class="topic-tag">Multidisciplinary</span>
<span class="topic-tag">Grade: #</span>

<div class="terminal-window">
  <div class="terminal-header">
    <span class="terminal-title">kane@umich:~/projects/sim-26</span>
    <div class="win-controls">
      <span>&#8211;</span> <span>&#9634;</span> <span>&times;</span> 
    </div>
  </div>
  
  <div class="terminal-body">
    <div class="command" data-prompt="kane@umich:~/projects/sim-26$ ">info --detailed</div>
    <code class="output">
      Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Detail <br>
      ------- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ------- <br>
      TIME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jan 2026 – Present <br>
      LAB/ORG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Multidisciplinary Design Program @ U-M;  <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; University of Michigan Transportation Research Institute <br>
      ROLE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Technical Lead & Software Engineer <br>
      STACK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C++, Unreal Engine 5 (Blueprints & Networking)
    </code>
    <div class="command" data-prompt="kane@umich:~/projects/sim-26$ ">ping -c 4 192.168.1.10<span class="cursor">_</span></div>
  </div>
</div>

<!-- project abstract -->
<h2 class="section-header build">Mission</h2>
The SIM-26 project is a large-scale multidisciplinary research initiative at the University of Michigan aimed at studying driver workload and distraction through various factors. 

As the Software Lead for the **“Wizard of Oz”** subteam, I architected a high-fidelity, multiplayer UE5 environment where subjects follow a vehicle they believe is fully autonomous, but is actually controlled by a hidden researcher. This architecture is essential for eliminating social attribution bias. By maintaining the illusion of an AI agent, we ensure participants react naturally to driving hazards rather than second-guessing a researcher's intent. It also serves as a resource-efficient alternative to developing complex autonomous agents from scratch, providing a highly reactive and realistic simulation environment that serves the broader research team.

<div class="project-carousel" id="sim26-carousel">
  <div class="carousel-inner">
    <div class="carousel-track" id="sim26-track">
      <div class="carousel-slide">
        <img src="/my-site/assets/images/sim26_team_photo.jpg" alt="2026 SIM Team">
      </div>
      <div class="carousel-slide">
        <img src="/my-site/assets/images/sim26_poster.jpeg" alt="WizardOfOz poster">
      </div>
      <div class="carousel-slide">
        <img src="/my-site/assets/images/sim26_drive_screen.png" alt="Simulation Drive Screen">
      </div>
    </div>
    <button class="carousel-btn carousel-prev" onclick="carouselStep('sim26', -1)" aria-label="Previous">&#8249;</button>
    <button class="carousel-btn carousel-next" onclick="carouselStep('sim26', 1)" aria-label="Next">&#8250;</button>
  </div>
  <div class="carousel-dots" id="sim26-dots">
    <span class="carousel-dot active" onclick="carouselGoTo('sim26', 0)"></span>
    <span class="carousel-dot" onclick="carouselGoTo('sim26', 1)"></span>
    <span class="carousel-dot" onclick="carouselGoTo('sim26', 2)"></span>
  </div>

  <span class="project-caption">SIM26 photo gallery — team, poster, and the simulator in UE5</span>
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

  document.addEventListener('DOMContentLoaded', function() { initCarousel('sim26'); });
})();
</script>

<!-- project details -->
<h2 class="section-header teach">Implementation</h2>

### Multiplayer Architecture & Telemetry
* **Listen-Server Framework:** Engineered a custom UI for host/join functionality and a dynamic vehicle spawning system in UE 5 using Blueprints and C++ to synchronize the "Wizard" and the participant in a shared simulation space.
* **Data Collection:** Integrated a visual occlusion system mapped to the steering wheel, allowing the team to quantify visual demand by tracking the frequency and duration of manual glimpses the subject used to navigate relative to the lead vehicle.

### Experimental Design & Environmental Logic
* **Traffic Setup:** Scripted ambient background traffic to prevent participant "zoning out," while limiting sessions to 15 minutes to avoid cognitive fatigue and focus loss.
* **Environment Setup:** Designed a rural road environment to minimize environmental load and confounding variables. The map uses gentle curves to keep focus on the lead car while utilizing specific textures and road furniture (trees, signs) to ensure accurate optical flow for speed perception.

<!-- project hurdles -->
<h2 class="section-header learn">Challenges</h2>

### Network & Engine Onboarding
Building simulation on UE 5 required a mastery of its Blueprint scripting and multiplayer networking architecture. Beyond the engine, I navigated complex hardware-level hurdles to ensure a seamless "Wizard of Oz" connection. This included managing firewall configurations, optimizing local network protocols (TCP/UDP), and troubleshooting hardware-specific connectivity issues across Ethernet to maintain the low-latency environment for real-time interaction.

### Technical Leadership & Synchronization
As a first-time Technical Lead, my primary challenge was shifting from execution to delegation. I focused on architecting a development roadmap that allowed for parallel workflows, ensuring each subteam member had clear, actionable tasks while maintaining strict project deadlines. Additionally, I acted as the primary liaison between our subteam and the broader SIM-26 project, following standardized documentation and communication protocols to ensure our "Wizard" module integrated perfectly with the wider research system.