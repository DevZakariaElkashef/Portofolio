// typeit
new TypeIt("#type-1", {
    speed: 160,
    loop: true,
    waitUntilVisible: true,
  })
    .type("Designer", { delay: 300 })
    .pause(500)
    .delete(9)
    .type("Developer", { delay: 300 })
    .pause(500)
    .delete(9)
    .go();

// gsap
gsap.from(".nav__logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 1, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 1.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 2, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 2.5, y: 50 });