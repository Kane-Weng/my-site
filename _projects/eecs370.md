---
title: "EECS 370 Course Projects"
excerpt: "Introduction to Computer Organization: Course Projects"
header:
  teaser: ./assets/images/umich_eecs.jpeg
date: 2026-04-13
use_math: true
categories: coursework
order: 4
---

<span class="lang-tag">Undergraduate</span>
<span class="topic-tag">Winter 2026</span>
<span class="topic-tag">Disciplinary Depth Course</span>
<span class="topic-tag">Grade: #</span>

> *EECS 370: Introduction to Computer Organization* bridges the gap between software and hardware by building a complete computing stack from scratch — designing an ISA, writing a toolchain, and simulating the microarchitecture that executes it.

<!-- project category 1 -->
<h2 class="section-header learn">Topic 1: The LC2K Toolchain</h2>
This section covers the full software toolchain for the LC2K instruction set architecture, from raw assembly text to linked, executable machine code. By building each layer myself, I developed a concrete understanding of how compilers and operating system loaders prepare programs for execution on real hardware.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #1a: LC2K Assembler</div>
      <div class="summary-tags">
        <span class="lang-tag">C</span>
        <span class="topic-tag">Two-Pass Assembly</span>
        <span class="topic-tag">Instruction Encoding</span>
        <span class="topic-tag">LC2K ISA</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Translating human-readable LC2K assembly into 32-bit hex machine code, handling all instruction formats and symbolic references.</li>
      <li><strong>Build:</strong> Implemented a two-pass assembler in C. The first pass builds a label-to-address lookup table; the second pass encodes R-type (<code>add</code>, <code>nor</code>), I-type (<code>lw</code>, <code>sw</code>, <code>beq</code>), J-type (<code>jalr</code>), and pseudo-ops (<code>halt</code>, <code>noop</code>, <code>.fill</code>) into their 32-bit binary representations using bitwise packing.</li>
      <li><strong>Functionality:</strong> Correctly handles PC-relative branch offsets for <code>beq</code>, validates register ranges [0–7] and 16-bit offset bounds, detects duplicate label definitions, and enforces strict blank-line and unrecognized-opcode error policies.</li>
    </ul>
  </div>
</details>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #1s: LC2K Instruction-Level Simulator</div>
      <div class="summary-tags">
        <span class="lang-tag">C</span>
        <span class="topic-tag">Fetch-Decode-Execute</span>
        <span class="topic-tag">Register File Simulation</span>
        <span class="topic-tag">LC2K ISA</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Simulating the full execution of an LC2K machine code program, modeling the processor's architectural state cycle-by-cycle.</li>
      <li><strong>Build:</strong> Implemented a fetch-decode-execute loop in C that maintains a complete architectural state struct — program counter, an 8-register file (<code>reg[0..7]</code>), and a 65,536-word memory. Each cycle, instruction fields are extracted via bitmasks (e.g., <code>mask_opcode = 0x1C00000</code>) and dispatched through a switch statement covering all seven opcodes.</li>
      <li><strong>Functionality:</strong> Correctly implements signed branch arithmetic via 16-bit sign extension (<code>convertNum</code>), handles <code>jalr</code> link-register semantics, and terminates cleanly on <code>halt</code>, printing full machine state and execution statistics.</li>
    </ul>
  </div>
</details>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #2a: Multi-File Object Assembler</div>
      <div class="summary-tags">
        <span class="lang-tag">C</span>
        <span class="topic-tag">Object File Format</span>
        <span class="topic-tag">Symbol Tables</span>
        <span class="topic-tag">Relocation Tables</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Extending the single-file assembler to support modular, multi-file compilation by emitting object files — the same format used by real-world compilers like GCC.</li>
      <li><strong>Build:</strong> Modified the assembler to separate output into four sections: a <strong>Text</strong> section (instructions), a <strong>Data</strong> section (<code>.fill</code> directives), a <strong>Symbol Table</strong> recording global labels as type <code>T</code> (text), <code>D</code> (data), or <code>U</code> (undefined/external), and a <strong>Relocation Table</strong> tracking every instruction that references a symbol needing linker patching.</li>
      <li><strong>Functionality:</strong> Correctly handles all three symbol visibility cases, enforces that instructions must precede <code>.fill</code> data, and leaves relocatable offsets at zero as placeholders for the linker to resolve.</li>
    </ul>
  </div>
</details>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #2l: Multi-File Linker</div>
      <div class="summary-tags">
        <span class="lang-tag">C</span>
        <span class="topic-tag">Symbol Resolution</span>
        <span class="topic-tag">Relocation Patching</span>
        <span class="topic-tag">Static Linking</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Combining up to five separately-assembled object files into a single flat executable, resolving all cross-file symbol references — mirroring the job of <code>ld</code> on a real system.</li>
      <li><strong>Build:</strong> Built a linker in C that: (1) assigns absolute <code>textStartingLine</code> and <code>dataStartingLine</code> offsets to each file by concatenating all text sections before all data sections; (2) constructs a <strong>Master Symbol Table</strong> from all defined global labels, catching duplicate definitions; (3) iterates the relocation tables of every file and patches each instruction's 16-bit offset field with the computed final address, correctly distinguishing global labels, the special <code>Stack</code> symbol, and local address fixups.</li>
      <li><strong>Functionality:</strong> Handles error cases including undefined global labels, duplicate global definitions, and misuse of the reserved <code>Stack</code> label inside object files.</li>
    </ul>
  </div>
