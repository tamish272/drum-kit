/* Detecting button press */

function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

var drumButtons = document.querySelectorAll(".drum").length;
 
for(var i = 0; i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

/* Detecting keyboard press */ 

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {

    switch (key) {

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "r":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "u":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "m":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "i":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "t":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
    
        default: console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}