var makeBeboyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img  src="https://files.gamebanana.com/img/ico/sprays/547b7a894bcc7.gif" height="85.35"  width="42.3"></img>');
  makeDancer.call(this,top,left,timeBetweenSteps);
};


makeBeboyDancer.prototype = Object.create(makeDancer.prototype);
makeBeboyDancer.prototype.oldStep = makeDancer.prototype.step;

makeBeboyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
    this.$node.animate({right:'250px'});
};
makeBeboyDancer.prototype.constructor = makeBeboyDancer;




////////////////////////////////////////////////////////


// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };
