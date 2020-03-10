const input = document.querySelector('#name');
const links = document.querySelectorAll('a[href*="#"]');

links.forEach(link => {
  link.addEventListener('click', e => {
    goToSectionOnClick(e, link);
  });
});

function goToSectionOnClick(e, link) {
  e.preventDefault();

  const target = document.querySelector(`${link.attributes.href.value}`);

  target.scrollIntoView({
    behavior: 'smooth',
  });

  link.attributes.href.value === '#contact' ? input.focus() : null;
}
