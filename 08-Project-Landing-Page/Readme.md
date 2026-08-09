# ✨ GSAP Landing Page Animations

A modern responsive landing page showcasing **GSAP and ScrollTrigger animations** across multiple sections. The project includes animated navigation, hero entrance effects, scroll-triggered service cards, CTA animations, case studies, and footer reveals.

## 📂 Folder Structure

```text
08-Project-Landing-Page/
├── assets/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🚀 Features

* Responsive navigation with hamburger menu
* GSAP navbar entrance animation
* Hero section entrance animations
* Animated trusted-company logos
* Scroll-triggered service cards
* Alternating card entrance directions
* Animated card icons and content
* CTA section animations
* Case studies reveal animations
* Animated section dividers
* Footer reveal animation
* Responsive layouts for desktop, tablet, and mobile
* ScrollTrigger refresh handling on resize and page load

## 🎬 Animations

### Navbar

The navbar uses a GSAP timeline to animate:

* Header scaling into view
* Logo sliding down
* Navigation links appearing with stagger

On mobile, the hamburger menu can open and close the navigation drawer.

### Hero Section

The hero uses a coordinated timeline with multiple animations running from different directions:

```text
Heading  → Slides from left
Paragraph → Slides from right
Image    → Slides from right
Buttons  → Fade and move upward
Logos    → Scale in with stagger
```

### Services

Each service card is animated individually when it enters the viewport.

Even and odd cards enter from opposite directions:

```text
Even cards → From the left
Odd cards  → From the right
```

The card elements also have separate animations for:

* Icon scaling and rotation
* Heading reveal
* Learn-more link reveal

### CTA Section

The CTA section uses ScrollTrigger to animate:

* Main CTA wrapper
* Heading
* Description
* Button
* Visual/image

Elements enter from different directions to create a layered reveal.

### Case Studies

Case study items animate into view as the user scrolls.

The animation includes:

* Section heading
* Description
* Case study items
* Item descriptions
* Learn-more links
* Vertical dividers

### Footer

The footer starts hidden and is revealed when it enters the viewport.

The copyright text and button also have individual entrance animations.

## 🧠 GSAP Concepts Used

This project demonstrates several useful GSAP concepts:

* `gsap.timeline()`
* `gsap.from()`
* `gsap.to()`
* `gsap.set()`
* `ScrollTrigger`
* Scroll-based triggers
* `toggleActions`
* Staggered animations
* Delayed animations
* Timeline positioning
* Custom easing
* Responsive animation handling
* `ScrollTrigger.refresh()`

## 📱 Responsive Design

The page adapts across different screen sizes.

### Desktop

* Two-column hero layout
* Multi-column service cards
* Horizontal navigation
* Three-column case studies

### Tablet

* Single-column hero
* Stacked CTA
* Single-column case studies

### Mobile

* Hamburger navigation
* Slide-in mobile menu
* Single-column services
* Responsive typography
* Smaller buttons and cards

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript
* GSAP
* ScrollTrigger

## 📖 What I Learned

This project focuses on building more complex GSAP animations rather than isolated effects. It demonstrates how multiple timelines and ScrollTriggers can be organized into separate functions for different sections of a website.

The animation logic is separated into:

```javascript
navbarAnimation();
heroAnimation();
servicesAnimation();
ctaAnimation();
caseStudiesAnimation();
footerAnimation();
```

This makes the animation code easier to maintain and extend.

## ▶️ Running the Project

Clone the repository:

```bash
git clone https://github.com/uzair0x7/GSAP.git
```

Navigate to this project folder and open:

```text
index.html
```

You can also use the **Live Server** extension in VS Code for a better development experience.

## ⭐ Support

If you found this animation useful, consider giving the repository a star.

**GSAP Repository:**
https://github.com/uzair0x7/GSAP

---

**Built while learning and experimenting with GSAP.**
