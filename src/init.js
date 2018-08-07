$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // debugger;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $("body").height()/2 * Math.random()+$("body").height()/2,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    dancer.$node.hover(function() {
      var styleSettings = {
        border: '20px solid red',
        borderRadius: '20px',
      }
      dancer.$node.css(styleSettings);
      
    })
    $('body').append(dancer.$node);

  });

  $('.lineUpButton').click( function(event) {
    // debugger;
    for(var i = 0; i < window.dancers.length; i++){
      

      var styleSettings = {
        top: 200,
        left: 300+i*100
      };

      window.dancers[i].$node.css(styleSettings);
    }
    console.log(window.dancers);
  });

});

