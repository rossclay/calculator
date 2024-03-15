
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
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '÷':
            return divide(a, b);
            break;

    }

}
// make the buttons work
let calcDisplay = document.querySelector('.calc-display')
let calcDisplayValue = calcDisplay.textContent
let calcDisplayA = ''
let calcDisplayB = ''
let calcOperator = ''
let calcDecimal = ''

let numBtns = document.querySelectorAll('.num-btn')
numBtns.forEach((numBtn) => numBtn.addEventListener('click', () => {
    if (calcOperator === '') {
        calcDisplayA += numBtn.id
        calcDisplay.textContent = calcDisplayA
    }
    else {
        calcDisplay
        calcDisplayB += numBtn.id
        calcDisplay.textContent = calcDisplayB
    }
}))
// under construction
let operatorBtn = document.querySelector('.operator-btn')
operatorBtn.addEventListener('click', () => {
    if (calcOperator === '') {
        calcOperator += operatorBtn.id
    }
    else {
        operate(calcDisplayA, calcDisplayB, calcOperator)
    }
})
// under construction
let equalBtn = document.querySelector('.equal-btn')
equalBtn.addEventListener('click', () => {
    operate(calcDisplayA, calcDisplayB, calcOperator)

})
// under construction
let deleteBtn = document.querySelector('.delete-btn')
deleteBtn.addEventListener('click', () => {

    calcDisplayValue = calcDisplay.textContent.substring(0, calcDisplayValue.length - 1)
    calcDisplay.textContent = calcDisplayValue

})

let clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = 0
    calcDisplayValue = 0
    calcDisplayA = 0
    calcDisplayB = 0
})

// under construction
let decimalBtn = document.querySelector('.decimal-btn')
decimalBtn.addEventListener('click', () => {
    if (calcDecimal === '') {
        calcDecimal += decimalBtn.id
        calcDisplayA += decimalBtn.id
        calcDisplay.textContent += decimalBtn.id
    }
})