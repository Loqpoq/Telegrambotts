window.onload = function () {
  var myName = "Tenzin.";
  var letterColors = [blue, orange, red, white];
  bubbleShape = "square";
  
  var canvas = document.getElementById('myCanvas');
  canvas.width  = 150;
  canvas.height = 150;
  canvas.style.width  = '550px';
  canvas.style.height = '200px';
  canvas.style.padding = "0px";
  canvas.style.position = "absolute";


  document.getElementsByClassName('tlt')[0].appendChild(canvas);;

  drawName(myName, letterColors);

  bounceName();

}