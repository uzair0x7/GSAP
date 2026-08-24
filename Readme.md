<div align="center">

# 🚀 GSAP Animations

### A growing collection of modern web animation experiments.

Built with **GSAP, JavaScript, HTML, CSS, and React.**

<br />

[![GitHub Stars](https://img.shields.io/github/stars/uzair0x7/GSAP?style=for-the-badge&color=yellow)](https://github.com/uzair0x7/GSAP/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/uzair0x7/GSAP?style=for-the-badge&color=blue)](https://github.com/uzair0x7/GSAP/network/members)
[![Last Commit](https://img.shields.io/github/last-commit/uzair0x7/GSAP?style=for-the-badge)](https://github.com/uzair0x7/GSAP/commits)
[![Repository Size](https://img.shields.io/github/repo-size/uzair0x7/GSAP?style=for-the-badge&color=purple)](https://github.com/uzair0x7/GSAP)

[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-Ready-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![License](https://img.shields.io/github/license/uzair0x7/GSAP?style=for-the-badge)](LICENSE)

<br />

**[View Repository](https://github.com/uzair0x7/GSAP)**

</div>

---

## ✦ About

**GSAP Animations** is my personal animation laboratory for learning, experimenting with, and building modern web animations using the **GreenSock Animation Platform (GSAP)**.

Instead of following tutorials without building anything, I use this repository to turn concepts into actual working interfaces and experiments.

Each project focuses on a specific animation technique, interaction, or UI pattern that can later be reused in real-world projects.

> **Learn → Experiment → Build → Refine → Reuse**

The repository will continue growing as I explore more advanced animation techniques.

---

## ✦ What You'll Find Here

This repository contains small experiments as well as complete animated interfaces.

### Core Animations

- `gsap.to()`
- `gsap.from()`
- `gsap.fromTo()`
- Timelines
- Stagger animations
- Delays
- Easing
- Transform animations
- Sequential animations

### Scroll-Based Animations

- ScrollTrigger
- Scroll reveals
- Scrub animations
- Pinning
- Parallax effects
- Horizontal scrolling
- Scroll-based timelines

### Interactive Animations

- Hover interactions
- Mouse tracking
- Custom cursors
- Button animations
- Image zoom effects
- Click feedback
- Magnetic-style interactions
- Dynamic UI animations

### UI & Landing Pages

- Navbar animations
- Hero animations
- Card reveals
- Page transitions
- Loading animations
- CTA animations
- Section reveals
- Responsive animations

### SVG & Advanced Experiments

- SVG animations
- Path animations
- String animations
- Shape morphing
- Custom animation sequences

### React + GSAP

- React component animations
- GSAP inside React
- `useRef`
- `useEffect`
- Component-based animation systems
- ScrollTrigger with React
- Reusable animation components

---

## ✦ Repository Structure

Every experiment is kept in its own folder so that individual animations remain easy to understand, run, and reuse.
```text
GSAP/
│
├── 01-navbar/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
│
├── 02-scrolltrigger/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
│
├── 03-svg-string-animation/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
│
├── 04-cursor-animation/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
│
├── 05-timeline-animation/
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
│
├── 06-...
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── README.md
│
├── ...
│
└── README.md
```text

React-based projects follow their normal React structure:

```text
project-name/
│
├── src/
├── public/
├── package.json
└── README.md
```

---

## ✦ Projects

| # | Project | Focus |
|---|---|---|
| 01 | Navbar Animation | Entrance animations & navigation |
| 02 | ScrollTrigger | Scroll-based animation |
| 03 | SVG String Animation | SVG & path animation |
| 04 | Custom Cursor | Mouse tracking |
| 05 | GSAP Timeline | Sequenced animations |
| ... | More coming | Continuous experimentation |

> This list will grow as new experiments are added.

---

## ✦ Getting Started

### Clone the Repository

```bash
git clone https://github.com/uzair0x7/GSAP.git
```

```bash
cd GSAP
```

---

### HTML / CSS / JavaScript Projects

Navigate to any project:

```bash
cd 01-navbar
```

Then open:

```text
index.html
```

You can also use **Live Server** in VS Code for a better development experience.

---

### React Projects

Navigate into the project:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## ✦ GSAP Setup

For simple HTML projects, GSAP can be loaded directly through a CDN.

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
```

Then animations can be created directly:

```javascript
gsap.from(".hero", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
});
```

---

## ✦ ScrollTrigger

For scroll-based animations:

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
```

Register the plugin:

```javascript
gsap.registerPlugin(ScrollTrigger);
```

Example:

```javascript
gsap.from(".card", {
  y: 100,
  opacity: 0,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".cards",
    start: "top 80%",
  },
});
```

---

## ✦ Technologies

<div align="center">

| Technology | Purpose |
|---|---|
| **GSAP** | Animation engine |
| **ScrollTrigger** | Scroll-based animations |
| **JavaScript** | Animation logic & interactions |
| **HTML5** | Structure |
| **CSS3** | Styling & layouts |
| **React** | Component-based interfaces |
| **Git** | Version control |

</div>

---

## ✦ Learning Roadmap

This repository is also my personal GSAP learning journey.

```text
                    GSAP
                      │
                      ▼
              Basic Animations
                      │
                      ▼
             Timeline & Stagger
                      │
                      ▼
              Hover Interactions
                      │
                      ▼
               ScrollTrigger
                      │
                      ▼
             Advanced Effects
                      │
                      ▼
             SVG Animations
                      │
                      ▼
              React + GSAP
                      │
                      ▼
             Complex Interfaces
                      │
                      ▼
              Production Ready
```

The goal isn't simply to memorize GSAP methods.

The goal is to understand **how animation works in real interfaces** and eventually create polished experiences without relying entirely on pre-built effects.

---

## ✦ Why I'm Building This

I'm using this repository to:

- Learn GSAP from the fundamentals.
- Build animations instead of only watching tutorials.
- Understand animation timing and sequencing.
- Experiment with different easing functions.
- Learn scroll-driven interactions.
- Practice combining GSAP with normal CSS and JavaScript.
- Explore GSAP with React.
- Build reusable animation patterns.
- Improve my frontend development skills.
- Create a personal reference library for future projects.

Every folder represents something I learned, experimented with, or built.

---

## ✦ Animation Philosophy

Good animation should **support the interface**, not distract from it.

The experiments in this repository focus on:

**Timing**

How quickly an element moves or appears.

**Easing**

How movement accelerates and decelerates.

**Spacing**

How animations interact with surrounding elements.

**Interaction**

How the interface responds to user actions.

**Consistency**

Keeping animation behavior predictable across the interface.

**Performance**

Using transforms and efficient animation techniques whenever possible.

---

## ✦ From Experiments to Real Projects

The purpose of these experiments goes beyond this repository.

Animations learned here can eventually be applied to:

```text
Landing Pages
      ↓
Portfolio Websites
      ↓
SaaS Interfaces
      ↓
E-Commerce Websites
      ↓
Interactive Dashboards
      ↓
React Applications
      ↓
Production Websites
```

The repository acts as a sandbox where ideas can be tested before being introduced into larger projects.

---

## ✦ Contributing

This repository is primarily a personal learning project, but improvements and new ideas are welcome.

If you want to contribute:

### 1. Fork the repository

```bash
git fork
```

### 2. Create a branch

```bash
git checkout -b feature/new-animation
```

### 3. Add your animation

Keep the project self-contained and include a small README explaining what the animation demonstrates.

### 4. Commit your changes

```bash
git commit -m "Add new GSAP animation"
```

### 5. Push your branch

```bash
git push origin feature/new-animation
```

### 6. Open a Pull Request

---

## ✦ Support

If you find something useful here, consider giving the repository a ⭐.

It helps the project grow and motivates me to keep experimenting with GSAP.

<div align="center">

**Star the repository →**

**[⭐ github.com/uzair0x7/GSAP](https://github.com/uzair0x7/GSAP)**

</div>

---

## ✦ Author

<div align="center">

# Uzair Ali

### Full Stack Developer

Building modern web applications and experimenting with  
**frontend development, animation, and interactive experiences.**

<br />

[![GitHub](https://img.shields.io/badge/GitHub-uzair0x7-181717?style=for-the-badge&logo=github)](https://github.com/uzair0x7)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Uzair%20Ali-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/uzairdev1/)

</div>

---

## ✦ License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for details.

---

<div align="center">

## Built with curiosity, JavaScript & GSAP.

### Keep experimenting. Keep animating.

**🚀 Happy Animating**

</div>