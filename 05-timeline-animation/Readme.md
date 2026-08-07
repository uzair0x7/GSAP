# ⏱️ GSAP Timeline Animations

A modern landing page demonstrating **GSAP Timeline** animations. This project showcases sequential entrance animations for the navbar, hero section, and feature cards, along with smooth scrolling and section-triggered timeline playback.

## 📂 Folder Structure

```text
05-gsap-timeline/
├── assets/
│   └── img.jpg
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🚀 How It Works

### `index.html`

Contains three main sections:

- Responsive Navbar
- Hero Section
- Features Section

It also imports the **GSAP** CDN and Google Fonts.

### `styles.css`

Defines the responsive layout, hero background, feature cards, typography, and modern UI styling.

### `script.js`

The project uses multiple GSAP timelines:

- **Navbar Timeline**
  - Navbar slides down.
  - Logo enters from the left.
  - Navigation links animate in with a stagger effect.

- **Hero Timeline**
  - Overlay fades away.
  - Hero heading scales into view.
  - Paragraph and button slide into place.

- **Features Timeline**
  - Section title animates in.
  - Service cards appear with staggered scaling.

The Features timeline is initially paused and is triggered when:

- The **Get Started** button smoothly scrolls to the section.
- The section enters the viewport using the **Intersection Observer API**.

## ✨ Features

- GSAP Timelines
- Sequential Animations
- Stagger Effects
- Smooth Scrolling
- Intersection Observer
- Responsive Design
- Modern Landing Page UI
- Modular Animation Timelines

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript
- GSAP

## 📖 Concepts Covered

- GSAP Timeline
- Timeline Sequencing
- Stagger Animations
- Scale & Fade Effects
- Smooth Scroll Navigation
- Intersection Observer
- Responsive Layouts

## ⭐ Support

If you found this project useful, consider starring the repository.

**Repository:** https://github.com/uzair0x7/GSAP