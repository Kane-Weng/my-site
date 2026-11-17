---
title: "Corso Group x SURE"
excerpt: "Research Assistant building a 3D dataset with physical properties and benchmarking AI models on estimating mass."
header:
  teaser: ./assets/images/umich_engineering.jpg
date: 2026-05-22
categories: research
order: 2
use_math: true
---
<span class="lang-tag">Undergraduate Research</span>
<span class="topic-tag">Summer 2026</span>
<span class="topic-tag">Dataset Building</span>
<span class="topic-tag">Multi-Modal AI pre-training</span>

<div class="terminal-window">
  <div class="terminal-header">
    <span class="terminal-title">kane@umich:~/projects/sure</span>
    <div class="win-controls">
      <span>&#8211;</span> <span>&#9634;</span> <span>&times;</span> 
    </div>
  </div>
  
  <div class="terminal-body">
    <div class="command" data-prompt="kane@umich:~/projects/sure$ ">info --detailed</div>
    <code class="output">
      Info &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Detail <br>
      ------- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ------- <br>
      TIME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; May 2026 – Jul 2026 <br>
      LAB/ORG &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Corso Group, SURE Program @ U-M <br>
      ROLE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Research Assistant <br>
      STACK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Python, uv, HDF5 (h5py), trimesh, Ollama, Blender <br>
      COMPUTE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8x NVIDIA H100 node
    </code>
    <div class="command" data-prompt="kane@umich:~/projects/sure$ "><span class="cursor">_</span></div>
  </div>
</div>

<!-- project abstract -->
<h2 class="section-header build">Mission</h2>

This research builds a "Visual Physics Dataset": existing 3D models from online datasets, annotated with physical parameters such as mass, density, and friction, so they behave realistically in physics simulators like Isaac Sim. It supports the Corso Group's broader work on physically grounded multi-modal AI pretraining.

Two things make that hard. Real physical measurements tied to 3D models are rare, so most values have to be estimated. And the raw models come from many datasets that each store files their own way. My summer covered both: one store the cluster can train from, and a benchmark of which open models estimate mass well enough to help annotate at scale.

<!-- TODO(kane): overview figure, maybe sample objects from the datasets. analyze_datasets/visualize_mesh.py can render any object to PNG with --screenshot -->
<p class="project-caption"><em>[Image placeholder: sample objects from the source datasets]</em></p>
<!-- <img src="/my-site/assets/images/sure_overview.png" class="project-img" alt="Visual Physics Dataset overview">
<span class="project-caption">Caption here</span> -->

<!-- project details -->
<h2 class="section-header teach">Implementation</h2>

### One HDF5 Store for Every Dataset
The pipeline downloads each dataset, analyzes every object into a shared mesh-statistics schema, and packs the result into fixed-size HDF5 shards. A small adapter per dataset says which files make up one object, and everything else is shared.

| Dataset | Objects | Shards |
|---|--:|--:|
| ShapeNetCore | 52,488 | 70 |
| PartNet | 32,537 | 140 |
| ShapeNetSem | 12,490 | 70 |
| Amazon Berkeley Objects (ABO) | 7,953 | 70 |
| Google Scanned Objects (GSO) | 1,030 | 12 |
| YCB | 101 | 12 |
{: .table-centered}

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Store Design</div>
      <div class="summary-tags">
        <span class="lang-tag">Python</span>
        <span class="topic-tag">HDF5</span>
        <span class="topic-tag">trimesh</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <p>Each object stores its original files byte for byte, the decoded mesh, and its mesh statistics. A JSON index maps each object to its shard, so reading one object is a single lookup plus one contiguous read. A seventh adapter for MolmoSpaces (Objaverse objects already annotated with mass) was added later on the same design.</p>
    <ul>
      <li><strong>Speed:</strong> Loading geometry from HDF5 is 60 to 400 times faster than re-parsing the original meshes.</li>
      <li><strong>Correctness:</strong> Every analyzer can read loose files or HDF5. A parity check ran each one both ways and confirmed the outputs match.</li>
      <li><strong>Storage:</strong> Once parity passed, the loose copies were removed, freeing about 723 GB.</li>
    </ul>
  </div>
</details>

### Benchmarking Mass Estimation
To annotate at scale we need a model that can guess how heavy an object is. I compared two published pipelines on ABO, whose product listings come with real weights, using open models served through Ollama on an 8-GPU H100 node.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Pipelines & Metric</div>
      <div class="summary-tags">
        <span class="topic-tag">NeRF2Physics</span>
        <span class="topic-tag">ObjaTHOR</span>
        <span class="topic-tag">Ollama</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>NeRF2Physics (text):</strong> Reconstructs the object in 3D, captions it, and asks a language model for each part's material. Mass comes from integrating density over the volume. Tested with 7 models from 7B to 120B parameters.</li>
      <li><strong>ObjaTHOR (vision):</strong> Shows a vision-language model rendered views and asks for the mass directly. Tested with 7 models from 7B to 72B parameters.</li>
    </ul>
    <p>The main metric is Spearman correlation between predicted and true mass. It checks whether a model orders objects correctly from light to heavy, even when its absolute numbers are off:</p>
    <p>$$ \rho = 1 - \frac{6 \sum_{i} d_i^2}{n(n^2 - 1)}, $$</p>
    <p>where $d_i$ is the gap between an object's predicted and true rank, and $n$ is the number of objects.</p>
  </div>
</details>

<img src="/my-site/assets/images/sure_spearman.png" class="project-img" alt="Spearman correlation by model for ObjaTHOR on ABO">
<span class="project-caption">ObjaTHOR on 200 ABO objects. gemma3 27B ranks mass best.</span>

**Findings:**
* **Seeing beats reading.** ObjaTHOR reached a Spearman correlation of 0.88, while NeRF2Physics plateaued no matter how large the language model was.
* **Bigger is not always better.** gemma3 27B was the best model in both pipelines, ahead of larger and newer models.

<!-- project hurdles -->
<h2 class="section-header learn">Challenges</h2>

### Every Dataset Is Different
GSO describes objects in protobuf text files, YCB in SDF, and PartNet ships as one huge split zip archive. Some upstream sources had simply stopped working. Keeping each dataset's quirks in one small adapter made them manageable, and the parity check caught a real bug: the PartNet analyzer was counting about 12,500 models twice.

### Making the Cluster Cooperate
A shared H100 node brought its own problems. Ollama hung on GPUs other users were busy with, the 72B model crawled at 0.17 tokens per second until I capped its context (then 38 tokens per second), and two models needed patches to load or return usable answers. Overnight sweeps also stalled, so I made them resumable and fully detached.
