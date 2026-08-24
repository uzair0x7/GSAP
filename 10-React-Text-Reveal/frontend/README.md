# GSAP Scroll Text Reveal Animation

A clean and minimal **scroll-based text reveal animation** built with **React, GSAP, and ScrollTrigger**.

As you scroll through the section, each individual letter smoothly changes color, creating a subtle text-reveal effect that works especially well for landing pages, portfolios, hero sections, and modern web experiences.

## Demo

The animation starts with the text blending into the background. As the user scrolls, the letters progressively reveal themselves one by one.

> Trust me you will like this animation, try scrolling through the section and watch the text reveal itself one letter at a time with a smooth and subtle effect.

## Tech Stack

* React
* GSAP
* GSAP ScrollTrigger
* CSS

## Features

* Letter-by-letter text reveal
* Scroll-controlled animation
* Smooth `scrub` behavior
* GSAP `stagger` animation
* Responsive typography
* Responsive layout for mobile devices
* Minimal and clean design
* Easy to customize
* No external animation libraries besides GSAP

## Project Structure

```text
10-React-Text-Reveal/
├── src/
│   ├── components/
│   │   └── TextReveal.jsx
│   │
│   ├── styles/
│   │   └── TextReveal.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

## How It Works

The text is split into individual characters using JavaScript:

```js
text.split("")
```

Each character is then rendered as its own `<span>`:

```jsx
{text.split("").map((letter, index) => (
    <span
        className="text-reveal-letter"
        key={index}
    >
        {letter}
    </span>
))}
```

GSAP targets these individual elements and uses `ScrollTrigger` to control the animation based on the user's scroll position.

```js
const animation = gsap.to(letters, {
    scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
    },
    color: "#2A1B3D",
    duration: 5,
    stagger: 1,
});
```

The text initially uses the same color as the background:

```css
color: var(--text-reveal-color);
```

As the user scrolls, GSAP changes the letters to the primary text color, creating the reveal effect.

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

## Customization

### Change the Text

Open `TextReveal.jsx` and modify:

```js
const text =
    "Trust me you will like this animation, try scrolling through the section and watch the text reveal itself one letter at a time with a smooth and subtle effect.";
```

You can replace it with any text you want.

### Change the Colors

The animation uses CSS variables, making the theme easy to customize:

```css
:root {
    --background-color: #e8d8ff;
    --text-primary-color: #2a1b3d;
    --text-reveal-color: #e8d8ff;
}
```

The default theme uses a soft purple background with a dark purple text color.

### Change Animation Speed

You can control how quickly the letters reveal using GSAP's `stagger` value:

```js
stagger: 1
```

Lower values reveal the letters faster, while higher values create a slower, more spaced-out reveal.

### Change Scroll Range

The animation's scroll range can be customized here:

```js
start: "top center",
end: "bottom 85%",
```

Changing these values allows you to control when the animation begins and ends during scrolling.

## Responsive Design

The animation automatically adapts to smaller screens.

On mobile devices, the padding is reduced and the font size is adjusted:

```css
@media screen and (max-width: 500px) {
    .text-reveal {
        padding-left: 10px;
        padding-right: 10px;
    }

    .text-reveal-letter {
        font-size: clamp(3rem, 18vw, 6rem);
        line-height: 1;
    }
}
```

## Using the Component

Import the component into your `App.jsx`:

```jsx
import TextReveal from "./components/TextReveal";

function App() {
    return (
        <div className="App">
            <TextReveal />
        </div>
    );
}

export default App;
```

That's it. The animation is completely self-contained inside the `TextReveal` component.

## Why GSAP?

GSAP provides precise control over individual character animations while `ScrollTrigger` makes it easy to synchronize the animation with scrolling.

This combination makes the effect smooth, lightweight, and highly customizable without requiring complicated animation logic.

## License

This project is available for personal and commercial use. Feel free to modify the text, colors, typography, spacing, and animation settings to fit your project.

---

### Built with React + GSAP

A simple scroll animation designed to make typography feel more interactive without overwhelming the page.
