// typeit
new TypeIt("#type-1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
  })
    .type("Designer", { delay: 400 })
    .pause(500)
    .delete(9)
    .type("Developer", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();
new TypeIt("#type-2", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
  })
    .type("Designer", { delay: 400 })
    .pause(500)
    .delete(9)
    .type("Developer", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

// gsap
gsap.from(".nav__logo", { opacity: 0, duration: 1, delay: 0.3, y: -50 });
gsap.from(".navbar-nav", { opacity: 0, duration: 1, delay: 0.4, y: -50 });
gsap.from(".header__img", { opacity: 0, duration: 1, delay: 0.5, x: 50 });
gsap.from(".hero", { opacity: 0, duration: 1, delay: 0.6, y: -50 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 0.4,
  delay: 1.2,
  y: -30,
  stagger: 0.2,
});
gsap.from(".header__icons a", {
  opacity: 0,
  duration: 1,
  delay: 1,
  x: -30,
  stagger: 0.2,
});
