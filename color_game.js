//make a list of colors
var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 255, 255)", "rgb(0, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 255, 0)"];
console.log("connected");
var picked_color = colors[3];
var color_display = document.getElementById("colorDisplay");
var message_display = document.querySelector("#message");
color_display.textContent = picked_color;
//loop through the squares
var squares = document.querySelectorAll(".square");
for(var i = 0; i < squares.length; i++){
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        console.log("clicked square!");
        //grab the color of the picked square and compared it to the winning color
        //you can use this it refers to the items that was clicked on
        var clicked_color = this.style.backgroundColor;
        console.log(clicked_color);
        if (clicked_color === picked_color){
            console.log("correct!");
            message_display.textContent = "correct!";
        }else{
            console.log("incorrect");
            message_display.textContent = "try again!";
            this.style.backgroundColor = "black";
        }
    });
}