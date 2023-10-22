const clearDisplay = document.getElementById('clear-all');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const numButtons = document.querySelectorAll('[number]');
const opButtons = document.querySelectorAll('[operator]');
const calcDisplay = document.getElementById('calculation');
const resultDisplay = document.getElementById('result');
console.log(numButtons);
console.log(opButtons);
//when a button is pressed
clearDisplay.addEventListener('click', clearAll);
clear.addEventListener('click', clearEntry);
equal.addEventListener('click', calculate);

numButtons.forEach((button) =>
    button.addEventListener('click', () => addNumber(button.textContent))
);

opButtons.forEach((button) =>
    button.addEventListener('click', addOperation(button.textContent))
);

function clearEntry() {

}

//add its value to a variable
function addNumber(newNumber) {
    calcDisplay.innerHTML += newNumber;
}

function addOperation() {

}
//display it to the display window
//if decimal is pressed add a "." to the current number but only once per number
//when equal is pressed calculate the result and display it
function calculate() {
    
}
//when an operation button is pressed display the result of the previous pair of numbers and use the result for the next input
//if all clear is pressed clear the display
function clearAll() {
    calcDisplay.innerHTML = '';
    resultDisplay.innerHTML = '';
}
//if clear is pressed delete the previously added input only
function clearEntry() {

}