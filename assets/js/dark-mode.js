const toggle = document.getElementById('theme-toggle');
const body = document.querySelector('body');

// Check for saved preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}

toggle.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});