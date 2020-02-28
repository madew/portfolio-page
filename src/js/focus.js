const input = document.querySelector('#name');
const link = document.querySelector('.header__cta button');

link.addEventListener('click', () => {
  input.focus();
});
