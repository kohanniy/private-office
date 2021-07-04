const body = document.querySelector('.page');

const header = document.querySelector('.header');
const menuToggle = header.querySelector('.header__toggle-menu');
const userNav = header.querySelector('.header__user-nav');


const openMenu = () => {
  header.classList.add('menu-open');
  body.classList.add('fixed');
  menuToggle.classList.add('open');
  const realHeight = userNav.clientHeight;
  userNav.style.height = 0;

  const animate = userNav.animate([{ height: realHeight + 'px' }], { duration: 300 });

  animate.addEventListener('finish', () => {
    userNav.removeAttribute('style');
  });
};

const closeMenu = () => {
  menuToggle.classList.remove('open');
  userNav.style.height = userNav.clientHeight + 'px';
  const animate = userNav.animate([{ height: 0 }], { duration: 300 });
  animate.addEventListener('finish', () => {
    header.classList.remove('menu-open');
    body.classList.remove('fixed');
    userNav.removeAttribute('style');
  });
}

const toggleMenu = () => {
  header.classList.contains('menu-open')
    ? closeMenu()
    : openMenu()
};

menuToggle.addEventListener('click', toggleMenu);