---
layout: single
title: "Project Portfolio"
permalink: /projects/
author_profile: true
---

Take a look at the autonomous systems and robotics projects I've been working on at the University of Michigan!

{% assign research = site.projects | where: "categories", "research" | sort: "order" %}
{% assign extracurricular = site.projects | where: "categories", "extracurricular" | sort: "order" %}
{% assign coursework = site.projects | where: "categories", "coursework" | sort: "order" %}

<h2 class="section-header build">Research</h2>
<div class="project-list">
  {% for project in research %}
  <a href="{{ project.url | relative_url }}" class="project-row">
    {% if project.header.teaser %}
    <div class="project-row-img">
      <img src="{{ project.header.teaser | relative_url }}" alt="{{ project.title }} thumbnail">
    </div>
    {% endif %}
    <div class="project-row-meta">
      <h3 class="project-row-title">{{ project.title }}</h3>
    </div>
    <div class="project-row-desc">
      <p>{{ project.excerpt }}</p>
    </div>
    <div class="project-row-icon">
      <span>&rarr;</span>
    </div>
  </a>
  {% endfor %}
</div>

<h2 class="section-header teach">Extracurricular</h2>
<div class="project-list">
  {% for project in extracurricular %}
  <a href="{{ project.url | relative_url }}" class="project-row">
    {% if project.header.teaser %}
    <div class="project-row-img">
      <img src="{{ project.header.teaser | relative_url }}" alt="{{ project.title }} thumbnail">
    </div>
    {% endif %}
    <div class="project-row-meta">
      <h3 class="project-row-title">{{ project.title }}</h3>
    </div>
    <div class="project-row-desc">
      <p>{{ project.excerpt }}</p>
    </div>
    <div class="project-row-icon">
      <span>&rarr;</span>
    </div>
  </a>
  {% endfor %}
</div>

<h2 class="section-header learn">Coursework</h2>
<div class="project-list">
  {% for project in coursework %}
  <a href="{{ project.url | relative_url }}" class="project-row">
    {% if project.header.teaser %}
    <div class="project-row-img">
      <img src="{{ project.header.teaser | relative_url }}" alt="{{ project.title }} thumbnail">
    </div>
    {% endif %}
    <div class="project-row-meta">
      <h3 class="project-row-title">{{ project.title }}</h3>
    </div>
    <div class="project-row-desc">
      <p>{{ project.excerpt }}</p>
    </div>
    <div class="project-row-icon">
      <span>&rarr;</span>
    </div>
  </a>
  {% endfor %}
</div>