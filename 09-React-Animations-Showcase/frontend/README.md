# GSAP × React — Animation Showcase

A React-based animation project focused on exploring **GSAP (GreenSock Animation Platform)** and its integration with React.

The project serves as a collection of interactive animation experiments, demonstrating how GSAP can be used to create smooth, responsive, and engaging web interactions.

---

## Overview

This project is designed as a learning and experimentation environment for building animations with GSAP inside React components.

Rather than relying on React state for every animation, the project uses GSAP to directly control element transforms, movement, timing, and easing.

The current showcase focuses on an interactive "Catch Patrick" animation where the Patrick image moves to a random position whenever the user attempts to hover over it.

---

## Current Showcase

The current animation demonstrates:

* Interactive mouse-based movement
* Random position generation
* GSAP-powered element movement
* React `useRef` integration with GSAP
* Smooth easing
* Transform-based animation
* Interactive image movement
* Full-screen animation boundaries
* Component-based animation structure

---

## Project Structure

```text
GSAP-React/
├── public/
│
├── src/
│   ├── assets/
│   │   └── patrick.png
│   │
│   ├── components/
│   │   └── Fly.jsx
│   │
│   ├── styles/
│   │   └── Fly.css
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

## Features

### Interactive Patrick Animation

The main animation allows the user to interact with a Patrick image.

When the mouse enters the image, GSAP generates random X and Y coordinates and smoothly moves Patrick to the new position.

### Random Movement

GSAP's utility functions are used to generate random animation values:

```javascript
const randomX = gsap.utils.random(-500, 500);
const randomY = gsap.utils.random(-400, 400);
```

This allows every interaction to produce a different movement.

### Smooth Transitions

The movement is animated using `gsap.to()` with a custom duration and easing function:

```javascript
gsap.to(patrick, {
  x: randomX,
  y: randomY,
  duration: 0.5,
  ease: "power2.out",
});
```

### React Integration

The project uses React's `useRef` hook to obtain a direct reference to the DOM element being animated.

```javascript
const patrickRef = useRef(null);
```

The reference is then passed directly to the image:

```jsx
<img
  ref={patrickRef}
  className="patrick"
  onMouseEnter={handleMouseEnter}
  src={Patrick}
  alt="Patrick"
/>
```

This allows GSAP to control the element without requiring React state updates for every frame of the animation.

---

## Animation Flow

The current interaction follows this sequence:

```text
User moves cursor toward Patrick
            │
            ▼
      Mouse enters image
            │
            ▼
     Generate random X/Y
            │
            ▼
       GSAP starts tween
            │
            ▼
    Patrick moves smoothly
            │
            ▼
       New random position
```

---

## GSAP Concepts Used

This project currently demonstrates several fundamental GSAP concepts:

* `gsap.to()`
* `gsap.from()`
* `gsap.set()`
* `gsap.utils.random()`
* `useRef`
* DOM element animation
* Transform animation
* Custom easing
* Animation duration
* Mouse event interactions

As more experiments are added, the project can be expanded to demonstrate more advanced GSAP features.

---

## Tech Stack

* **React.js** — Component architecture and UI
* **GSAP** — Animation engine
* **JavaScript** — Interaction and animation logic
* **CSS3** — Layout and styling
* **Create React App** — Development environment

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/uzair0x7/GSAP.git
```

Navigate to the React animation project:

```bash
cd GSAP
```

If the React project exists inside a specific subdirectory, navigate into that directory before continuing.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

---

## Available Scripts

### `npm start`

Runs the application in development mode.

The page automatically reloads when source files are modified.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Creates an optimized production build in the `build` directory.

### `npm run eject`

Ejects the Create React App configuration.

This is an irreversible operation and is not required for the project.

---

## Why GSAP?

GSAP provides precise control over web animations and is particularly useful for creating complex interactive experiences.

Some of its key capabilities include:

* High-performance animations
* Precise timing control
* Powerful easing functions
* Timeline-based animation sequences
* Scroll-driven animations
* Staggered animations
* SVG animation
* Motion sequencing
* Advanced interaction handling
* Fine-grained transform control

When combined with React, GSAP can handle animation logic while React remains responsible for component structure and application state.

---

## React and GSAP

A common approach when using GSAP with React is to use `useRef` to reference the element that needs to be animated.

For example:

```javascript
const patrickRef = useRef(null);
```

The reference can then be passed to GSAP:

```javascript
gsap.to(patrickRef.current, {
  x: randomX,
  y: randomY,
  duration: 0.5,
  ease: "power2.out",
});
```

This keeps animation calculations outside React's rendering cycle and allows GSAP to efficiently manage the animation.

---

## Future Experiments

This project can be expanded with additional GSAP experiments, including:

* GSAP timelines
* ScrollTrigger
* Scroll-based animations
* Text reveal animations
* Image reveal effects
* Magnetic buttons
* Custom cursor interactions
* Parallax effects
* Stagger animations
* Page transitions
* SVG animations
* Horizontal scrolling
* Card hover animations
* Image distortion effects
* Mouse-following elements
* Drag interactions
* Advanced easing experiments

---

## Learning Focus

The primary purpose of this project is to understand how GSAP works with React and how animation logic can be structured inside reusable React components.

Each experiment is intended to focus on a specific animation technique so that individual concepts can be understood, modified, and reused in larger projects.

The project will continue to evolve as new GSAP concepts and interaction techniques are explored.

---

## Repository

**GSAP Repository:**

https://github.com/uzair0x7/GSAP

---

## License

This project is available for educational and personal use.

---

Built while learning and experimenting with GSAP and React.
