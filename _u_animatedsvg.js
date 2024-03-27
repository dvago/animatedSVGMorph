import Snap from "snapsvg";

class AnimatedSVG {
  constructor({
    el,
    steps = [],
    attrs,
    initialPath,
    viewBox = "0 0 0 0",
    easing,
    beforeAnimationStart = () => {},
    onAnimationEnd = () => {}
  } = {}) {
    if (!el) {
      console.error("You need to specify a DOM element as entry.");
      return;
    }

    this.el = el;
    this.options = {
      initialPath: initialPath || (steps[0] && steps[0].animation.d),
      viewBox,
      steps,
      attrs,
      easing,
      beforeAnimationStart,
      onAnimationEnd
    };

    this.initialize();
  }

  initialize() {
    this.createSnap();
    this.attachEvents();
  }

  createSnap() {
    this.snap = Snap(this.el);
    this.snap.attr(this.options.attrs);

    this.path = this.snap.path(this.options.initialPath);
  }

  animation(el, steps, easing, frame, callback) {
    if (frame >= steps.length) {
      if (callback) callback();
      return;
    }

    el.animate(steps[frame].animation, steps[frame].dur, easing, () => {
      this.animation(el, steps, easing, frame + 1, callback);
    });
  }

  attachEvents() {
    this.options.beforeAnimationStart();
    this.animation(
      this.path,
      this.options.steps,
      this.options.easing,
      0,
      this.options.onAnimationEnd
    );
  }
}

export default AnimatedSVG;
