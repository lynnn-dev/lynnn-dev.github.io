// Toggle Settings Sidebar
const settingsIcon = document.getElementById('settings-icon');
const settingsSidebar = document.getElementById('settings-sidebar');

settingsIcon.addEventListener('click', () => {
  settingsSidebar.classList.toggle('active');
});

// Dark / Light Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  themeToggle.textContent = body.classList.contains('light-mode') ? 'Dark Mode' : 'Light Mode';
});

// Website Information
const websiteInfo = document.getElementById('website-info');

websiteInfo.addEventListener('click', () => {
  alert('This is a modern portfolio website created using HTML, CSS, and JavaScript.');
});
