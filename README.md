# Animated SVG Morph ES6 wrapper
ES6 wrapper for animated SVG path morph

## Usage

- init the class using ``` new animatedSVG(options)```
- options is an object who takes:
    - el: an HTML node element with an ID as attribute
    - attrs: the common attributes inside an SVG tag (example: fill, viewBox)
    - easing: a mina function from Snap SVG (http://snapsvg.io/docs/#mina)
    - steps: an array of animations with the relative duration in ms
    - onAnimationEnd: a function triggered at the end of your animation
    - beforeAnimationStart: a function who runs before the animation
    
## Usage sample

suppose animatedPanel is an HTML node element with an ID attribute like:

```
    <svg class="js-animated-panel" id="svgStage"></svg>
```

init the class who generates the SVG taking the first path inside steps property

```     
        
        new animatedSVG({
            el: animatedPanel.getAttribute('id'),
            attrs: {
                viewBox: '0 0 1920 382',
                fill: '#00ceae',
                preserveAspectRatio: 'xMinYMin slice'
            },
            easing: mina.linear, // easing
            steps: [
                { animation: { d: 'M0,0V4S447.77,71,959.5,71,1919,4,1919,4V0Z' }, dur: 0 }, // initial path
                { animation: { d: 'M0,0V13S447.77,260,959.5,260,1919,13,1919,13V0Z' }, dur: 75 },
                { animation: { d: 'M0,0V343s447.77,37,959.5,37S1919,343,1919,343V0Z' }, dur: 75 },
                { animation: { d: 'M0,0V363s447.77,17,959.5,17S1919,363,1919,363V0Z' }, dur: 105 },
                { animation: { d: 'M0,0V343s447.77,37,959.5,37S1919,343,1919,343V0Z' }, dur: 45 },
                { animation: { d: 'M0,0V193s447.77,67,959.5,67S1919,193,1919,193V0Z' }, dur: 150 },
                { animation: { d: 'M0,0V313s447.77,67,959.5,67S1919,313,1919,313V0Z' }, dur: 105 },
                { animation: { d: 'M0,0V263s447.77,87,959.5,87S1919,263,1919,263V0Z' }, dur: 75 },
                { animation: { d: 'M0,0V323s447.77,27,959.5,27S1919,323,1919,323V0Z' }, dur: 75 }
            ]
        });
        
```

## Dependency

- ***SNAP SVG*** library please follow the link for the NPM package installaton(https://www.npmjs.com/package/snapsvg)

#### note:

- SNAP won't work using the standard import in a **webpack environment** so you will have to install the ```imports-loader``` (https://www.npmjs.com/package/imports-loader) and inject into your **webpack configuration** inside the module loaders section the following test:

```
       {
               test: require.resolve('snapsvg'),
               loader: 'imports-loader?this=>window,fix=>module.exports=0'
       },
```

