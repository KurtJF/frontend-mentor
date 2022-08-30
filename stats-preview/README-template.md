# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/responsive-stats-preview-card-RzEPW8e3hD)
- Live Site URL: [Github Pages](https://kurtjf.github.io/frontend-mentor/stats-preview/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

- Learned how to overlay color on picture
- First time using `::before` pseudo-element

```html
<figure class="hero__img">
  <img
    class="mobile__img"
    src="./images/image-header-mobile.jpg"
    alt="women at a meeting"
  />
  <img
    class="desktop__img"
    src="./images/image-header-desktop.jpg"
    alt="women at a meeting"
  />
</figure>
```

```css
.hero__img {
  position: relative;
  overflow: hidden;
}

.hero__img::before {
  content: " ";
  width: 100%;
  height: 100%;
  left: 0;
  background-color: var(--dark-violet);
  position: absolute;
  border-radius: 0.5rem 0.5rem 0 0;
  opacity: 0.5;
}
```

### Continued development

- Practice and Learn when to use proper semantics in HTML
- Understand when you can use `::before/::after` element in other situations

### Useful resources

- [CSS tricks ::before/::after](https://css-tricks.com/almanac/selectors/a/after-and-before/) - used as reference for `::before`
- [HTML Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics) - used as reference for HTML semantics

## Author

- Github - [KurtJF](https://github.com/KurtJF)
- Frontend Mentor - [@KurtJF](https://www.frontendmentor.io/profile/KurtJF)
