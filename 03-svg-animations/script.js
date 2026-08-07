function WindowWidth() {
    return window.innerWidth;
}


const svg = document.querySelector(".mysvg");

svg.setAttribute("width", WindowWidth());

document.querySelector(".mypath").setAttribute(
  "d",
  `M ${WindowWidth() * 0.02} 200 Q ${WindowWidth() * 0.5} 200 ${WindowWidth() * 0.98} 100`
);

const defaultPath = `M ${WindowWidth() * 0.02} 200 Q ${WindowWidth() * 0.5} 200 ${WindowWidth() * 0.98} 200`;

document.querySelector(".mypath").setAttribute("d", defaultPath);

const string = document.querySelector(".string");

string.addEventListener("mousemove", (dets) => {
    const newPath = `M ${WindowWidth() * 0.02} 200 Q ${dets.x} ${dets.y} ${WindowWidth() * 0.98} 200`;

    gsap.to(".mypath", {
        duration: 0.3,
        attr: { d: newPath },
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", () => {
    gsap.to(".mypath", {
        duration: 1.5,
        attr: { d: defaultPath },
        ease: "elastic.out(1, 0.3)" 
    });
});

