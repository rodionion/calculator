const display = document.getElementById("display");

const buttons = document.getElementsByClassName("button");

Array.from(buttons).forEach((item) => item.addEventListener("click", processButtonClick));

function processButtonClick() {
    displayClickedButton(this);
    changeStyleOfClickedButton(this);
}


button1.addEventListener("click", displayClickedButton);

// Display Clicked Button

function displayClickedButton(item) {
    display.innerHTML += item.innerHTML;
}

// Change Style Of Clicked Button

function changeStyleOfClickedButton(item) {
    item.classList.add("button-clicked");
    
}