let firstNumber = 5
let secondNumber = 3
let currentOperator = ''
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
    button.addEventListener('click', () => newNumber(button.textContent))
);

opButtons.forEach((button) => 
    button.addEventListener('click', () => addOperation(button.textContent))
);

function clearEntry() {

}

//add its value to a variable
function newNumber(number) {
    let firstNumber = number
    calcDisplay.innerHTML += firstNumber + ' ';
}

function addOperation(operator) {
    calcDisplay.innerHTML += operator + ' ';
}
//if decimal is pressed add a "." to the current number but only once per number
//when equal is pressed calculate the result and display it
function calculate(operator, firstNumber, secondNumber) {
    switch(operator) {
        case '+':
            add(firstNumber, secondNumber);
        break;
        case '-':
            subtract(firstNumber, secondNumber);
        break;
        case '×':
            multiply(firstNumber, secondNumber);
        break;
        case '÷':
            divie(firstNumber, secondNumber);
        break;
        case '^':
            exponent(firstNumber, secondNumber);
        break;
    }
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber
}
function exponent(firstNumber, secondNumber) {
    return firstNumber ** secondNumber
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
console.log(add(firstNumber, secondNumber))
console.log(subtract(firstNumber, secondNumber))
console.log(multiply(firstNumber, secondNumber))
console.log(divide(firstNumber, secondNumber))
console.log(exponent(firstNumber, secondNumber))
