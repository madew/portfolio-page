const links = document.querySelectorAll('.nav__link');

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      toggleActiveClassToMenuLink(entry);
    });
  },
  { threshold: 0.25 }
);

function toggleActiveClassToMenuLink(entry) {
  if (entry.isIntersecting) {
    const id = entry.target.getAttribute('id');
    //console.log(id);

    links.forEach(link => {
      if (link.hash === `#${id}`) {
        console.log(link);
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
