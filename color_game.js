//make a list of colors
// var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(255, 255, 255)", "rgb(0, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 255, 0)"];d
var colors = generate_random_colors(6);
console.log("connected");
//create a function that will pick a random color and assign it to be picked color
var picked_color = randomColor();
var color_display = document.getElementById("colorDisplay");
var message_display = document.querySelector("#message");
var h1 = document.querySelector("h1");
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
            h1.style.backgroundColor = picked_color;
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
//create a function that generates the random number colors for the array
//the function will receive a number that represents difficulty of the game
function generate_random_colors(num){
    var arr = [];
    for(var i = 0; i < num; i++){

        //get random numbers and push them into the array 
        //going to use another function
        //push the random rgb into the array
        arr[i] = make_random_color();
    }
    return arr;

}
//function that will get the random number for the color
function make_random_color(){
    //pick a red blue and yellow from 0 - 255
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    //now we going to return the random numbers as a string representing rgb
    var rgb = "rgb("+red+", "+green+", "+blue+")";
    return rgb;

}
//add an event listener to the buttons 
var newcolor_button = document.querySelector("#newcolor").addEventListener("click", function(){
    //if they press it you should reset the colors and the picked color
    //so call the reset board function
    reset_board();
})
//function reset the board will reset the game and all of its colors
function reset_board(){
    //return h1 back to default color
    h1.style.backgroundColor = "black";
    //generate new colors and use a for loop to update the new colors again
    colors = generate_random_colors(6);
    for(var i = 0; i < squares.length; i++){
        //add colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
    //pick a new winning color and update h1
    picked_color = randomColor();
    color_display.textContent = picked_color;


}