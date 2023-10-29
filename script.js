let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let result = '';
secondOperator = '';
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
    //if an op exists fill the next section as teh second number
    if (currentOperator != '') {
    sectionThree.innerHTML += number;
    secondNumber = sectionThree.innerHTML;
    } else {
    sectionOne.innerHTML += number;
    firstNumber = sectionOne.innerHTML;
    }
}

function addOperation(operator) {
    //if equation is filled out calculate it and save the op used for the next equation
    if (currentOperator != '' && firstNumber != '' && secondNumber != '') {
    secondOperator = operator;
    nextOperation();
    }
    if (currentOperator != '') return; //prevents more ops from being added if one exists
    sectionTwo.innerHTML += ' ' + operator + ' ';
    currentOperator = operator;
}
//if decimal is pressed add a "." to the current number but only once per number
//when equal is pressed calculate the result and display it
function evaluate() {
    resultDisplay.innerHTML = calculate(firstNumber, currentOperator, secondNumber);
}

function nextOperation() {
    resultDisplay.innerHTML = calculate(firstNumber, currentOperator, secondNumber)
    //partially reset display to only show the resultand op clicked as the first number of a new equation
    firstNumber = result;
    currentOperator = secondOperator;
    secondNumber = '';
    sectionOne.innerHTML = firstNumber;
    sectionTwo.innerHTML = ''
    sectionThree.innerHTML = ''
 
    sectionTwo.innerHTML = ' ' + currentOperator + ' ';

    

}

function calculate( firstNumber, currentOperator, secondNumber) {
    switch (currentOperator) {
        case '+':
           return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '×':
            return multiply(firstNumber, secondNumber);
        case '÷':
            return divide(firstNumber, secondNumber);
        case '^':
            return exponent(firstNumber, secondNumber);
    }
}

function add(firstNumber, secondNumber) {
    //convert number to integer in case + would concatenate
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    console.log(typeof(firstNumber))
    result = firstNumber + secondNumber;
    return result;
}
function subtract(firstNumber, secondNumber) {
    result = firstNumber - secondNumber;
    return result;
}
function multiply(firstNumber, secondNumber) {
    result = firstNumber * secondNumber;
    return result;
}
function divide(firstNumber, secondNumber) {
    if (secondNumber == 0) return result = 'Dude! No dividing by 0';
    result = firstNumber / secondNumber;
    return result;
}
function exponent(firstNumber, secondNumber) {
    result = firstNumber ** secondNumber;
    return result;
}
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
