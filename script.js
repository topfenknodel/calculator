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

const btn = document.createElement('p');
btn.textContent = "";


function populateDisplay (bt) {
    const display = document.querySelector('#display');
    btn.textContent += bt;
    display.appendChild(btn);
}

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
