// Helper to get matching cards
function getMatchingCards(semester, branch) {
  // The ~= selector handles space-separated lists like "sw robotics"
  return document.querySelectorAll(`.course-card[data-semester="${semester}"][data-branch~="${branch}"]`);
}

// 1. Hovering the Branch Titles (Mass Highlight)
document.querySelectorAll('.branch-labels span').forEach(label => {
  const branch = label.dataset.branch;
  const color = window.getComputedStyle(label).color;

  label.addEventListener('mouseenter', () => {
    document.querySelectorAll(`.course-card[data-branch~="${branch}"]`).forEach(card => {
      card.classList.add('highlight-active');
      card.style.borderColor = color;
    });
  });

  label.addEventListener('mouseleave', () => {
    document.querySelectorAll(`.course-card[data-branch~="${branch}"]`).forEach(card => {
      card.classList.remove('highlight-active');
      card.style.borderColor = 'transparent';
    });
  });
});

// 2. Hovering individual Nodes
document.querySelectorAll('.node').forEach(node => {
  const branch = node.dataset.branch;
  const nodeColor = window.getComputedStyle(node).backgroundColor;

  node.addEventListener('mouseenter', () => {
    const sem = node.closest('.semester-layer').dataset.semester;
    // Highlight ONLY the cards in this semester that have this branch
    getMatchingCards(sem, branch).forEach(card => {
      card.classList.add('highlight-active');
      card.style.borderColor = nodeColor;
    });
  });

  node.addEventListener('mouseleave', () => {
    const sem = node.closest('.semester-layer').dataset.semester;
    getMatchingCards(sem, branch).forEach(card => {
      card.classList.remove('highlight-active');
      card.style.borderColor = 'transparent';
    });
  });
});

// 3. Hovering the Course Cards (Dual-Side)
document.querySelectorAll('.course-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const sem = card.dataset.semester;
    const branches = card.dataset.branch.split(' '); // Split "sw robotics" into array
    
    branches.forEach(branch => {
      const node = document.querySelector(`.semester-layer[data-semester="${sem}"] .node[data-branch="${branch}"]`);
      if (node) {
        node.classList.add('node-active');
        // If the card doesn't have a border color yet, set it to the first branch found
        if (!card.style.borderColor || card.style.borderColor === 'transparent') {
            card.style.borderColor = window.getComputedStyle(node).backgroundColor;
        }
      }
    });
  });

  card.addEventListener('mouseleave', () => {
    const sem = card.dataset.semester;
    const branches = card.dataset.branch.split(' ');
    
    branches.forEach(branch => {
      const node = document.querySelector(`.semester-layer[data-semester="${sem}"] .node[data-branch="${branch}"]`);
      if (node) node.classList.remove('node-active');
    });
    card.style.borderColor = 'transparent';
  });
});