---
layout: single
title: "Project Portfolio"
permalink: /projects/
author_profile: true
---

Take a look at the autonomous systems and robotics projects I've been working on at the University of Michigan!

{% assign research = site.projects | where: "categories", "research" | sort: "date" | reverse %}
{% assign extracurricular = site.projects | where: "categories", "extracurricular" | sort: "date" | reverse %}
{% assign coursework = site.projects | where: "categories", "coursework" | sort: "date" | reverse %}

## Research

{% for project in research %}
- [{{ project.title }}]({{ project.url | relative_url }}) — {{ project.excerpt }}
{% endfor %}

## Extracurricular

{% for project in extracurricular %}
- [{{ project.title }}]({{ project.url | relative_url }}) — {{ project.excerpt }}
{% endfor %}

## Coursework

{% for project in coursework %}
- [{{ project.title }}]({{ project.url | relative_url }}) — {{ project.excerpt }}
{% endfor %}
