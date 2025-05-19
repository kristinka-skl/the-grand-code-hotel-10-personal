document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mob-tab-menu');
    const closeBtn = document.querySelector('[data-menu-close]');
    const menuLinks = document.querySelectorAll('.menu-link, .menu-link-to-pricing, .menu-join-link');
  
    if (burgerBtn && mobileMenu && closeBtn) {
      burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.add('is-open');
      });
  
      closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
      });

      menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('is-open');
        });
      });
    }
  });