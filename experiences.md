---
title: "Experiences"
permalink: /experiences/
title_link: false
---

Technical Courseworks & Work Experiences are here.

<!-- coursework -->
<h2 class="section-header build">Technical Courseworks @ U-M</h2>

<p>Each row is a semester and each column is a track: hardware (HW), robotics (ROB), and software (SW). Hover a dot to light up that semester's courses on that track, hover a track label to see every course on it, or hover a course to find its dots.</p>

<div class="gitflow-roadmap">
  <div class="git-graph">
    <div class="branch-labels">
      <span class="hw-lbl" data-branch="hw" title="Hardware Engineering">HW</span>
      <span class="rob-lbl" data-branch="robotics" title="Robotics & Integration">ROB</span>
      <span class="sw-lbl" data-branch="sw" title="Software & Algorithms">SW</span>
    </div>
    <div class="branch hw"></div>
    <div class="branch robotics"></div>
    <div class="branch sw"></div>
    <div class="semester-layer" data-semester="wn25">
      <span class="semester-label">WN-25</span>
      <div class="node robotics" data-branch="robotics"></div>
      <div class="node sw" data-branch="sw"></div>
    </div>
    <div class="semester-layer" data-semester="fa25">
      <span class="semester-label">FA-25</span>
      <div class="node hw" data-branch="hw"></div>
      <div class="node robotics" data-branch="robotics"></div>
      <div class="node sw" data-branch="sw"></div>
    </div>
    <div class="semester-layer" data-semester="wn26">
      <span class="semester-label">WN-26</span>
      <div class="node hw" data-branch="hw"></div>
      <div class="node robotics" data-branch="robotics"></div>
      <div class="node sw" data-branch="sw"></div>
    </div>
    <div class="semester-layer" data-semester="fa26">
      <span class="semester-label">NOW</span>
      <div class="node hw" data-branch="hw"></div>
      <div class="node robotics" data-branch="robotics"></div>
      <div class="node sw" data-branch="sw"></div>
    </div>
  </div>

  <div class="course-reference">
    <h3>Highlighted Courseworks</h3>
    <div class="course-card" data-semester="wn25" data-branch="robotics">ROB 201: Calculus for the Modern Engineer</div>
    <div class="course-card" data-semester="fa25" data-branch="robotics sw hw">ROB 320: Robot Operating Systems</div>
    <div class="course-card" data-semester="fa25" data-branch="hw">EECS 270: Introduction to Logic Design</div>
    <div class="course-card" data-semester="wn25" data-branch="sw">EECS 280: Programming and Introductory Data Structures</div>
    <div class="course-card" data-semester="fa25" data-branch="sw">EECS 281: Data Structures and Algorithms</div>
    <div class="course-card" data-semester="wn26" data-branch="sw hw">EECS 370: Introduction to Computer Organization</div>
    <div class="course-card" data-semester="wn26" data-branch="sw">EECS 445: Introduction to Machine Learning</div>
    <div class="course-card" data-semester="wn26" data-branch="sw robotics">EECS 504: Foundations of Computer Vision</div>
    <div class="course-card" data-semester="fa26" data-branch="robotics">ROB 314: Introduction to Robot Controls</div>
    <div class="course-card" data-semester="fa26" data-branch="robotics sw hw">ROB 330: Localization, Mapping, and Navigation</div>
    <div class="course-card" data-semester="fa26" data-branch="robotics sw">ROB 498: 3D Robot Perception</div>
  </div>
</div>

<!-- work exp -->
<h2 class="section-header teach">Work Experiences</h2>

