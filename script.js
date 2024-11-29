const iconHamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');

iconHamburger.addEventListener('click', (event) => {
  document.body.classList.toggle('no-scroll');
  iconHamburger.classList.toggle('is-active');
  menuMobile.classList.toggle('active');
});
