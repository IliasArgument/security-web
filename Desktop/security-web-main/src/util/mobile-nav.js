const mobileNavFunction = () => {
    console.log('mobileNavFunction')
  const headerBtn = document.querySelector('.header-burger-button');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

  let isMobileNavOpen = false;

  headerBtn.addEventListener('click', () => {
      isMobileNavOpen = !isMobileNavOpen;
      if (isMobileNavOpen === true) {
          mobileNav.style.display = 'flex'
          document.body.style.overflowY = 'hidden';
      } else {
          mobileNav.style.display = 'none'
          document.body.style.overflowY = 'auto';
      }
  })

  mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
          isMobileNavOpen = false
          mobileNav.style.display = 'none'
          document.body.style.overflowY = 'auto';
      })
  })
}

export default mobileNavFunction;