</details>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #2r: Recursive Combination in LC2K Assembly</div>
      <div class="summary-tags">
        <span class="lang-tag">LC2K Assembly</span>
        <span class="topic-tag">Stack Frames</span>
        <span class="topic-tag">Recursive Algorithms</span>
        <span class="topic-tag">Calling Conventions</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Implementing the binomial combination function $C(n, r) = C(n-1, r) + C(n-1, r-1)$ in pure LC2K assembly, with no hardware stack support — only registers and memory.</li>
      <li><strong>Build:</strong> Manually engineered a call stack using <code>sw</code>/<code>lw</code> with a stack pointer register (<code>r5</code>). Each recursive call saves the return address, live arguments (<code>n</code>, <code>r</code>), and intermediate results (<code>C(n-1,r)</code>) onto the stack before branching, then restores them on return. Used <code>jalr</code> for indirect function dispatch via a pre-loaded function address register.</li>
      <li><strong>Functionality:</strong> Correctly computes $C(7, 3) = 35$ using two levels of mutual recursion, bottoming out at the base cases $r=0$ and $n=r$, and cleanly returning results in <code>r3</code> through the full call stack.</li>
    </ul>
  </div>
</details>

<!-- project category 2 -->
<h2 class="section-header teach">Topic 2: Microarchitecture & Memory Hierarchy</h2>
With the toolchain complete, I moved down the stack to simulate the hardware itself. This section covers the two major techniques that give modern processors their performance: pipelining, which overlaps instruction execution, and caching, which bridges the speed gap between the CPU and main memory.

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #3: 5-Stage Pipelined Processor Simulator</div>
      <div class="summary-tags">
        <span class="lang-tag">C</span>
        <span class="topic-tag">Pipeline Registers (IF/ID/EX/MEM/WB)</span>
        <span class="topic-tag">Data Forwarding</span>
        <span class="topic-tag">Hazard Detection & Stalling</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Simulating a fully-pipelined LC2K processor that executes up to five instructions simultaneously, while correctly handling all data and control hazards.</li>
      <li><strong>Build:</strong> Implemented five pipeline stages — IF, ID, EX, MEM, WB — as explicit pipeline register structs (<code>IFIDType</code>, <code>IDEXType</code>, <code>EXMEMType</code>, <code>MEMWBType</code>, <code>WBENDType</code>). Each cycle, a <code>newState</code> is computed from the current state and then atomically committed, modeling real clocked flip-flop behavior.</li>
      <li><strong>Functionality:</strong> Handles three classes of hazards: (1) <strong>Load-Use Hazards</strong> — detected in the ID stage by comparing the LW destination against incoming source registers; resolved by freezing the PC and IF/ID register for one cycle and injecting a NOOP bubble into ID/EX. (2) <strong>Data Hazards</strong> — resolved by forwarding results from the EX/MEM, MEM/WB, and WB/END pipeline registers directly into the EX stage ALU inputs, with priority given to the most recent write. (3) <strong>Control Hazards</strong> — a taken BEQ detected in the EX stage flushes the three in-flight instructions behind it by overwriting IF/ID, ID/EX, and EX/MEM with NOOPs.</li>
    </ul>
  </div>
</details>

<details class="project-accordion">
  <summary>
    <div class="summary-container">
      <div class="project-title">Project #4: Set-Associative Cache Simulator</div>
      <div class="summary-tags">
        <span class="lang-tag">C</span>
        <span class="topic-tag">LRU Replacement Policy</span>
        <span class="topic-tag">Write-Back / Write-Allocate</span>
        <span class="topic-tag">Set-Associative Mapping</span>
      </div>
    </div>
  </summary>
  <div class="project-content">
    <ul>
      <li><strong>Objective:</strong> Implementing a parameterized, set-associative cache that plugs into the LC2K pipeline simulator, modeling the behavior of a real CPU memory hierarchy.</li>
      <li><strong>Build:</strong> Designed a cache simulator in C with fully configurable parameters: <code>blockSize</code>, <code>numSets</code>, and <code>blocksPerSet</code>. Each cache block stores a <code>tag</code>, <code>valid</code> bit, <code>dirty</code> bit, and an <code>lruLabel</code> counter. The address is decomposed as: $\text{tag} = \lfloor \text{addr} / (\text{blockSize} \times \text{numSets}) \rfloor$, $\text{setIndex} = \lfloor \text{addr} / \text{blockSize} \rfloor \bmod \text{numSets}$, $\text{blockOffset} = \text{addr} \bmod \text{blockSize}$.</li>
      <li><strong>Functionality:</strong> On a <strong>hit</strong>, updates the LRU counters for the set and services the read or write directly from cache. On a <strong>miss</strong>, selects the LRU block for eviction — writing it back to memory via <code>mem_access</code> only if it is dirty (<code>cacheToMemory</code>), or discarding it silently if clean (<code>cacheToNowhere</code>) — then loads the new block from memory (<code>memoryToCache</code>) before servicing the original request. Tracks hit count, miss count, and writeback count, and reports dirty blocks remaining at halt.</li>
    </ul>
  </div>
</details>
