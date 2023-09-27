/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
function add(number1, number2){
    return number1 + number2;
}
function subtract(number1, number2){
    return number1 - number2;
}
const multiply = (number1, number2) => {
    return number1 * number2;
}
function divide(number1, number2){
    return number1 / number2;
}
/* Function Definition - Add Numbers */
function addNumbers(){
    const addNumber1 = Number(document.querySelector("#add1").value);
    const addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
    }
    document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtractNumbers(){
    const subtractNumber1 = Number(document.querySelector("#subtract1").value);
    const subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1,subtractNumber2);
    }
    document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiplyNumbers = () => {
    const multiplyNumber1 = Number(document.querySelector("#factor1").value);
    const multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}
    document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divideNumbers(){
    const divideNumber1 = Number(document.querySelector("#dividend").value);
    const divideNumber2= Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
    }
    document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const yearElement = document.querySelector('#year');
yearElement.textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML  = numbersArray;
/* Output Odds Only Array */
let oddnumbersArray = numbersArray.filter(number => number % 2 === 1);
document.querySelector("#odds").innerHTML  = oddnumbersArray;
/* Output Evens Only Array */
let evennumbersArray = numbersArray.filter(number => number %2 === 0);
document.querySelector("#evens").innerHTML = evennumbersArray;

/* Output Sum of Org. Array */
let sumofArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector("#sumOfArray").innerHTML = sumofArray;
/* Output Multiplied by 2 Array */
let multiplyArray = numbersArray.map((number) => number * 2);
document.querySelector("#multiplied").innerHTML = multiplyArray;

/* Output Sum of Multiplied by 2 Array */
let sumofMultiplied = multiplyArray.reduce((sum, number) => sum + number);
document.querySelector("#sumOfMultiplied").innerHTML = sumofMultiplied;