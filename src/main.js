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

$(document).ready(function(){
  $(document).on('keydown', function(event){

    console.log("moving");

    move[event.keyCode]();

    a = $(".box").position();
    console.log(a);

  });
});
