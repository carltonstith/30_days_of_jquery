$(document).ready(function(){
  
  //if the button is clicked, I want to randomly open one of the doors.
  
  $("#button").click(function(){
    var $doors = $(".door");
    
    for(var i = 0; i < $doors.length; i++){
     if($($doors[i]).hasClass('open')){
        $($doors[i]).slideToggle(100);
        $($doors[i]).removeClass('open');
      }
    }
    
    setTimeout(function () {
      var random = Math.floor((Math.random() * 3) + 1);
    
      $("#door-" + random).slideToggle(100).addClass('open');
    }, 500);
    
  });
  
});