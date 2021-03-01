function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(c, d) {
    return c - d;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if ( x == 0 && y != 0) {
        return x / y;
    }
    else if (y == 0) {
        return "nope";
    }
    else {
        return x / y;
    }
}

const operate = function (operator, num1, num2) {
    let result = 0;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "−":
            result = subtract(num1, num2);
            break;
        case "×":
            result = multiply(num1, num2);
            break;
        case "÷":
            result = divide(num1, num2);            
    }   
    if (result === "nope") {
        return result;
    }
    else {
        return Math.round(result * 100) / 100;
    }
      
}

let dec = false,
    tenths = false;

function populateDisplay (bt) {
    const display = document.querySelector('#display');
    btn.textContent += bt;
    display.appendChild(btn);
    
    if (bt == '+' || bt == '−' || bt == '×' || bt == '÷') {
        if (operator != "") {
            num1 = operate(operator, num1, num2);
            operator = bt;
            num2 = "";
            btn.textContent = num1 + operator;
        }
        else {
            operator = bt;
        }
        dec = false;
        btDecimal.disabled = false;
        tenths = false;
    }
    else if (bt == '.') {       
        dec = true;   
        btDecimal.disabled = true; 
    }
    else {
        if (dec) {
            if (!operator) {
                if (!tenths){
                    num1 = Number(`${num1}.${bt}`);
                    tenths = true;
                }
                else {
                    num1 = Number(`${num1}${bt}`);
                }    
            }
            else {
                if (!tenths){
                    num2 = Number(`${num2}.${bt}`);
                    tenths = true;
                }
                else {
                    num2 = Number(`${num2}${bt}`);
                }
            }
        }
        else {
            if (num1 && operator) {
                num2 += Number(bt);
            }
            else {
                num1 += Number(bt); 
            }
        }
    }
}

function clearDisplay () {
    btn.textContent = "";
    display.appendChild(btn);
    operator = "";
    num1 = "";
    num2 = "";
    dec = false;
    tenths = false;
    btDecimal.disabled = false;
}

function showSolution () {
    let result = operate(operator, num1, num2);
    btn.textContent = result;
    display.appendChild(btn);
    num1 = result;
    num2 = "";
    operator = "";
    //dec = false;
    let str = num1.toString();
    if (str.includes(".")) {
        btDecimal.disabled = true;
        tenths = true;
    }
    else {
        btDecimal.disabled = false;
        tenths = false;
    }
}

let operator = "",
    num1 = "",
    num2 = "";

const display = document.querySelector('#display');

const btn = document.createElement('p');
btn.textContent = "";

const bt0 = document.querySelector('#zero');
bt0.onclick = () => populateDisplay('0');

const bt1 = document.querySelector('#one');
bt1.onclick = () => populateDisplay('1');

const bt2 = document.querySelector('#two');
bt2.onclick = () => populateDisplay('2');

const bt3 = document.querySelector('#three');
bt3.onclick = () => populateDisplay('3');

const bt4 = document.querySelector('#four');
bt4.onclick = () => populateDisplay('4');

const bt5 = document.querySelector('#five');
bt5.onclick = () => populateDisplay('5');

const bt6 = document.querySelector('#six');
bt6.onclick = () => populateDisplay('6');

const bt7 = document.querySelector('#seven');
bt7.onclick = () => populateDisplay('7');

const bt8 = document.querySelector('#eight');
bt8.onclick = () => populateDisplay('8');

const bt9 = document.querySelector('#nine');
bt9.onclick = () => populateDisplay('9');

const btAdd = document.querySelector('#add');
btAdd.onclick = () => populateDisplay('+');

const btSub = document.querySelector('#subtract');
btSub.onclick = () => populateDisplay('−');

const btMul = document.querySelector('#multiply');
btMul.onclick = () => populateDisplay('×');

const btDiv = document.querySelector('#divide');
btDiv.onclick = () => populateDisplay('÷');

const btClear = document.querySelector('#clear');
btClear.onclick = () => clearDisplay();

const btEquals = document.querySelector('#equals');
btEquals.onclick = () => showSolution();

const btDecimal = document.querySelector('#decimal');
btDecimal.onclick = () => populateDisplay('.'); 