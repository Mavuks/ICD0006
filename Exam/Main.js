
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  
}
setInterval(
  function setRandomColor() {
   // $("#colorpad").css("background-color", getRandomColor());
    $("#colorpad1").css("background-color", getRandomColor());
   // $("#colorpad2").css("background-color", getRandomColor());
    $("#colorpad3").css("background-color", getRandomColor());
  //  $("#colorpad4").css("background-color", getRandomColor());
    $("#colorpad5").css("background-color", getRandomColor());
  //  $("#colorpad6").css("background-color", getRandomColor());
    $("#colorpad7").css("background-color", getRandomColor());
  //  $("#colorpad8").css("background-color", getRandomColor());
   
  },1000)

  setInterval(
    function setRandomColor1() {
      $("#colorpad").css("background-color", getRandomColor());
     
      $("#colorpad2").css("background-color", getRandomColor());
    
      $("#colorpad4").css("background-color", getRandomColor());
     
      $("#colorpad6").css("background-color", getRandomColor());
      
      $("#colorpad8").css("background-color", getRandomColor());
     
    },2000)