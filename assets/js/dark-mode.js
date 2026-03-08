const body = document.body;
const themeKey = 'theme';

// 1. Immediate Theme Check (Prevents flash of light mode)
if (localStorage.getItem(themeKey) === 'dark') {
  body.classList.add('dark-theme');
}

// 2. Global Click Listener
document.addEventListener('click', (e) => {
  // Find the toggle or its parent container
  const toggle = e.target.closest('#theme-toggle');
  
  if (toggle) {
    e.preventDefault();
    body.classList.toggle('dark-theme');
    
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem(themeKey, isDark ? 'dark' : 'light');

    // Optional: Swap icon visually if you want the moon to become a sun
    const icon = toggle.querySelector('i') || toggle;
    if (isDark) {
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  }
});