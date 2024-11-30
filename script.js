// Menu Hamburger
const iconHamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');
const menuLinks = document.querySelectorAll('.menu-item a[href^="#"]');

// Função abre e fecha menu mobile no ícone do menu hamburger
function toggleMobileMenu() {
  document.body.classList.toggle('no-scroll');
  iconHamburger.classList.toggle('is-active');
  menuMobile.classList.toggle('active');
}

// Função fecha menu mobile no as ancoras do menu
function closeMobileMenu() {
  document.body.classList.remove('no-scroll');
  iconHamburger.classList.remove('is-active');
  menuMobile.classList.remove('active');
}

// Obter a distância do topo até a sessão
function getDistanceFromTheTop(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

// Aplicando o efeito de smooth até a distância específicada
function nativeScroll(distanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior: 'smooth',
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target);
  nativeScroll(distanceFromTheTop);
}

// Ao clicar no menu hambuguer, chama a função toggleMobileMenu
iconHamburger.addEventListener('click', toggleMobileMenu);

// Ao clicar nos links do menu, chama a função closeMobileMenu
menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    closeMobileMenu();
    scrollToSection(event);
  });
});
