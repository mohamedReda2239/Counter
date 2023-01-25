// getting screen in variables
let screen = document.querySelector(".screen");
let screenValue = 0;

// changing color function 

let colorChange = function (screenValue) {

    if (screenValue > 0) {
        screen.style.color = "green";
    } else if (screenValue < 0) {
        screen.style.color = "red";
    } else if (screenValue === 0) {
        screen.style.color = "var(--main-color)";
    }

}

// decrease button
let decreaseButton = document.querySelector("#decrease")

decreaseButton.addEventListener("click" , function() {
    screenValue = screenValue - 1;
    // change color
    colorChange(screenValue);
    // displaying result
    screen.textContent = screenValue; 
});

// increase button 
let increaseButton = document.querySelector("#increase") 

increaseButton.addEventListener("click" , function() {
    screenValue = screenValue + 1;
    // change color
    colorChange(screenValue);
    // displaying result
    screen.textContent = screenValue;
});

// reset button 
let reserButton = document.querySelector("#reset")

reserButton.addEventListener("click" , function() {
    screenValue = 0;
    // change color
    colorChange(screenValue);
    // displaying result
    screen.textContent = screenValue;
});

