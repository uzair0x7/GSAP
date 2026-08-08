const textSplit = (element, text) => {
  let splitted = text.split("");

  let value = "";

  splitted.forEach((e) => {
    value += `<span class="myelem">${e}</span>`;
  });

  element.innerHTML = value;
};

const midSplit = (elem, text) => {
  const len = text.length;

  const splitted = text.split("");

  let value = "";

  let halfLen = Math.floor(len / 2);

  splitted.forEach((e, idx) => {
    if (idx < halfLen) {
      value += `<span class="firsthalf"> ${e} </span>`;
    } else {
      value += `<span class="secondhalf"> ${e} </span>`;
    }
  });

  elem.innerHTML = value;
};

const simpleAnimation = () => {
  gsap.from(".myelem", {
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    stagger: 0.1,
    ease: "power1.in",
  });
};

const simpleSecond = () =>{
    gsap.from(".myelem", {
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    stagger: -0.1,
    ease: "power1.in",
  });
}

const cuteAnimation = () => {
  gsap.from(".firsthalf", {
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    stagger: 0.1,
    ease: "power1.in",
  });
  gsap.from(".secondhalf", {
    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    stagger: -0.1,
    ease: "power1.in",
  });
};

const leftToRight = (e, text) => {
  textSplit(e, text);
  simpleAnimation();
};

const rightToLeft = (e, text) => {
  textSplit(e, text);
  simpleSecond();
};

const middleAnimation = (e, text) => {
  midSplit(e, text);
  cuteAnimation();
};



let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
const element = document.querySelector(".heading");
let text = "Professional"

btn1.addEventListener("click", ()=>{
    leftToRight(element,text)
})

btn2.addEventListener("click", ()=>{
    rightToLeft(element,text)
})

btn3.addEventListener("click", ()=>{
    middleAnimation(element,text)
})

