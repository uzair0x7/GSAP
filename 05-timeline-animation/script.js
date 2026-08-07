const navtl = gsap.timeline();

navtl.from(".navbar", {
  duration: 0.3,
  y: -80,
  opacity: 0,
});

navtl.from(".logo", {
  duration: 0.5,
  x: -80,
  opacity: 0,
  ease: "power1.inOut",
});

navtl.from(".nav-links li", {
  duration: 0.5,
  y: -50,
  opacity: 0,
  stagger: 0.2,
  ease: "power1.inOut",
});

const heroTl = gsap.timeline();

heroTl.to(".overlay", {
  backgroundColor: "rgba(255,255,255,.12)",
  duration: 0.7,
  delay: 0.7,
  opacity: 0,
  ease: "power1.inOut",
});

heroTl.from(".hero-content h1", {
  opacity: 0,
  duration: 0.9,
  scale: 0,
  ease: "power3.out",
});

heroTl.from(".hero-content p", {
  opacity: 0,
  duration: 0.3,
  ease: "power3.out",
  x: -50,
});

heroTl.from(".hero-content a", {
  opacity: 0,
  duration: 0.3,
  ease: "power3.out",
  x: 50,
});

const featureTl = gsap.timeline();

featureTl
  .from(".title", {
    y: -80,
    opacity: 0,
    scale: 0,
    duration: 0.8,
    ease: "power3.out",
  })
  .from(
    ".card",
    {
      delay: 0.2,
      scale: 0,
      opacity: 0,
      stagger: 0.15,
      clearProps: "transform,opacity",
    },
    "-=0.7",
  );


  featureTl.pause()

let hasPlayedOnce = false;

const btn = document.querySelector(".btn")
const featuresSection = document.querySelector(".features");


btn.addEventListener("click", function (e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      hasPlayedOnce = true;
      featureTl.play(0);
    }, 600);
  }
});


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasPlayedOnce) {
        hasPlayedOnce = true;
        featureTl.play();
      }
    });
  },
  {
    threshold: 0.3,
  },
);



if (featuresSection) {
  observer.observe(featuresSection);
}
