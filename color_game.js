//make a list of colors
var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 255, 255)", "rgb(0, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 255, 0)"];
console.log("connected");
//create a function that will pick a random color and assign it to be picked color
var picked_color = randomColor();
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
            //call the change color of squares function
            change_colors(picked_color);
        }else{
            console.log("incorrect");
            message_display.textContent = "try again!";
            this.style.backgroundColor = "black";
        }
    });
}
//create a function to change the colors of all squares given a string color
function change_colors(color){
    //loop through the squares and change it to the color of the winning color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }

}
//function to pick a random color
function randomColor(){
    //get a random nunmber between the length of colors array, it can not be just straight 3 or 6 because the length is changed depending on the difficulty of the game
    var random = Math.floor(Math.random() * colors.length);
    //return the array with the random index
    return colors[random]; 
}