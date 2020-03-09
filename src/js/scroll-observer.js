const links = document.querySelectorAll('.nav__link');

let observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      toggleActiveClassToMenuLink(entry);
    });
  },
  { threshold: 0, rootMargin: '50px 0px -150px 0px' }
);

function toggleActiveClassToMenuLink(entry) {
  if (entry.isIntersecting) {
    const id = entry.target.getAttribute('id');
    //console.log(id);

    links.forEach(link => {
      if (link.hash === `#${id}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
