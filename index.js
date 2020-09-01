//function that will be called when button is clicked
function handleClick() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}

//to calculate total number of drum buttons
var drumButtons = document.querySelectorAll(".drum").length;

//for adding event listener to every drum button 
for(var i = 0; i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}