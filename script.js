function add(a, b) {
    return a + b;
}

function subtract(c, d) {
    return c - d;
}

function multiply(x, y) {
    return x * y;
}

function divide(x ,y) {
    return x / y;
}

const operate = function (operator, num1, num2) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);            
    }   
    return result;  
}