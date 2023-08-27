let num1 = 0, num2 = 0;
let operator = null;

function operate(num1, num2, operator){
     if(operator === '+'){
        return add(num1, num2);
     }
     else if(operator === '-'){
        return subtract(num1, num2);
     }
     else if(operator === '*'){
        return multiply(num1, num2);
     }
     else if(operator === '/'){
        return divide(num1, num2);
     }
     else if(operator === '%'){
        return precentage(num1);
     }
     else if(operator === '+/-'){
        return num1 * (-1);
     }
     else{
        return "ERROR!";
     }
}

function add(a, b){
    return parseFloat(a) + parseFloat(b);
}
function subtract(a, b){
    return parseFloat(a) - parseFloat(b);
}   
function multiply(a, b){
    return parseFloat(a) * parseFloat(b);
}
function divide(a, b){
    let result = parseFloat(a) / parseFloat(b);
    if (result % 1 === 0) {
        // If there's no remainder, return the number as is
        return result;
    } else {
        // If there's a remainder, round to 7 dcimals
        return result.toFixed(6);
    }
}

function precentage(a){
    return a/100;
}

function populateDisplay(){
    const display = document.querySelector('.displayContainer');
    const digits = document.querySelectorAll('.digits');
    const operators = document.querySelectorAll('.operator');
    const equals = document.querySelector('.equals');
    const changeSign = document.querySelector('.negativeToPositive');
    const clear = document.querySelector('.clear');
    let num1 = null, num2 = null, Operator = null;
    digits.forEach(digit => {
        digit.addEventListener('click', function() {
            if(num1 !== null && num2 !== null){
                num1 = display.textContent;
                num2 = null;
                display.textContent = null;
                display.textContent += digit.textContent;
            }
            else{
                display.textContent += digit.textContent;
            }
        });
    });
    operators.forEach(operator =>{
        operator.addEventListener('click', function(){
            if(operator.textContent === '%'){
                Operator = '%';
                num1 = display.textContent;
                display.textContent = operate(num1, num2, Operator);
                num1 = null;
                Operator = null;
            }
            else if(operator.textContent === "+/-"){
                Operator = "+/-";
                num1 = display.textContent;
                display.textContent = operate(num1, num2, Operator);
                num1 = null;
                Operator = null;
            }
            else if(num1 !== null && num2 === null){
                num2 = display.textContent;
                display.textContent = operate(num1, num2, Operator);
                Operator = operator.textContent;
            }
            else{
                num1 = display.textContent;
                num2 = null;
                display.textContent = null;
                Operator = operator.textContent;
            }
            
        });
    });
    equals.addEventListener('click', function(){
        if(num1 !== null){
            num2 = display.textContent;
            display.textContent = operate(num1, num2, Operator);
            num1 = display.textContent;
        }
    });
    clear.addEventListener('click', function(){
        display.textContent = null;
        num1 = null;
        num2 = null;
        Operator = null;
    })
    changeSign.addEventListener('click', function(){
        if(display.textContent === null){
            display.textContent = '-' + display.textContent;
        }
    })
}
// 1 Create precentage method
// 2 create sign change method 
// 3 find a way to make the coma work

populateDisplay();

