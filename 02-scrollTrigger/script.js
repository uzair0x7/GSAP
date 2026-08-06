const timeline = gsap.timeline();

timeline.from(".page1 h1", {
  opacity: 0,
  y: 100,
  duration: 1,
});

timeline.from(".page1 .subtitle", {
  opacity: 0,
  x: -100,
  duration: 1,
});
gsap.from(".hero-buttons", {
  scale: 0,
  scrollTrigger: {
    trigger: ".page1",
    start: "top 0",
    end: "bottom 50",

    scrub: 2,
    pin: true,
  },
});

gsap.to(".page2-text", {
  xPercent: -150,
  scrollTrigger: {
    trigger: ".page2",
    start: "top 0",
    end: "bottom 0",
    scrub: 2,

    pin: true,
  },
});

gsap.to(".card", {
  opacity: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".page2",
    start: "top 50",
    end: "bottom 10",
    scrub: 2,
  },
  stagger: 0.5,
});


gsap.to(".page3-text", {
  xPercent: -130,
  scrollTrigger: {
    trigger: ".page3",
    start: "top 0",
    end: "bottom 0",
    scrub: 2,
    pin: true,
  },
});


gsap.from(".about-grid", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".page3",
    start: "top 50",
    end: "bottom 10",
    scrub: 2,
  },
});

gsap.from(".about-box", {
  opacity: 0,
  x: 100,
  scrollTrigger: {
    trigger: ".page3",
    start: "top 50",
    end: "bottom 10",
    scrub: 2,
  },
});

timeline.to(".page4-text", {
  xPercent: -90,
  scale: 0.3,
  scrollTrigger: {  
    trigger: ".page4",
    start: "top 0",
    end: "bottom 0",
    scrub: 2,
    pin: true,
  },
});


timeline.from(".page4 .content", {
  opacity: 0,
  y: 100,
    scrollTrigger: {
    trigger: ".page4",
    start: "top 50",
    end: "bottom 10",
    scrub: 2,
  },
});

