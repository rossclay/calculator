
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

let calcDisplay = document.querySelector('.calc-display')
// before an operator is chosen
let calcDisplayA = ''
// after an operator has been chosen
let calcDisplayB = ''
// has an operator been chosen?
let calcOperator = ''
// is there a decimal? 
let calcDecimal = ''

function operateCalculator() {
    calcDisplay.textContent = operate(parseFloat(calcDisplayA), parseFloat(calcDisplayB), calcOperator)
    calcDisplayA = calcDisplay.textContent
    calcDisplayB = ''
    calcOperator = ''
}

let numBtns = document.querySelectorAll('.num-btn')
numBtns.forEach((numBtn) => numBtn.addEventListener('click', () => {
    if (calcOperator === '') {
        calcDisplayA += numBtn.id
        calcDisplay.textContent = calcDisplayA
    }
    // once an operator has been chosen, now we want to observe the second number
    else {
        calcDisplayB += numBtn.id
        calcDisplay.textContent = calcDisplayB
    }
}))
// under construction
let operatorBtns = document.querySelectorAll('.operator-btn')
operatorBtns.forEach((operatorBtn) => operatorBtn.addEventListener('click', () => {
    if (calcOperator === '') {
        calcOperator = operatorBtn.id
    }
    else {
        operateCalculator()
    }
}))
// under construction
let equalBtn = document.querySelector('.equal-btn')
equalBtn.addEventListener('click', () => {
    if (calcOperator != '') {
        operateCalculator()
    }
})
// REALLY under construction
let deleteBtn = document.querySelector('.delete-btn')
deleteBtn.addEventListener('click', () => {
    let calcDisplayValue = calcDisplay.textContent
    calcDisplay.textContent.substring(0, calcDisplayValue.length - 1)


})

let clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = 0
    calcDisplayA = ''
    calcDisplayB = ''
    calcDecimal = ''
    calcOperator = ''
})

// under construction
let decimalBtn = document.querySelector('.decimal-btn')
decimalBtn.addEventListener('click', () => {
    if (calcDecimal === '') {
        calcDecimal += decimalBtn.id
        if (calcOperator = '') {
            calcDisplayA += decimalBtn.id
            calcDisplay.textContent = calcDisplayA
        }
        else {
            calcDisplayB += decimalBtn.id
            calcDisplay.textContent = calcDisplayB

        }
    }
})