<div class="timeline-container">

  <div class="timeline-item is-teaching">
    <div class="timeline-marker"><i class="fas fa-chalkboard-teacher"></i></div>
    <div class="timeline-content has-media">
      <div class="exp-main">
        <div class="exp-head"><span class="timeline-date">Fall 2026 &ndash; Present</span><span class="exp-type">Teaching</span></div>
        <h3 class="timeline-role">Instructional Aide, EECS 445</h3>
        <span class="timeline-org">U-M CSE &middot; Introduction to Machine Learning</span>
        <p>Lead discussion sections and office hours, breaking down core ML concepts.</p>
        <div class="exp-stats"><span><b>250+</b>students</span><span><b>Weekly</b>discussions</span></div>
        <div class="exp-tags"><span class="lang-tag">Python</span><span class="topic-tag">Machine Learning</span><span class="topic-tag">Discussions</span></div>
      </div>
      <figure class="exp-media"><img src="/my-site/assets/images/exp_eecs445.jpg" alt="Leading an EECS 445 discussion"><figcaption>Leading discussion</figcaption></figure>
    </div>
  </div>

  <div class="timeline-item is-research">
    <div class="timeline-marker"><i class="fas fa-database"></i></div>
    <div class="timeline-content has-media">
      <div class="exp-main">
        <div class="exp-head"><span class="timeline-date">Summer 2026</span><span class="exp-type">Research</span></div>
        <h3 class="timeline-role">Research Assistant, Corso Group</h3>
        <span class="timeline-org">U-M Robotics &middot; SURE Program</span>
        <p>Packed large 3D datasets into one HDF5 store for multi-modal AI training, and benchmarked open LLMs and VLMs on estimating object mass.</p>
        <div class="exp-stats"><span><b>7</b>3D datasets</span><span><b>100k+</b>objects</span><span><b>8&times; H100</b>GPU node</span></div>
        <div class="exp-tags"><span class="lang-tag">Python</span><span class="topic-tag">HDF5</span><span class="topic-tag">VLMs</span><a class="exp-link" href="/my-site/projects/sure/">Project &rarr;</a></div>
      </div>
      <figure class="exp-media"><img src="/my-site/assets/images/sure_corso_group.jpeg" alt="Corso Group"><figcaption>Corso Group, Summer 2026</figcaption></figure>
    </div>
  </div>

  <div class="timeline-item is-research">
    <div class="timeline-marker"><i class="fas fa-shield-alt"></i></div>
    <div class="timeline-content has-media">
      <div class="exp-main">
        <div class="exp-head"><span class="timeline-date">Mar 2026 &ndash; Present</span><span class="exp-type">Research</span></div>
        <h3 class="timeline-role">Research Assistant, DASC Lab</h3>
        <span class="timeline-org">U-M Robotics &middot; Safety-Critical Control</span>
        <p>Extending control barrier functions to more robots and to 3D, and running them on a real robot in the Vicon space.</p>
        <div class="exp-stats"><span><b>6</b>robot models</span><span><b>2D &rarr; 3D</b>barriers</span></div>
        <div class="exp-tags"><span class="lang-tag">Python</span><span class="topic-tag">CBFs</span><span class="topic-tag">ROS 2</span><a class="exp-link" href="/my-site/projects/dasc/">Project &rarr;</a></div>
      </div>
      <figure class="exp-media"><img src="/my-site/assets/images/exp_dasc_rover.jpg" alt="RoboMaster running PLCBF in the Vicon space"><figcaption>PLCBF on the RoboMaster</figcaption></figure>
    </div>
  </div>

  <div class="timeline-item is-teaching">
    <div class="timeline-marker"><i class="fas fa-robot"></i></div>
    <div class="timeline-content has-media">
      <div class="exp-main">
        <div class="exp-head"><span class="timeline-date">Winter 2026 &ndash; Present</span><span class="exp-type">Teaching</span></div>
        <h3 class="timeline-role">Instructional Aide, ROB 320</h3>
        <span class="timeline-org">U-M Robotics &middot; Robot Operating Systems</span>
        <p>Guide students through C/C++ and Linux IPC as they build their own ROS-like middleware and kinematics transforms.</p>
        <div class="exp-stats"><span><b>60+</b>students</span><span><b>Weekly</b>lab sections</span></div>
        <div class="exp-tags"><span class="lang-tag">C++</span><span class="topic-tag">Linux IPC</span><span class="topic-tag">Middleware</span><a class="exp-link" href="/my-site/projects/rob320/">Course projects &rarr;</a></div>
      </div>
      <figure class="exp-media"><img src="/my-site/assets/images/rob320_mbot.png" alt="Mbot Omni used in ROB 320"><figcaption>Mbot Omni used in ROB 320</figcaption></figure>
    </div>
  </div>

  <div class="timeline-item is-teaching">
    <div class="timeline-marker"><i class="fas fa-square-root-alt"></i></div>
    <div class="timeline-content has-media">
      <div class="exp-main">
        <div class="exp-head"><span class="timeline-date">Winter 2025 &ndash; Winter 2026</span><span class="exp-type">Teaching</span></div>
        <h3 class="timeline-role">Math Tutor, Calculus I&ndash;III</h3>
        <span class="timeline-org">U-M Math Learning Center</span>
        <p>Drop-in tutoring and study groups for MATH 115, 116, and 215.</p>
        <div class="exp-stats"><span><b>10 hrs</b>a week</span><span><b>20&ndash;30</b>students in study groups</span></div>
        <div class="exp-tags"><span class="topic-tag">Calculus</span><span class="topic-tag">Multivariable</span></div>
      </div>
      <figure class="exp-media"><img src="/my-site/assets/images/math_tutor.jpeg" alt="Tutoring table at the Math Lab"><figcaption>Tutoring at Math Lab, East Hall</figcaption></figure>
    </div>
  </div>

  <!-- Older roles that have ended. Keep the five most recent (and anything current) above this -->
  <details class="timeline-more">
    <summary><span class="more-label">Show 2 earlier roles</span><span class="less-label">Show less</span></summary>
    <div class="timeline-item is-teaching">
      <div class="timeline-marker"><i class="fas fa-pencil-ruler"></i></div>
      <div class="timeline-content has-media">
        <div class="exp-main">
          <div class="exp-head"><span class="timeline-date">Fall 2025</span><span class="exp-type">Teaching</span></div>
          <h3 class="timeline-role">Instructional Aide, ROB 201</h3>
          <span class="timeline-org">U-M Robotics &middot; Calculus for the Modern Engineer</span>
          <p>Redesigned the core Julia assignments to make them more challenging, and held weekly office hours.</p>
          <div class="exp-stats"><span><b>8</b>Julia assignments redesigned</span><span><b>Weekly</b>office hours</span></div>
          <div class="exp-tags"><span class="lang-tag">Julia</span><span class="topic-tag">Calculus</span></div>
        </div>
        <figure class="exp-media is-contain"><img src="/my-site/assets/images/calculus.jpeg" alt="Gradient formula"></figure>
      </div>
    </div>
    <div class="timeline-item is-teaching">
      <div class="timeline-marker"><i class="fas fa-check-double"></i></div>
      <div class="timeline-content has-media">
        <div class="exp-main">
          <div class="exp-head"><span class="timeline-date">Winter 2025</span><span class="exp-type">Teaching</span></div>
          <h3 class="timeline-role">Grader, ROB 101</h3>
          <span class="timeline-org">U-M Robotics &middot; Computational Linear Algebra</span>
          <p>Graded weekly written and Julia programming assignments.</p>
          <div class="exp-stats"><span><b>160+</b>students</span><span><b>40+</b>assignments a week</span><span><b>5</b>grader team</span></div>
          <div class="exp-tags"><span class="lang-tag">Julia</span><span class="topic-tag">Linear Algebra</span></div>
        </div>
        <figure class="exp-media is-contain is-navy"><img src="/my-site/assets/images/umich_rob.jpg" alt="Michigan Robotics logo"></figure>
      </div>
    </div>
  </details>

</div>
