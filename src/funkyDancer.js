var makeFunkyDancer = class makeFunkyDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<img id="funky" class="dancer" src="https://zippy.gfycat.com/AridDrearyAquaticleech.gif"></img>');
  }

  step() {
    super.step();
  }
}