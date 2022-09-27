//Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.
const output = document.querySelector("#output");
const textArea = document.querySelector("#text");
const increaseBtn = document.querySelector("#increase-font");
const decreaseBtn = document.querySelector("#decrease-font");

textArea.addEventListener('input', function(){
    output.innerText = textArea.value;
});

let currentFontSize, newFontSize;
function decreaseFont() {
    currentFontSize = parseFloat(window.getComputedStyle(output).getPropertyValue('font-size'));
    newFontSize = currentFontSize - 2;
    output.style.fontSize = `${newFontSize}px`;
}

function increaseFont() {
    currentFontSize = parseFloat(window.getComputedStyle(output).getPropertyValue('font-size'));
    newFontSize = currentFontSize + 2;
    output.style.fontSize = `${newFontSize}px`;
}
increaseBtn.addEventListener('click', increaseFont);
decreaseBtn.addEventListener('click', decreaseFont);


/*
getComputedStyle(element, pseudoElt): returns an object containing the values of all css properties of an element.

getPropertyValue(property) : returns a string containg the value of specified css property.
*/ 