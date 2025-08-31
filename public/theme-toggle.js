(function() {
  const applyTheme = (theme) => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  };

  const currentTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(currentTheme);

  const button = document.createElement('button');
  button.id = 'theme-toggle';
  button.textContent = 'Toggle Theme';
  Object.assign(button.style, {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    zIndex: '1000'
  });
  document.body.appendChild(button);

  button.addEventListener('click', () => {
    const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
})();
