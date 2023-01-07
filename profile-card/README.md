# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/profile-card-component-ljf3S-bZqX)
- Live Site URL: [Github Pages](https://kurtjf.github.io/frontend-mentor/profile-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

```css: positioning the body background image
background: url(./images/bg-pattern-top.svg),
    url(./images/bg-pattern-bottom.svg), var(--cyan);
  background-position: right calc(45vw + 5%) bottom 50vh,
    left calc(45vw + 5%) top 45vh;
```
```css: making the user-img overlap
.bg-img {
  height: 8.8rem;
  position: relative;
}
.user-img {
  position: absolute;
  bottom: 56.5%;
  left: 50%;
  transform: translate(-50%, 50%);
}
```

### Useful resources

- [Frontend mentor - NFT card](https://github.com/KurtJF/frontend-mentor/blob/main/nft-card/styles.css) - Used as reference with the overlapping user-img
- [CSS calc() to position div](https://stackoverflow.com/questions/41929784/css-calc-to-position-a-div) - Used as reference to position body bg image

## Author

- Github - [KurtJF](https://github.com/KurtJF)
- Frontend Mentor - [@KurtJF](https://www.frontendmentor.io/profile/KurtJF)
