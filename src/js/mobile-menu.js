(() => {
  const refs = {
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    openMenuBtn: document.querySelector('[data-mobile-menu-open]'),
    closeMenuBtn: document.querySelector('[data-mobile-menu-close]'),
    body: document.querySelector('body'),

    mobileMenuBackdrop: document.querySelector('.mobile-menu-backdrop'),
    mobileMenuNavLinks: document.querySelectorAll('.mobile-nav-link'),
    mobileMenuSocialsLink: document.querySelectorAll('.mobile-socials-link'),
    mobileMenuContactLink: document.getElementById('mobile-menu-contact-link'),
  };

  const toggleMenu = () => {
    const isMenuOpen =
      refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.mobileMenu.classList.toggle('is-open');
    refs.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  refs.mobileMenuBackdrop.addEventListener('click', evt => {
    if (evt.target === refs.mobileMenuContactLink) {
      evt.target.classList.add('active');
      toggleMenu();
    }
    refs.mobileMenuNavLinks.forEach(link => {
      if (evt.target === link && evt.target !== refs.mobileMenuContactLink) {
        toggleMenu();
      }
    });
    refs.mobileMenuSocialsLink.forEach(link => {
      if (evt.target === link) {
        toggleMenu();
      }
    });
    if (evt.target === refs.mobileMenuBackdrop) {
      toggleMenu();
    }
  });

  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    refs.mobileMenu.classList.remove('is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', false);
    refs.body.style.overflow = ''; 
  });
})();