---
title: "[CBF] Design & Use"
excerpt: "Introduction to the design of control barrier function"
categories: control
order: 2
date: 2026-06-29
use_math: true
---

<span class="lang-tag">Control Theory</span>
<span class="topic-tag">CBF</span>
<span class="topic-tag">Safety</span>
<span class="topic-tag">Design</span>

*Topics planned:*
- Introduce simple distance-based CBF
- Introduce forward invariance intuitively (h<0 --> crash; h=0 --> on boundary; h>0 --> safe set)
- Investigate dh/dt (dh<0 will leads to danger set; robot & obs might be far away, strictly setting dh>=0 is too conservative --> dh >= -alpha h)
- How to compute dh/dt
- How dynamic models use cbf (relative degree needs to be 1 so control inputs can affect dh/dt)
- ...
