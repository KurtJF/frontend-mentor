# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Learned how to put an overlay on a picture when hovering. used **inset property** for the first time.

```html
<div class="img__container">
        <img
          class="card__img"
          src="./images/image-equilibrium.jpg"
          alt="Cube NFT" />
        <div class="hover-eye fade">
        <img 
	    class="eye" 
	    src="./images/icon-view.svg" 
	    alt="eye icon" />
        </div>
</div>
```
```css
.img__container {
  height: auto;
  position: relative;
  overflow: hidden;
}

.hover-eye {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  background-color: var(--cyan-transparent);
  border-radius: 0.5rem;
}

.card__img {
  border-radius: 0.5rem;
}
```


If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I still need to work on

- CSS transitions
- CSS positions and when to properly use them
- Inset property [first time using it on this challenge]

### Useful resources

- https://www.youtube.com/watch?v=tF3RE5CGt9U 
(This helped me with the hover effect on the **card__img**)

## Author

- Github - [KurtJF](https://github.com/KurtJF)
- Frontend Mentor - [@KurtJF](https://www.frontendmentor.io/profile/KurtJF)

