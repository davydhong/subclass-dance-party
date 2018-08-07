var makeDancer = class makeDancer {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = $('<span class="dancer"></span>');
    this.step();
    this.setPosition();
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition() {
    var styleSettings = {
      top: this.top,
      left: this.left
    }
    this.$node.css(styleSettings);
  }
  lineUp() {
    this.$node.css('top', '50%');
  }
}