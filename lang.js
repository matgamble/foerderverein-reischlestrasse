(() => {
  const picker = document.querySelector('.lang-picker');
  const currentFlag = document.getElementById('lang-current-flag');
  if (!picker || !currentFlag) return;

  function findGoogleSelect() {
    return document.querySelector('.goog-te-combo');
  }

  function setLanguage(code, flagHtml, attemptsLeft) {
    if (attemptsLeft === undefined) attemptsLeft = 20;
    const select = findGoogleSelect();
    if (!select || !select.options.length) {
      // Google widget not ready yet (slow network) - try a few more times,
      // then give up quietly (e.g. Google Translate blocked/unreachable).
      if (attemptsLeft > 0) setTimeout(() => setLanguage(code, flagHtml, attemptsLeft - 1), 300);
      else console.warn('[lang] Google Translate widget did not load in time.');
      return;
    }
    const hasOption = [...select.options].some((opt) => opt.value === code);
    if (!hasOption) {
      console.warn('[lang] Sprachcode "' + code + '" ist nicht in includedLanguages enthalten.');
      return;
    }
    select.value = code;
    select.dispatchEvent(new Event('change'));
    currentFlag.innerHTML = flagHtml || '🌐';
    picker.open = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Google's translation swap can reflow/shift the page a moment later
    // (fonts, longer/shorter translated text); scroll to top again once
    // that has settled so the visitor reliably ends up at the very top.
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 700);
  }

  picker.querySelectorAll('.lang-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      const flagEl = btn.querySelector('.lang-option-flag');
      setLanguage(btn.dataset.lang, flagEl ? flagEl.innerHTML : '');
    });
  });

  document.addEventListener('click', (e) => {
    if (picker.open && !picker.contains(e.target)) picker.open = false;
  });
})();
