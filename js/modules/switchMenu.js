export const switchMenu  = (root) => {
  const body = root;
  const header = body.querySelector('.header');
  const menuToggleBtn = header.querySelector('.header__toggle-menu');
  const userNav = header.querySelector('.header__user-nav');

  const openMenu = () => {
    header.classList.add('menu-open');
    body.classList.add('fixed');
    menuToggleBtn.classList.add('open');
    const realHeight = userNav.clientHeight;
    userNav.style.height = 0;

    const animate = userNav.animate([{ height: realHeight + 'px' }], { duration: 300 });

    animate.addEventListener('finish', () => {
      userNav.removeAttribute('style');
    });
  };

  const closeMenu = () => {
    menuToggleBtn.classList.remove('open');
    userNav.style.height = userNav.clientHeight + 'px';
    const animate = userNav.animate([{ height: 0 }], { duration: 300 });
    animate.addEventListener('finish', () => {
      header.classList.remove('menu-open');
      body.classList.remove('fixed');
      userNav.removeAttribute('style');
    });
  };

  const toggleMenu = () => {
    header.classList.contains('menu-open')
      ? closeMenu()
      : openMenu()
  };

  menuToggleBtn.addEventListener('click', toggleMenu);
};
