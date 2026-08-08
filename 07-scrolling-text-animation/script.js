document.addEventListener("DOMContentLoaded", () => {
  const page1 = gsap.timeline();

  page1
    .from(".page1 .label", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(
      ".page1 h1",
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.3",
    )
    .from(
      ".scroll-text",
      {
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.5",
    );

  window.addEventListener("wheel", (dets) => {
    let val = dets.deltaY;

    console.log(val);

    if (val > 0) {
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        duration: 4,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".marque img", {
        rotate: 0,
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(0%)",
        duration: 4,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".marque img", {
        rotate: 180,
      });
    }
  });

  const page3 = document.querySelector(".page3");

  const page3Animation = gsap.timeline({
    paused: true,
  });

  page3Animation
    .from(".page3 .label", {
      opacity: 0,
      y: -30,
      duration: 0.6,
      ease: "power3.out",
    })
    .from(
      ".page3 h2",
      {
        opacity: 0,
        y: 120,
        scale: 0.85,
        duration: 1.1,
        ease: "power4.out",
      },
      "-=0.2",
    )
    .from(
      ".page3 p",
      {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4",
    )
    .from(
      ".github-btn",
      {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.7,
        ease: "back.out(1.7)",
      },
      "-=0.3",
    );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          page3Animation.play();
        }
      });
    },
    {
      threshold: 0.4,
    },
  );

  observer.observe(page3);

  const githubBtn = document.querySelector(".github-btn");

  githubBtn.addEventListener("mouseenter", () => {
    gsap.to(githubBtn, {
      y: -5,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  githubBtn.addEventListener("mouseleave", () => {
    gsap.to(githubBtn, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
