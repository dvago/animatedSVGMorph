# Animated SVG Morph ES6 wrapper

## Overview

This is an ES6 utility function for creating animated SVG path morphs written in 2016.

It was created to avoid importing the bulky GreenSock Animation Platform (GSAP) library just for morphing effects. It leverages the tiny SnapSVG library (only 195 bytes) to enable smooth SVG animations with a much smaller footprint than GSAP.

## Usage

To use this wrapper, follow the steps below:

1. Initialize the class using new animatedSVG(options).
2. `options` is an object that takes the following properties:
    - `el`: An DOM node element, you can use `querySelector`, `getElementById` or whatever method.
    - `attrs`: Common attributes inside an SVG tag (e.g. fill, viewBox).
    - `easing`: A mina function from Snap SVG. More details can be found in the [Snap SVG Documentation](http://snapsvg.io/docs/).
    - `steps`: An array of animations with the relative duration in milliseconds.
    - `onAnimationEnd`: A function that is triggered at the end of your animation.
    - `beforeAnimationStart`: A function that runs before the animation starts.

## Usage Example

Check out this [Demo sandbox](https://codesandbox.io/s/utility-animated-svg-morphing-demo-v334dy).

Here's a simple example:

First, suppose **animatedPanel** is a DOM node element

```html
<svg class="js-animated-panel" id="svgStage"></svg>
```

Get the DOM element reference

```js
const animatedPanel = document.querySelector('.js-animated-panel')
```

Now, initialize the class that generates the SVG taking the first path inside the steps property:

```js
new animatedSVG({
    el: animatedPanel,
    attrs: {
        viewBox: '0 0 1920 382',
        fill: '#00ceae',
        preserveAspectRatio: 'xMinYMin slice'
    },
    steps: [
        { animation: { d: 'M0,0V4S447.77,71,959.5,71,1919,4,1919,4V0Z' }, dur:   }, // initial path
        { animation: { d: 'M0,0V13S447.77,260,959.5,260,1919,13,1919,13V0Z' }, dur: 5 },
        { animation: { d: 'M0,0V343s447.77,37,959.5,37S1919,343,1919,343V0Z' }, ur: 75 },
        { animation: { d: 'M0,0V363s447.77,17,959.5,17S1919,363,1919,363V0Z' }, ur: 105 },
        { animation: { d: 'M0,0V343s447.77,37,959.5,37S1919,343,1919,343V0Z' }, ur: 45 },
        { animation: { d: 'M0,0V193s447.77,67,959.5,67S1919,193,1919,193V0Z' }, ur: 150 },
        { animation: { d: 'M0,0V313s447.77,67,959.5,67S1919,313,1919,313V0Z' }, ur: 105 },
        { animation: { d: 'M0,0V263s447.77,87,959.5,87S1919,263,1919,263V0Z' }, ur: 75 },
        { animation: { d: 'M0,0V323s447.77,27,959.5,27S1919,323,1919,323V0Z' }, ur: 75 }
    ]
});  
```

## Dependency

This wrapper requires the SNAP SVG library. Install it using npm:

```bash
npm install snapsvg 
```
