const button = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.nav');

button.addEventListener('click', e => {
  menu.classList.toggle('open');
  button.classList.toggle('open');
});

menu.addEventListener('click', e => {
  if (menu.classList.contains('open') && e.target.className === 'nav__link') {
    menu.classList.remove('open');
  }
});
