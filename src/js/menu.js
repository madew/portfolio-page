const button = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.nav');
const body = document.querySelector('body');

button.addEventListener('click', e => {
  menu.classList.toggle('open');
  button.classList.toggle('open');
  body.style.overflowY === 'hidden'
    ? (body.style.overflowY = 'scroll')
    : (body.style.overflowY = 'hidden');
});

menu.addEventListener('click', e => {
  if (menu.classList.contains('open') && e.target.className === 'nav__link') {
    menu.classList.remove('open');
    button.classList.remove('open');
    body.style.overflowY = 'scroll';
  }
});
