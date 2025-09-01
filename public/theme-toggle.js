document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('theme-toggle');

  // Load theme from local storage
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Set checkbox to match saved theme
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }

  // Toggle theme on checkbox change
  toggleSwitch.addEventListener('change', function () {
    const theme = toggleSwitch.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });
});
