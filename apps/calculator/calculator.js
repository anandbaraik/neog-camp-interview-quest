//Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const outputBox = document.querySelector("#output");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divisionBtn = document.querySelector("#division");

function showMessage(msg) {
    outputBox.innerHTML = msg;
}

function addition(num1, num2) {
    let result = num1 + num2;
    showMessage(`Addition of ${num1} & ${num2} is ${result}!!`);
}

function subtraction(num1, num2) {
    let result = num1 - num2;
    showMessage(`Subtraction of ${num1} & ${num2} is ${result}!!`);
}

function multiplication(num1, num2) {
    let result = num1 * num2;
    showMessage(`Multiplication of ${num1} & ${num2} is ${result}!!`);
}

function division(num1, num2) {
    let result = num1 / num2;
    showMessage(`Division of ${num1} & ${num2} is ${result.toFixed(2)}!!`);
}

addBtn.addEventListener('click', function(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    if(num1 && num2) {
        addition(num1, num2);
    } else {
        showMessage(`Number 1 & Number 2 both fields are required. & should be greater than 0`);
    }
});
subtractBtn.addEventListener('click', function(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    if(num1 && num2) {
        subtraction(num1, num2);
    } else {
        showMessage(`Number 1 & Number 2 both fields are required. & should be greater than 0`);
    }
});
multiplyBtn.addEventListener('click', function(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    if(num1 && num2) {
        multiplication(num1, num2);
    } else {
        showMessage(`Number 1 & Number 2 both fields are required. & should be greater than 0`);
    }
});
divisionBtn.addEventListener('click', function(){
    let num1 = parseFloat(number1.value);
    let num2 = parseFloat(number2.value);
    if(num1 && num2) {
        division(num1, num2);
    } else {
        showMessage(`Number 1 & Number 2 both fields are required. & should be greater than 0`);
    }
});