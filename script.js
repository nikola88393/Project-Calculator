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
     else{
        return "Invalid operator";
     }
}

function add(a, b){
    return parseInt(a) + parseInt(b);
}
function subtract(a, b){
    return parseInt(a) - parseInt(b);
}   
function multiply(a, b){
    return parseInt(a) * parseInt(b);
}
function divide(a, b){
    let x = parseInt(a) / parseInt(b);
    return x.toPrecision(7);
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
            if(num1 !== null){
                display.textContent = null;
            }
            display.textContent += digit.textContent;
        });
    });
    operators.forEach(operator =>{
        operator.addEventListener('click', function(){
            if(num1 !== null && num2 === null){
                num2 = display.textContent;
                display.textContent = operate(num1, num2, Operator);
                num1 = display.textContent;
                num2 = null;
                Operator = operator.textContent;
            }
            else{
                num1 = display.textContent;
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

