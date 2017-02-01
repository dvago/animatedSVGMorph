import Snap from 'snapsvg';

class animatedSVG {

    constructor(options) {

        if(!options.el) {
            return false; // you need to specify an el entry
        }

        this.el = options.el;

        this.defaults = {
                initialPath: options.steps[0].animation.d,
                viewBox: '0 0 0 0',
                steps: [],
                beforeAnimationStart: () => {},
                onAnimationEnd: () => {}
        };

        this.options = Object.assign(this.defaults, options);

        this.initialize();
    }

    initialize() {
        this.createSnap();
        this.attachEvents();
    }

    createSnap() {
        this.snap = Snap(`#${this.el}`);
        this.snap.attr(this.options.attrs);

        this.path = this.snap.path(this.options.initialPath);
    }

    animation(el, steps, easing, frame, callback) {

        if(frame >= steps.length) {

            if(callback) {
                callback();
            }

            return false;
        }

        el.animate(
            steps[frame].animation,
            steps[frame].dur,
            easing,
            () => { this.animation(el, steps, easing, frame + 1, callback); }
        );

    }

    attachEvents() {

        Promise.resolve()
            .then( () => {
            this.options.beforeAnimationStart();
            })
            .then( () => {
                    this.animation(this.path, this.options.steps, this.options.easing, 1, this.options.onAnimationEnd);
            });

    }

}


export default animatedSVG;
