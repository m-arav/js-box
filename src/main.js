var move = {
  37: function() {
        //left arrow key
        $(".box").css({
          left: "-=30"
        });
      },
  38: function() {
        //up arrow key
        $(".box").css({
          top: "-=30"
        });
      },
  39: function() {
        //right arrow key
        $(".box").css({
          left: "+=30"
        });
      },
  40: function() {
        //bottom arrow key
        $(".box").css({
          top: "+=30"
        });
      }
}

function validateMove(event, viewPortHight, viewPortWidth, currentPosition) {

  var direction = event.keyCode;

  console.log(direction ,viewPortWidth , viewPortHight, currentPosition);

  switch (direction){
    case 38: // UP

          if ( currentPosition.top - 30 > 0){
              return true;
          }
          return false;
  case 40: // down

        if ((viewPortHight-100) > currentPosition.top + 30){
          //console.log('Hieght :'+viewPortHight+ 'against '+ currentPosition.top);
          return true;
        }
        return false;
  case 37: // left
          if ( currentPosition.left - 30 > 10){
                return true;
          }
          return false;

  case 39: // right
          if ((viewPortWidth-100) > currentPosition.left + 30){
                return true;
          }
          return false;
  }
}

$(document).ready(function(){
  $(document).on('keydown', function(event){

    var viewPortHight = $('.container').height();
    var viewPortWidth = $('.container').width();
    var currentPosition = $(".box").position();

    event.preventDefault();

    if(validateMove(event, viewPortHight, viewPortWidth, currentPosition)){
      move[event.keyCode]();
    }

  });
});
