---
title: "EECS 445 Course Projects"
excerpt: "Introduction to Machine Learning: Course Projects"
header:
  teaser: ./assets/images/umich_eecs.jpeg
date: 2026-04-05
categories: coursework
order: 3
---

<span class="lang-tag">Undergraduate</span>
<span class="topic-tag">Winter 2026</span>
<span class="topic-tag">Upper Level Electives</span>
<span class="topic-tag">Grade: A</span>

> *EECS 445: Introduction to Machine Learning* explores the mathematical foundations and practical implementation of supervised and unsupervised machine learning algorithms, focusing on their application to complex, real-world datasets in fields like robot perception and computer vision.

<!-- Project category 1 -->
<h2 class="section-header learn">Topic 1: Statistical Learning & Predictive Modeling</h2>
This section focuses on the transition from explicit programming to data-driven inference. By implementing foundational algorithms from scratch, ranging from regularized linear models to kernel methods, I developed a rigorous pipeline for clinical risk assessment and medical data analysis.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #1: Clinical Risk Prediction & Kernel Methods</div>
      <div class="summary-tags">
        <span class="lang-tag">Python</span>
        <span class="topic-tag">Scikit-learn</span>
        <span class="topic-tag">RBF Kernels</span>
        <span class="topic-tag">Regularization ($L_1/L_2$)</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Developing a predictive classification pipeline to identify high-risk ICU patients by analyzing high-dimensional clinical time-series and static health records from the PhysioNet dataset.</li>
      <li><strong>Build:</strong> Engineered a robust preprocessing workflow including max-value feature extraction, mean imputation, and Min-Max normalization. Implemented 5-fold stratified cross-validation to optimize hyperparameters ($C$ and $\gamma$) for both Logistic Regression and Kernel Ridge Regression.</li>
      <li><strong>Functionality:</strong> Achieved high-precision mortality predictions by addressing class imbalance via asymmetric cost functions (class weighting) and evaluating performance through 1,000-sample bootstrapping to ensure statistical significance.</li>
    </ul>
  </div>
</details>

<!-- Project category 2 -->
<h2 class="section-header learn">Topic 2: Deep Learning & Computer Vision</h2>
This section explores supervised deep learning architectures for image classification and representation learning. By implementing Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs) using PyTorch, I developed robust pipelines capable of distinguishing complex visual features while mitigating overfitting through transfer learning and data augmentation.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #2: Image Classification & Transfer Learning</div>
      <div class="summary-tags">
        <span class="lang-tag">Python</span>
        <span class="topic-tag">PyTorch</span>
        <span class="topic-tag">CNNs & ViTs</span>
        <span class="topic-tag">Transfer Learning</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Formulate a deep learning vision system to accurately classify specific dog breeds (Collies vs. Golden Retrievers) from a noisy, limited dataset by overcoming severe out-of-distribution shifts.</li>
      <li><strong>Build:</strong> Engineered a custom, lightweight 3-block Convolutional Neural Network and implemented the multi-head attention and forward-pass mechanisms of a Vision Transformer (ViT). Built a robust data preprocessing and augmentation pipeline utilizing random cropping, color jitter, and structural rotations to maximize the utility of 64x64 input images.</li>
      <li><strong>Functionality:</strong> Maximized out-of-sample generalization by designing a two-phase transfer learning approach. Pre-trained the model on an auxiliary 8-class dataset to establish foundational spatial awareness, then froze the convolutional backbone to fine-tune a specialized classification head, successfully preventing catastrophic forgetting and over-parameterization.</li>
    </ul>
  </div>
</details>