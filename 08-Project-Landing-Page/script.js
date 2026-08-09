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
