(() => {
  const FLAGS = {
    '': '🇩🇪',
    tr: '🇹🇷',
    ru: '🇷🇺',
    uk: '🇺🇦',
    fr: '🇫🇷',
    es: '🇪🇸',
    pt: '🇵🇹',
    pl: '🇵🇱'
  };

  const picker = document.querySelector('.lang-picker');
  const currentFlag = document.getElementById('lang-current-flag');
  if (!picker || !currentFlag) return;

  function findGoogleSelect() {
    return document.querySelector('.goog-te-combo');
  }

  function setLanguage(code, attemptsLeft) {
    if (attemptsLeft === undefined) attemptsLeft = 10;
    const select = findGoogleSelect();
    if (!select) {
      // Google widget not ready yet (slow network) - try a few more times,
      // then give up quietly (e.g. Google Translate blocked/unreachable).
      if (attemptsLeft > 0) setTimeout(() => setLanguage(code, attemptsLeft - 1), 300);
      return;
    }
    select.value = code;
    select.dispatchEvent(new Event('change'));
    currentFlag.textContent = FLAGS[code] || '🌐';
    picker.open = false;
  }

  picker.querySelectorAll('.lang-option').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  document.addEventListener('click', (e) => {
    if (picker.open && !picker.contains(e.target)) picker.open = false;
  });
})();
