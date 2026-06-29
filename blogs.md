---
layout: single
title: "Blog"
permalink: /blogs/
author_profile: true
---

Notes and write-ups on the research topics I'm exploring, including control theory, computer vision, and more.

{% assign _empty = "" | split: "" %}
{% assign _all_blogs    = site.blogs | default: _empty %}
{% assign control_posts = _all_blogs | where: "categories", "control" | sort: "order" %}
{% assign cv_posts      = _all_blogs | where: "categories", "cv"      | sort: "order" %}
{% assign ai_posts      = _all_blogs | where: "categories", "ai"      | sort: "order" %}
{% assign book_posts    = _all_blogs | where: "categories", "books"   | sort: "order" %}

<h2 class="section-header build">Control Theory</h2>
<div class="project-list">
  {% for post in control_posts %}
  <a href="{{ post.url | relative_url }}" class="project-row">
    {% if post.header.teaser %}
    <div class="project-row-img">
      <img src="{{ post.header.teaser | relative_url }}" alt="{{ post.title }} thumbnail">
    </div>
    {% endif %}
    <div class="project-row-meta">
      <h3 class="project-row-title">{{ post.title }}</h3>
    </div>
    <div class="project-row-desc">
      <p>{{ post.excerpt }}</p>
    </div>
    <div class="project-row-icon">
      <span>&rarr;</span>
    </div>
  </a>
  {% endfor %}
</div>

<!-- <h2 class="section-header teach">Computer Vision</h2>
<div class="project-list">
  {% for post in cv_posts %}
  <a href="{{ post.url | relative_url }}" class="project-row">
    {% if post.header.teaser %}
    <div class="project-row-img">
      <img src="{{ post.header.teaser | relative_url }}" alt="{{ post.title }} thumbnail">
    </div>
    {% endif %}
    <div class="project-row-meta">
      <h3 class="project-row-title">{{ post.title }}</h3>
    </div>
    <div class="project-row-desc">
      <p>{{ post.excerpt }}</p>
    </div>
    <div class="project-row-icon">
      <span>&rarr;</span>
    </div>
  </a>
  {% endfor %}
</div> -->

<!-- <h2 class="section-header learn">AI & ML</h2>
<div class="project-list">
  {% for post in ai_posts %}
  <a href="{{ post.url | relative_url }}" class="project-row">
    {% if post.header.teaser %}
    <div class="project-row-img">
      <img src="{{ post.header.teaser | relative_url }}" alt="{{ post.title }} thumbnail">
    </div>
    {% endif %}
    <div class="project-row-meta">
      <h3 class="project-row-title">{{ post.title }}</h3>
    </div>
    <div class="project-row-desc">
      <p>{{ post.excerpt }}</p>
    </div>
    <div class="project-row-icon">
      <span>&rarr;</span>
    </div>
  </a>
  {% endfor %}
</div>

<h2 class="section-header learn">Books</h2>
<div class="project-list">
  {% for post in book_posts %}
  <a href="{{ post.url | relative_url }}" class="project-row">
    {% if post.header.teaser %}
    <div class="project-row-img">
      <img src="{{ post.header.teaser | relative_url }}" alt="{{ post.title }} thumbnail">
    </div>
    {% endif %}
    <div class="project-row-meta">
      <h3 class="project-row-title">{{ post.title }}</h3>
    </div>
    <div class="project-row-desc">
      <p>{{ post.excerpt }}</p>
    </div>
    <div class="project-row-icon">
      <span>&rarr;</span>
    </div>
  </a>
  {% endfor %}
</div> -->
