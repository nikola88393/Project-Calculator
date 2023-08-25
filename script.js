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
    return parseInt(a) / parseInt(b);
}

