import gsap from 'gsap';

const tl = gsap.timeline();

tl.from('.hero__line span', 1.8, {
  y: 100,
  skewY: 7,
  ease: 'power4.out',
  delay: 1,
  stagger: {
    amount: 0.3,
  },
})
  .to('.intro-overlay__line', 2, {
    y: '100%',
    ease: 'expo.inOut',
    stagger: 0.4,
  })
  .to('.intro-overlay', 0, { css: { display: 'none' } })
  .to('body', 0, { css: { style: 'overflow-y: scroll' } });
