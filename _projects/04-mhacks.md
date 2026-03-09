---
title: "MHacks 2024 TeamUp"
excerpt: "A full-stack team-matching platform built for hackers to find compatible teammates through skill-based filtering."
header:
  teaser: ./assets/images/mhacks.png
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
      TIME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sep 2024 <br>
      LAB/ORG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MHacks @ U-M <br>
      ROLE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Frontend Developer & UI Designer <br>
      STACK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next.js, TypeScript, Tailwind CSS, Shadcn UI, Git
    </code>
    <div class="command" data-prompt="kane@umich:~/projects/mrover$ ">curl -I http://localhost:3000<span class="cursor">_</span></div>
  </div>
</div>

<!-- project abstract -->
<h2 class="section-header build">Mission</h2>
The **"Team Up"** project was born out of a common hackathon frustration: the chaotic struggle of finding the right teammates in a sea of hundreds of participants. We wanted to move away from messy Slack channels and create a dedicated, centralized platform where hackers could discover each other based on complementary skill sets and project interests.

Our goal was to build an intuitive match-making experience that lowered the barrier to entry for solo hackers. By providing a structured way to browse profiles, manage invites, and form teams, we aimed to help participants spend less time networking and more time actually building. In the team, I led the frontend development, focusing on the user experience and visual identity.

<!-- project details -->
<h2 class="section-header teach">Implementation</h2>
* **Platform Architecture** I developed the frontend using Next.js and TypeScript, utilizing the App Router to organize the site into a cohesive flow from the landing page to the onboarding process. TypeScript was essential for maintaining a clean codebase across our 4-person team, ensuring that our components and props remained consistent as we integrated different parts of the application.

* **Rapid UI Prototyping & Styling**
  * **Tailwind CSS:** Allowed for rapid, utility-first styling directly in the markup, which was crucial for fine-tuning the layout of the `Hero Section` and `Image Carousel` on the fly.
  * **Shadcn UI:** I integrated pre-built, accessible components like buttons, cards, and navigation menus. This allowed me to focus on the custom user experience and layout without having to rebuild basic UI elements from scratch.

<!-- project hurdles -->
<h2 class="section-header learn">Challenges</h2>
* **Onboarding:** This was my first deep dive into the Next.js App Router and Shadcn UI. Navigating a new framework and component library while under a strict 36-hour deadline propels me to quickly pick up how to bridge the gap between static design and dynamic React components, ensuring the landing page wasn't just pretty, but also functional and responsive.

* **Coordination:** Since the backend and database were being built simultaneously by my teammates, I had to design the Dashboard and Onboarding UI without live data. This required me to build robust frontend mocks that could be easily plugged into the real API later, requiring constant communication and good Git control to ensure my UI components matched the data structures my teammates were creating in Prisma.

<!-- takeaway & goals -->
<h2 class="section-header build">Reflection</h2>
MHacks taught me the importance of the Minimum Viable Product because in a hackathon, I don’t have time to over-engineer, and I need to focus on the core user journey. I learned how to prioritize high-impact visuals and essential user flows to ensure our team had a polished demo ready for the judges.
