(() => {
  const desktopNavQuery = window.matchMedia('(min-width: 1024px)');
  const topNav = document.querySelector('.mobile-menu');

  if (topNav) {
    const syncTopNav = () => { topNav.open = desktopNavQuery.matches; };
    syncTopNav();
    desktopNavQuery.addEventListener('change', syncTopNav);
  }

  document.querySelectorAll('.mobile-menu nav a').forEach((link) => {
    link.addEventListener('click', () => {
      const details = link.closest('details');
      if (!details) return;
      if (details === topNav && desktopNavQuery.matches) return;
      details.open = false;
    });
  });
})();
