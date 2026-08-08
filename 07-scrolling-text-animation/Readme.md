# 🔄 GSAP Scroll & Marquee Animation

A multi-section animation experiment built with **GSAP**, featuring page entrance animations, a scroll-controlled infinite marquee, Intersection Observer animations, and interactive hover effects.

## 📂 Folder Structure

```text
07-scroll-marquee/
├── assets/
│   └── myarrow.svg
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🚀 How It Works

### Page 1 — Hero Animation

The first section uses a GSAP timeline to animate:

* Label fading and sliding down
* Large heading revealing from below
* Scroll indicator appearing afterward

### Page 2 — Scroll Marquee

The second section contains repeated marquee elements.

The mouse wheel controls the direction:

* **Scroll down** → marquee moves left
* **Scroll up** → marquee moves right
* Arrow rotation changes depending on scroll direction
* The marquee continuously loops using `repeat: -1`

### Page 3 — Scroll-Triggered Animation

The third section uses `IntersectionObserver` to detect when the section enters the viewport.

Once visible, GSAP animates:

* Section label
* Heading
* Description
* GitHub button

The timeline starts paused and plays when the section reaches the viewport.

### GitHub Button

The button also has a GSAP hover interaction:

* Scales up slightly
* Moves upward
* Returns to its original position when the mouse leaves

## ✨ Features

* GSAP Timelines
* Scroll-Based Marquee
* Infinite Loop Animation
* Wheel Direction Detection
* SVG Rotation
* Intersection Observer
* Scroll-Triggered Animations
* Hover Animations
* Responsive Design

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript
* GSAP
* SVG
* Intersection Observer API

## 📖 Concepts Covered

* `gsap.timeline()`
* `gsap.from()`
* `gsap.to()`
* `repeat: -1`
* GSAP easing
* Mouse wheel events
* `deltaY` direction detection
* Intersection Observer
* Scroll-based interactions
* SVG transforms
* Responsive CSS

## 🎯 Animation Flow

```text
Page 1
  ↓
Hero entrance timeline
  ↓
Page 2
  ↓
Wheel controls marquee direction
  ↓
Page 3 enters viewport
  ↓
IntersectionObserver triggers timeline
  ↓
GitHub button hover interaction
```

## ⭐ Support

If you found this project useful, consider starring the repository.

**Repository:** https://github.com/uzair0x7/GSAP
