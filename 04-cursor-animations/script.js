const main = document.querySelector(".main");
const cursor = document.querySelector(".cursor");
const image = document.querySelector(".image");
const img = document.querySelector(".image img");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.7,
    ease: "circ.out",
  });
});

let zoomed = false;

image.addEventListener("mouseenter", () => {
  cursor.innerHTML = zoomed ? "Close" : "View";

  gsap.to(cursor, {
    scale: 3,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    duration: 0.3,
  });
});

image.addEventListener("mouseleave", () => {
  if (!zoomed) {
    cursor.innerHTML = "";
  }

  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    duration: 0.3,
  });
});

image.addEventListener("click", (e) => {
  e.stopPropagation();

  zoomed = !zoomed;

  gsap.to(img, {
    scale: zoomed ? 1.7 : 1,
    duration: 0.5,
    ease: "power3.out",
  });

  cursor.innerHTML = zoomed ? "Close" : "Zoom";
});

main.addEventListener("click", () => {
  if (zoomed) {
    zoomed = false;

    gsap.to(img, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });

    cursor.innerHTML = "";
  }
});
