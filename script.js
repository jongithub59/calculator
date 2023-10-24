let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
const clearDisplay = document.getElementById('clear-all');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const numButtons = document.querySelectorAll('[number]');
const opButtons = document.querySelectorAll('[operator]');
const sectionOne = document.getElementById('first-number')
const sectionTwo = document.getElementById('operator')
const sectionThree = document.getElementById('second-number');
const resultDisplay = document.getElementById('result');
//when a button is pressed
clearDisplay.addEventListener('click', clearAll);
clear.addEventListener('click', clearEntry);
equal.addEventListener('click', evaluate);


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
    if (currentOperator != '') {
    sectionThree.innerHTML += number;
    secondNumber = sectionThree.innerHTML;
    console.log(secondNumber);
    } else {
    sectionOne.innerHTML += number;
    firstNumber = sectionOne.innerHTML;
    console.log(firstNumber);
    }
}

function addOperation(operator) {
    if (currentOperator != '') return;
    sectionTwo.innerHTML += ' ' + operator + ' ';
    currentOperator = operator;
    console.log(currentOperator);
}
//if decimal is pressed add a "." to the current number but only once per number
//when equal is pressed calculate the result and display it
function evaluate() {
    resultDisplay.innerHTML = calculate(firstNumber, currentOperator, secondNumber);
}

function calculate( firstNumber, currentOperator, secondNumber) {
    switch (currentOperator) {
        case '+':
           return add(firstNumber, secondNumber);
        break;
        case '-':
            return subtract(firstNumber, secondNumber);
        break;
        case '×':
            console.log('working')
            console.log(firstNumber)
            console.log(secondNumber)
            return multiply(firstNumber, secondNumber);
        break;
        case '÷':
            return divide(firstNumber, secondNumber);
        break;
        case '^':
            return exponent(firstNumber, secondNumber);
        break;
    }
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
function exponent(firstNumber, secondNumber) {
    return firstNumber ** secondNumber;
}
//when an operation button is pressed display the result of the previous pair of numbers and use the result for the next input
//if all clear is pressed clear the display
function clearAll() {
    sectionOne.innerHTML = ''
    sectionTwo.innerHTML = ''
    sectionThree.innerHTML = ''
    resultDisplay.innerHTML = '';
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
}
//if clear is pressed delete the previously added input only
function clearEntry() {

}
