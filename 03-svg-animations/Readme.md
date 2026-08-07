# 🎯 Interactive SVG String Animation

An interactive SVG string animation built with **HTML, CSS, JavaScript, and GSAP**. The SVG path follows the user's mouse movement, creating a realistic string effect, then smoothly returns to its original shape using an elastic animation.

## 📂 Folder Structure

```text
03-svg-string-animation/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🚀 How It Works

### `index.html`

Contains an SVG with a single `<path>` element wrapped inside a container. The SVG acts as the interactive string.

### `styles.css`

Centers the SVG on the page and provides a clean black background for better visibility.

### `script.js`

The animation works by:

- Creating a default SVG path.
- Updating the path's control point based on the mouse position.
- Animating the SVG path with GSAP as the mouse moves.
- Returning the path to its original shape with an elastic easing effect when the mouse leaves.

## ✨ Features

- Interactive SVG Path
- Mouse Tracking
- GSAP Attribute Animation
- Elastic Return Effect
- Responsive SVG Width
- Smooth Real-Time Animation
- Minimal & Beginner-Friendly Code

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript
- GSAP
- SVG

## 📖 Concepts Covered

- SVG Paths
- Quadratic Bézier Curves (`Q`)
- GSAP `attr` Animation
- Mouse Events
- Responsive SVG
- Dynamic Path Generation

## ⭐ Support

If you found this project useful, consider starring the repository.

**Repository:** https://github.com/uzair0x7/GSAP