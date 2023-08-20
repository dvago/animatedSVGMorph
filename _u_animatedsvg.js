import Snap from "snapsvg";

class animatedSVG {
  constructor({
    el,
    steps = [0],
    attrs,
    initialPath,
    viewBox = "0 0 0 0",
    easing,
    beforeAnimationStart = () => {},
    onAnimationEnd = () => {}
  } = {}) {
    if (!el) {
      console.error("You need to specify a DOM element as entry.");
      return false;
    }

    this.el = el;
    this.options = {
      initialPath: initialPath || steps[0].animation.d,
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
      callback && callback();
      return false;
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
      1,
      this.options.onAnimationEnd
    );
  }
}

export default animatedSVG;
