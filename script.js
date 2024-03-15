
// calculator functions

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;

    }

}
// make the buttons work
let calcDisplay = document.querySelector('.calc-display')
let calcDisplayValue = calcDisplay.textContent



let numBtns = document.querySelectorAll('.num-btn')
numBtns.forEach((numBtn) => numBtn.addEventListener('click', () => {
    calcDisplay.textContent += numBtn.id
}))

let operatorBtn = document.querySelector('.operator-btn')
operatorBtn.addEventListener('click', () => {
    calcDisplay.textContent += operatorBtn.id
})

let equalBtn = document.querySelector('.equal-btn')
equalBtn.addEventListener('click', () => {

})

let clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = 0
})