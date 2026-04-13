---
title: "EECS 281 Course Projects"
excerpt: "Data Structures and Algorithms: Course Projects"
header:
  teaser: ./assets/images/umich_eecs.jpeg
date: 2026-04-13
use_math: true
categories: coursework
order: 5
---

<span class="lang-tag">Undergraduate</span>
<span class="topic-tag">Winter 2025</span>
<span class="topic-tag">Software</span>
<span class="topic-tag">Grade: A</span>

> *EECS 281: Data Structures and Algorithms* builds the theoretical and practical foundation of efficient computation — from STL container internals and custom heap implementations to graph traversals, hash-based indexing, and combinatorial optimization.

<!-- project category 1 -->
<h2 class="section-header learn">Topic 1: Search, Priority Queues & Market Systems</h2>
This section focuses on the mechanics of graph traversal and priority-driven data management. By building a word-morphing solver and a full stock-market simulator from scratch, I developed intuition for choosing the right container — queue vs. stack, sorted vs. unsorted heap — and for analyzing the real-world cost of those choices.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #1: Letterman — Word Morphing via Graph Search</div>
      <div class="summary-tags">
        <span class="lang-tag">C++</span>
        <span class="topic-tag">BFS / DFS</span>
        <span class="topic-tag">Graph Search</span>
        <span class="topic-tag">Dictionary Parsing</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Given a dictionary and two words, find the shortest transformation sequence that converts the start word into the end word, where each step applies exactly one legal operation.</li>
      <li><strong>Build:</strong> Modeled the dictionary as an implicit graph where each word is a node and an edge exists between words reachable by a single operation. Implemented <strong>BFS</strong> (queue) for shortest-path search and <strong>DFS</strong> (stack) for deep exploration, selected at runtime via <code>--queue</code> / <code>--stack</code> flags.</li>
      <li><strong>Functionality:</strong> Supported four mutation modes — <strong>change</strong> (substitute one character), <strong>swap</strong> (transpose adjacent characters), <strong>insert</strong>, and <strong>delete</strong> (length-modifying ops) — and two output formats: <em>Word mode</em> (print every word in the chain) and <em>Modification mode</em> (print the compact edit sequence). Also handled a complex dictionary format with reversal (<code>&</code>), character-insertion bracket (<code>[]</code>), swap (<code>!</code>), and double (<code>?</code>) annotations.</li>
    </ul>
  </div>
</details>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #2A: Market Simulator — Priority Queue–Driven Order Matching</div>
      <div class="summary-tags">
        <span class="lang-tag">C++</span>
        <span class="topic-tag">Priority Queues</span>
        <span class="topic-tag">Order Book Design</span>
        <span class="topic-tag">Running Median</span>
        <span class="topic-tag">Time-Travel Optimization</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Simulate a multi-stock exchange that continuously matches buy and sell orders, tracks per-stock trade prices, and computes several analytical views over the market history.</li>
      <li><strong>Build:</strong> Maintained a per-stock <strong>order book</strong> using two <code>std::priority_queue</code>s — a max-heap of buyers (highest willing price first) and a min-heap of sellers (lowest asking price first) — both with tie-breaking on arrival sequence for FIFO fairness. Accepted two input formats: timestamped-list (TL) and pseudo-random (PR via a seeded generator).</li>
      <li><strong>Functionality:</strong> Implemented four optional analytics flags: <code>--verbose</code> (print each matched trade), <code>--median</code> (per-timestamp median trade price via dual-heap streaming algorithm), <code>--trader_info</code> (net P&L per trader), and <code>--time_travelers</code> (maximum profit achievable by buying once and selling once per stock — solved with a single-pass greedy scan over a <code>State</code> machine tracking <em>NoTrade → CanBuy → Potential → Completed</em> transitions).</li>
    </ul>
  </div>
</details>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #2B: Priority Queue Library — Four Heap Implementations</div>
      <div class="summary-tags">
        <span class="lang-tag">C++</span>
        <span class="topic-tag">Binary Heap</span>
        <span class="topic-tag">Pairing Heap</span>
        <span class="topic-tag">Template Metaprogramming</span>
        <span class="topic-tag">Amortized Analysis</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Build four interchangeable, fully templated priority queue implementations that satisfy a common abstract interface, exposing the performance trade-offs between heap designs.</li>
      <li><strong>Build:</strong> Implemented all four classes inheriting from <code>Eecs281PQ&lt;TYPE, COMP_FUNCTOR&gt;</code>:
        <ul>
          <li><strong>SortedPQ</strong> — sorted <code>std::vector</code>; $O(n)$ push, $O(1)$ top/pop.</li>
          <li><strong>UnorderedPQ</strong> — unsorted vector; $O(1)$ push, $O(n)$ top/pop.</li>
          <li><strong>BinaryPQ</strong> — classic binary max-heap with $O(\log n)$ push/pop and $O(n)$ batch construction via <code>updatePriorities()</code> (heapify).</li>
          <li><strong>PairingPQ</strong> — pointer-based pairing heap with $O(1)$ amortized push/merge and a <code>updateElt()</code> (decrease-key) operation for Dijkstra-style algorithms, using a child–sibling–previous pointer layout.</li>
        </ul>
      </li>
      <li><strong>Functionality:</strong> All four types are drop-in replacements, with a custom comparison functor forwarded through the template chain — making P2A's order book trivially swappable to any underlying heap for benchmarking.</li>
    </ul>
  </div>
