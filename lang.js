(() => {
  const picker = document.querySelector('.lang-picker');
  const currentFlag = document.getElementById('lang-current-flag');
  if (!picker || !currentFlag) return;

  const pageUrl = window.location.href;

  picker.querySelectorAll('.lang-option[data-lang]').forEach((link) => {
    const code = link.dataset.lang;
    link.href = 'https://translate.google.com/translate?sl=de&tl=' + encodeURIComponent(code) + '&u=' + encodeURIComponent(pageUrl);
  });

  picker.querySelectorAll('.lang-option').forEach((link) => {
    link.addEventListener('click', () => {
      const flagEl = link.querySelector('.lang-option-flag');
      currentFlag.innerHTML = flagEl ? flagEl.innerHTML : '🌐';
      picker.open = false;
      if (link.classList.contains('lang-option-original')) {
        // Already on the German original - just close the menu, no navigation.
        return false;
      }
    });
  });

  document.querySelector('.lang-option-original').addEventListener('click', (e) => {
    e.preventDefault();
  });

  document.addEventListener('click', (e) => {
    if (picker.open && !picker.contains(e.target)) picker.open = false;
  });
})();
