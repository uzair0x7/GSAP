# ✨ Text Split Animations

A collection of **GSAP text-splitting animations** that animate individual characters from different directions. The project includes three animation styles triggered by buttons.

## 📂 Folder Structure

```text
06-text-split/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🚀 How It Works

The JavaScript dynamically splits the text into individual `<span>` elements and uses GSAP to animate each character.

### Animation 1 — Left to Right

Characters enter from below and animate sequentially from **left to right** using a positive stagger.

### Animation 2 — Right to Left

Characters use a **negative stagger**, making the animation play from **right to left**.

### Animation 3 — Middle Out

The text is divided into two halves:

* Left half → animates left to right
* Right half → animates right to left

This creates a **middle-out text reveal** effect.

## ✨ Features

* Character-by-character text animation
* Left-to-right reveal
* Right-to-left reveal
* Middle-out reveal
* Positive and negative stagger
* Reusable animation functions
* Button-controlled animations

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript
* GSAP

## 📖 Concepts Covered

* DOM manipulation
* Dynamic HTML generation
* String splitting
* GSAP `from()`
* Stagger animations
* Positive and negative stagger values
* Reusable JavaScript functions

## 🎮 Animations

```text
Animation 1 → Left to Right
Animation 2 → Right to Left
Animation 3 → Middle Out
```

The example uses **"Professional"** as the heading text, but the animation functions can be reused with any text.

## ⭐ Support

If you found this project useful, consider starring the repository.

**Repository:** https://github.com/uzair0x7/GSAP
