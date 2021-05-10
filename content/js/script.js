// navbar
const navBar = document.querySelector(".navbar");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});


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
gsap.from(".nav__logo", { opacity: 0, duration: 1, delay: 0.5, y: -10  });
gsap.from(".navbar-nav", { opacity: 0, duration: 1, delay: 1, y: -50 });
gsap.from(".header__img", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
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

AOS.init();

// glidejs

const glide = document.querySelector(".glide");
if (glide)
  new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();