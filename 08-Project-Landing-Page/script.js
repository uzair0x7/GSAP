gsap.registerPlugin(ScrollTrigger);

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    const isNav = navLinks.contains(e.target);
    const isHamburger = hamburger.contains(e.target);
    if (!isNav && !isHamburger && navLinks.classList.contains("open")) {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    }
  }
});

const navbarAnimation = () => {
  const tl = gsap.timeline();

  tl.from(".header", {
    scale: 0,
    duration: 0.4,
    ease: "power1.in",
  });

  tl.from(
    ".logo",
    {
      y: -30,
      opacity: 0,
      duration: 0.7,
      ease: "power1.in",
    },
    "-=0.2"
  );
  tl.from(
    ".nav-links li",
    {
      y: -30,
      opacity: 0,
      duration: 0.7,
      ease: "power1.in",
      stagger: 0.12,
    },
    "-=0.5"
  );
};

const heroAnimation = () => {
  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  tl.from(
    ".hero-content h1",
    {
      x: -200,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
    },
    "hero"
  );

  tl.from(
    ".hero-content p",
    {
      x: 80,
      opacity: 0,
      duration: 1,
    },
    "hero+=0.3"
  );

  tl.from(
    ".hero-image",
    {
      x: 300,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power2.out",
    },
    "hero"
  );

  tl.from(
    ".btn-green.hero-one",
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
    },
    "hero+=0.5"
  );

  tl.from(
    ".btn-outline.hero-two",
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
    },
    "hero+=0.7"
  );

  tl.from(
    ".trusted-logos img",
    {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "back.out(1.7)",
      clearProps: "all", 
    },
    "hero+=0.2"
  );

};

const servicesAnimation = () => {
  gsap.from(".services-header h2", {
    scrollTrigger: {
      trigger: ".services-header",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".services-header p", {
    scrollTrigger: {
      trigger: ".services-header",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    x: 60,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
  });

  const cards = document.querySelectorAll(".service-card");
  cards.forEach((card, index) => {
    const isEven = index % 2 === 0;
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
      x: isEven ? -120 : 120,
      opacity: 0,
      rotation: isEven ? -3 : 3,
      duration: 0.9,
      delay: index * 0.12,
      ease: "power2.out",
      clearProps: "transform",
    });

    gsap.from(card.querySelector(".card-icon"), {
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
      scale: 0,
      rotation: -180,
      duration: 0.7,
      delay: index * 0.12 + 0.2,
      ease: "back.out(1.7)",
    });

    gsap.from(card.querySelector(".card-heading"), {
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.12 + 0.1,
      ease: "power2.out",
    });

    gsap.from(card.querySelector(".learn-more"), {
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
      x: -20,
      opacity: 0,
      duration: 0.5,
      delay: index * 0.12 + 0.4,
      ease: "power2.out",
    });
  });
};

const ctaAnimation = () => {
  const ctaWrapper = document.querySelector(".cta-wrapper");

  gsap.from(ctaWrapper, {
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from(".cta-content h2", {
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    x: -80,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
  });

  gsap.from(".cta-content p", {
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    x: -60,
    opacity: 0,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out",
  });

  gsap.from(".cta-content .btn-green", {
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    delay: 0.6,
    ease: "power2.out",
  });

  gsap.from(".cta-visual", {
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    x: 120,
    opacity: 0,
    rotation: 10,
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
  });
};

const caseStudiesAnimation = () => {
  gsap.from(".case-studies-header h2", {
    scrollTrigger: {
      trigger: ".case-studies-header",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  });

  gsap.from(".case-studies-header p", {
    scrollTrigger: {
      trigger: ".case-studies-header",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    x: 60,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
  });

  const caseItems = document.querySelectorAll(".case-item");
  caseItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.15,
      ease: "power2.out",
    });

    gsap.from(item.querySelector("p"), {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.15 + 0.2,
      ease: "power2.out",
    });

    gsap.from(item.querySelector(".learn-more"), {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      x: -20,
      opacity: 0,
      duration: 0.5,
      delay: index * 0.15 + 0.4,
      ease: "power2.out",
    });
  });

  const dividers = document.querySelectorAll(".case-divider");
  dividers.forEach((divider, index) => {
    gsap.from(divider, {
      scrollTrigger: {
        trigger: divider,
        start: "top 92%",
        toggleActions: "play none none reverse",
      },
      scaleY: 0,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.15 + 0.3,
      ease: "power2.out",
      transformOrigin: "center center",
    });
  });
};

const footerAnimation = () => {
  gsap.set(".footer", { opacity: 0, y: 40 });

  gsap.to(".footer", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power2.out",
    clearProps: "all", 
  });


  gsap.from(".footer-left .copy", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
    x: -30,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: "power2.out",
  });

  gsap.from(".footer-right .btn-green", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 95%",
      toggleActions: "play none none reverse",
    },
    x: 40,
    opacity: 0,
    scale: 0.8,
    duration: 0.7,
    delay: 0.3,
    ease: "back.out(1.7)",
  });
};


const init = () => {
  navbarAnimation();
  heroAnimation();
  servicesAnimation();
  ctaAnimation();
  caseStudiesAnimation();
  footerAnimation();

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 300);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 200);
});

window.addEventListener("load", () => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
});