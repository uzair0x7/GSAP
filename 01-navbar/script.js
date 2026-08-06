
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

let tl = gsap.timeline();


 
tl.from(".navbar", {
    duration: 1,
    y: -20,
    opacity: 0,
    delay: 0.5
});

tl.from(".logo", {
    duration: 0.5,
    opacity: 0,
    x: -20
});

tl.from(".menu-btn", {
    duration: 0.5,
    opacity: 0,
    x: 20
}, "-=1");

tl.from(".nav-links li", {
    duration: 0.5,
    opacity: 0,
    y: 20,
    stagger: 0.2
});


tl.from(".hero", {
    duration: 1,
    opacity: 0,
    scale: 0.2,
    delay: 0.5
}, );