</details>

<!-- project category 2 -->
<h2 class="section-header teach">Topic 2: Hash-Based Indexing & Graph Optimization</h2>
This section tackles problems where brute force is computationally prohibitive. By building a multi-modal log search engine backed by hash maps and a drone routing solver using Prim's MST, greedy heuristics, and branch-and-bound, I applied asymptotic analysis directly to observable runtime improvements.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #3: LogMan — Interactive Log Search & Excerpt Manager</div>
      <div class="summary-tags">
        <span class="lang-tag">C++</span>
        <span class="topic-tag">Hash Maps</span>
        <span class="topic-tag">Binary Search</span>
        <span class="topic-tag">Multi-Modal Querying</span>
        <span class="topic-tag">Interactive CLI</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Build a fast, interactive log analysis tool that ingests a large structured log file and supports several independent search modes over millions of entries.</li>
      <li><strong>Build:</strong> Stored the raw log as a <code>vector&lt;LogEntry&gt;</code> (master log, never reordered) and constructed two auxiliary indexes at load time: a <strong>sorted index</strong> (indirect sort by timestamp, enabling $O(\log n)$ range queries via <code>lower_bound</code>/<code>upper_bound</code>) and two <strong>hash maps</strong> — one keyed by lowercased category, one inverted index keyed by keyword — both mapping to vectors of master-log entry IDs.</li>
      <li><strong>Functionality:</strong> Supported four search commands — <code>t</code> (timestamp range), <code>m</code> (exact timestamp match), <code>c</code> (category lookup), <code>k</code> (keyword intersection across multiple terms) — each storing results in a <code>search_list</code>. A separate <strong>excerpt list</strong> (<code>std::deque</code>) served as a personal clipboard with commands to append individual entries (<code>a</code>), append the last search result (<code>r</code>), delete (<code>d</code>), move entries to the beginning/end (<code>b</code>/<code>e</code>), sort (<code>s</code>), clear (<code>l</code>), and print (<code>p</code>).</li>
    </ul>
  </div>
</details>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #4: Drone Router — MST, Heuristic TSP & Branch-and-Bound</div>
      <div class="summary-tags">
        <span class="lang-tag">C++</span>
        <span class="topic-tag">Prim's Algorithm</span>
        <span class="topic-tag">Travelling Salesman Problem</span>
        <span class="topic-tag">Branch & Bound</span>
        <span class="topic-tag">2-opt</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Route a medical-supply drone across a coordinate map split into three regions — Main Campus (Quadrant I/II), Medical Campus (Quadrant III/IV), and a border corridor (the axes) — under three progressively harder optimization modes.</li>
      <li><strong>Build:</strong> Implemented three solver modes behind a single <code>mission()</code> dispatch:
        <ul>
          <li><strong>MST mode</strong> — Prim's algorithm with an adjacency constraint: direct edges between Main and Medical Campus are forbidden (distance = $\infty$), forcing all cross-campus connections to route through border nodes. Runtime: $O(V^2)$.</li>
          <li><strong>FASTTSP mode</strong> — a heuristic pipeline: <em>greedy nearest-neighbor</em> insertion to build an initial tour, followed by <em>furthest-insertion</em> refinement, then a <em>2-opt</em> local search to eliminate crossing edges. Produces good solutions quickly for 10,000-vertex inputs.</li>
          <li><strong>OPTTSP mode</strong> — exact branch-and-bound (<code>genPerms()</code>) seeded with the FASTTSP tour as an initial upper bound, pruned aggressively using an MST lower bound on the unvisited suffix plus the two cheapest connecting "arm" edges back into the partial path. Only explores permutations where <em>running cost + arms + MST lower bound &lt; best known</em>.</li>
        </ul>
      </li>
      <li><strong>Functionality:</strong> The MST cross-campus constraint required careful region detection at read time, flagging <code>MST_computable</code> only when vertices spanning both sides exist. OPTTSP's <code>promising()</code> check reuses the same Prim's implementation from Part A, making the lower-bound computation both correct and cache-friendly.</li>
    </ul>
  </div>
</details>
