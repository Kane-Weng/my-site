---
title: "MHacks 2024 - TeamUp"
excerpt: "A full-stack team-matching platform built for hackers to find compatible teammates through skill-based filtering."
header:
  teaser: ./assets/images/mhacks.png
date: 2026-03-08
categories: program
order: 4
---
<span class="lang-tag">Team Competition</span>
<span class="topic-tag">24-Hour</span>
<span class="topic-tag">Hackathon</span>
<span class="topic-tag">Redbull</span>

<div class="project-links">
  <a class="repo-link" href="https://github.com/Blank-FS/mhacks-team-up"><i class="fab fa-github"></i> mhacks-team-up</a>
  <a class="repo-link" href="https://devpost.com/software/teamup-ltzvam"><i class="fas fa-trophy"></i> Devpost</a>
</div>

<div class="terminal-window">
  <div class="terminal-header">
    <span class="terminal-title">kane@umich:~/projects/mhacks</span>
    <div class="win-controls">
      <span>&#8211;</span> <span>&#9634;</span> <span>&times;</span> 
    </div>
  </div>
  
  <div class="terminal-body">
    <div class="command" data-prompt="kane@umich:~/projects/mhacks$ ">info --detailed</div>
    <code class="output">
      Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Detail <br>
      ------- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ------- <br>
      TIME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sep 2024 <br>
      LAB/ORG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MHacks @ U-M <br>
      ROLE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Frontend Developer & UI Designer <br>
      STACK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next.js, TypeScript, Tailwind CSS, Shadcn UI, Git
    </code>
    <div class="command" data-prompt="kane@umich:~/projects/mhacks$ ">curl -I http://localhost:3000<span class="cursor">_</span></div>
  </div>
</div>

<!-- project abstract -->
<h2 class="section-header build">Mission</h2>
At a big hackathon, finding the right teammates usually means scrolling through crowded Slack channels. **TeamUp** gives hackers one place to find each other by skills and project interests, then browse profiles, send invites, and form a team. The goal was to help solo hackers spend less time networking and more time building.

In our team of four, I led the frontend: the user experience and the visual identity of the site.

<div class="project-carousel" id="mhacks-carousel">
  <div class="carousel-inner">
    <div class="carousel-track" id="mhacks-track">
      <div class="carousel-slide" data-caption="The TeamUp landing page.">
        <img src="/my-site/assets/images/mhacks_teamup_hero.jpg" alt="TeamUp landing page hero section">
      </div>
      <div class="carousel-slide" data-caption="Feature and how-it-works sections on the landing page.">
        <img src="/my-site/assets/images/mhacks_teamup_features.jpg" alt="TeamUp feature and how-it-works sections">
      </div>
    </div>
    <button class="carousel-btn carousel-prev" onclick="carouselStep('mhacks', -1)" aria-label="Previous">&#8249;</button>
    <button class="carousel-btn carousel-next" onclick="carouselStep('mhacks', 1)" aria-label="Next">&#8250;</button>
  </div>
  <div class="carousel-dots" id="mhacks-dots">
    <span class="carousel-dot active" onclick="carouselGoTo('mhacks', 0)"></span>
    <span class="carousel-dot" onclick="carouselGoTo('mhacks', 1)"></span>
  </div>
  <span class="project-caption">The TeamUp landing page.</span>
</div>

<!-- project details -->
<h2 class="section-header teach">Implementation</h2>
I built the frontend in Next.js and TypeScript, taking the user from the landing page through onboarding to the dashboard. My teammates built the backend with Auth0 sign-in and a Prisma and MongoDB database.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Frontend Stack</div>
      <div class="summary-tags">
        <span class="lang-tag">TypeScript</span>
        <span class="topic-tag">Next.js</span>
        <span class="topic-tag">Tailwind CSS</span>
        <span class="topic-tag">Shadcn UI</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Next.js App Router:</strong> Organized the site into one flow: landing page, onboarding, and dashboard. TypeScript kept components and props consistent as four people merged their work.</li>
      <li><strong>Tailwind CSS:</strong> Utility classes in the markup made it fast to fine-tune the hero section and image carousel during the event.</li>
      <li><strong>Shadcn UI:</strong> Accessible buttons, cards, and menus out of the box, so I could spend the time on layout and user flow instead of basic components.</li>
    </ul>
  </div>
</details>

<!-- project hurdles -->
<h2 class="section-header learn">Challenges</h2>

### Onboarding
This was my first time with the Next.js App Router and Shadcn UI. Learning both under a 24-hour deadline pushed me to turn static designs into working, responsive React components quickly.

### Coordination
The backend and database were built at the same time as my UI, so I designed the dashboard and onboarding pages without live data. I built frontend mocks that matched the Prisma data structures my teammates were writing, which took constant communication and careful Git work to plug in the real API later.
