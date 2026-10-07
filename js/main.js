// Menu latéral (mobile)
const body = document.body;
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navOverlay = document.getElementById('nav-overlay');
const mainNav = document.getElementById('main-nav');
const mobileQuery = window.matchMedia('(max-width: 700px)');

if (navToggle && mainNav) {
  const focusableSelector = 'a[href], button:not([disabled])';

  const isOpen = () => body.classList.contains('nav-open');

  const setOpen = (open, { restoreFocus = true } = {}) => {
    body.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    if (open) {
      // laisse la transition démarrer avant de déplacer le focus
      requestAnimationFrame(() => navClose && navClose.focus());
    } else if (restoreFocus) {
      navToggle.focus();
    }
  };

  // Hors affichage mobile, le menu est une simple barre : rien n'est masqué.
  // Sur mobile, le tiroir fermé est masqué (visibility) donc non focusable.
  navToggle.addEventListener('click', () => setOpen(!isOpen()));
  if (navClose) navClose.addEventListener('click', () => setOpen(false));
  if (navOverlay) navOverlay.addEventListener('click', () => setOpen(false));

  // Un clic sur un lien ferme le menu (le défilement vers l'ancre se fait ensuite)
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (isOpen()) setOpen(false, { restoreFocus: false });
    });
  });

  document.addEventListener('keydown', (e) => {
    if (!isOpen()) return;

    if (e.key === 'Escape') {
      setOpen(false);
      return;
    }

    // Garde le focus dans le menu tant qu'il est ouvert
    if (e.key === 'Tab') {
      const items = Array.from(mainNav.querySelectorAll(focusableSelector));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Repassage en affichage large : on referme proprement
  const onViewportChange = (e) => {
    if (!e.matches && isOpen()) setOpen(false, { restoreFocus: false });
  };
  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener('change', onViewportChange);
  } else if (mobileQuery.addListener) {
    mobileQuery.addListener(onViewportChange);
  }
}

// Lien actif dans la navigation selon la section visible
if ('IntersectionObserver' in window) {
  const links = Array.from(document.querySelectorAll('.nav-list a[href^="#"]'));
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  const sections = Array.from(byId.keys())
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.removeAttribute('aria-current'));
      const active = byId.get(entry.target.id);
      if (active) active.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-35% 0px -60% 0px' });

  sections.forEach((section) => observer.observe(section));
}

// Année du footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
