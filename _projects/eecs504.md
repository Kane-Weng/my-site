---
title: "EECS 504 Course Projects"
excerpt: "Foundations of Computer Vision: Course Projects"
header:
  teaser: ./assets/images/umich_eecs.jpeg
date: 2026-04-01
categories: coursework
order: 2
---

<span class="lang-tag">Graduate</span>
<span class="topic-tag">Winter 2026</span>
<span class="topic-tag">Upper Level Electives</span>
<span class="topic-tag">Grade: A</span>

> *EECS 504: Foundations of Computer Vision* provides a graduate-level foundation in computer vision by treating image analysis as a series of optimization problems, focusing on the mathematical modeling of visual invariants, feature extraction, and estimation techniques like camera calibration and stereo reconstruction.

<!-- Project category 1 -->
<h2 class="section-header learn">Topic 1: Foundations of Mathematical Vision</h2>
This section covers the transition from raw pixels to structured geometric information. Through a series of high-level problem sets, I implemented the mathematical first principles of vision—including homography estimation, scale-space theory, and the statistical foundations of pattern recognition.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #1: Geometry, Filtering & Demosaicking</div>
      <div class="summary-tags">
        <span class="lang-tag">Python</span>
        <span class="topic-tag">OpenCV</span>
        <span class="topic-tag">Linear Least Squares</span>
        <span class="topic-tag">Homography</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Implementing core vision algorithms including homography-based projection, Bayer pattern reconstruction, and proving the rotation invariance of the Difference of Gaussians (DoG) operator.</li>
      <li><strong>Build:</strong> Developed a Linear Least Squares solver to estimate $3 \times 3$ homography matrices for image registration and authored a bilinear interpolation engine for Bayer Demosaicking to reconstruct full-color images from raw sensor data.</li>
      <li><strong>Functionality:</strong> Applied homography estimation to project virtual NFL-style "magic yellow lines" onto a football field with perspective correctness and achieved high-fidelity reconstruction of the "Orion" sculpture from mosaicked gray-scale inputs.</li>
    </ul>
  </div>
</details>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #2: Local Features, Scale Space & PCA</div>
      <div class="summary-tags">
        <span class="lang-tag">Python</span>
        <span class="topic-tag">Harris Corners</span>
        <span class="topic-tag">DoG Scale Space</span>
        <span class="topic-tag">PCA / KNN</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Extracting robust, scale-invariant features from images and implementing a statistical learning pipeline for digit classification.</li>
      <li><strong>Build:</strong> Architected a Harris Corner Detector using structure tensor eigenvalues and a Difference of Gaussians (DoG) scale-space pyramid. Developed a dimensionality reduction engine using Principal Component Analysis (PCA) to extract the most descriptive eigenvectors from the MNIST dataset.</li>
      <li><strong>Functionality:</strong> Performed multi-scale blob detection on biological and natural imagery (Drosophila, Sunflowers) and implemented a panoramic stitching pipeline using ORB features. Achieved high-accuracy digit classification ($>90\%$) by combining the PCA-reduced feature basis with a K-Nearest Neighbors (KNN) classifier.</li>
    </ul>
  </div>
</details>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #3: Image Segmentation & Graph Cuts</div>
      <div class="summary-tags">
        <span class="lang-tag">Python</span>
        <span class="topic-tag">Graph Cuts</span>
        <span class="topic-tag">Mumford-Shah</span>
        <span class="topic-tag">Minimum Spanning Forest</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Formulating image segmentation as a graph partitioning problem to extract distinct foreground objects using energy minimization and spanning forest algorithms.</li>
      <li><strong>Build:</strong> Engineered a discrete Potts model to calculate the Mumford-Shah energy function and implemented a max-flow/min-cut pipeline built on top of SLIC superpixels and color histogram features. Developed a multi-object segmentation engine using the Felzenszwalb-Huttenlocher (F-H) algorithm.</li>
      <li><strong>Functionality:</strong> Successfully isolated complex foreground objects from noisy backgrounds by computing optimized adjacency and capacity matrices. Applied edge-filtering post-processing to merge small, uneven components, achieving clean, multi-region graph partitions.</li>
    </ul>
  </div>
</details>

<!-- Project category 2 -->
<h2 class="section-header teach">Topic 2: Research & Advanced Applications</h2>
The capstone of the course involves translating academic research into functional software. Working in a small research group, this project focuses on locating state-of-the-art methods in literature and developing a custom solution for a novel computer vision challenge.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Final Project: RapidGeoStitch (Disaster Response Orthomosaics)</div>
      <div class="summary-tags">
        <span class="lang-tag">Python</span>
        <span class="topic-tag">SIFT / RANSAC</span>
        <span class="topic-tag">YOLOv8</span>
        <span class="topic-tag">GrabCut</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Developing a real-time aerial mapping and analysis system that converts low-altitude drone imagery into a single metric-scaled orthomosaic to aid search-and-rescue teams in disaster zones.</li>
      <li><strong>Build:</strong> Engineered a four-stage pipeline utilizing SIFT keypoints and RANSAC-estimated homographies to construct a global spanning-tree pose graph for image stitching. Integrated a fine-tuned YOLOv8m model using a tiled sliding-window approach for disaster detection, refined by a custom classical computer vision segmenter (GrabCut, Otsu thresholding, morphological operations). Ground Sampling Distance (GSD) was calculated using EXIF metadata with a Depth Anything V2 fallback.</li>
      <li><strong>Functionality:</strong> Delivered a comprehensive application suite (OpenCV live view, batch orchestrator, Streamlit browser) that dynamically stitches sequences of drone images into a unified map. Successfully overlaid color-coded disaster masks (floods, building damage, blocked roads, vehicles) and enabled responders to estimate real-world ground distances directly from the aerial image using an interactive two-click measurement tool.</li>
    </ul>
    <img src="/my-site/assets/images/eecs504_stitch_result.png" class="project-img" alt="EECS 504 stitched result">
    <span class="project-caption">Final Output of the system</span>
  </div>
</details>