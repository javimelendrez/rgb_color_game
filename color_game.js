//make a list of colors
var colors = ["rgb(255,0,0)", "rgb(255,255,0)", "rgb(255,255,255)", "rgb(0,0,255)", "rgb(0,255,255)", "rgb(0,255,0)"];
console.log("connected");
//loop through the squares
var squares = document.querySelectorAll(".square");
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}