
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
    if (b === 0) {
        return 'undefined'
    }
    else {
        return a / b
    }
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
// calculator's screen
let calcDisplay = document.querySelector('.calc-display')
// before an operator is chosen
let calcOperandA = ''
// after an operator has been chosen
let calcOperandB = ''
// has an operator been chosen?
let calcOperator = ''
// is there a decimal in the first number? 
let calcDecimalA = ''
// is there a decimal in the second number?
let calcDecimalB = ''

function operateCalculator() {
    calcOperandA = operate(parseFloat(calcOperandA), parseFloat(calcOperandB), calcOperator)
    if (calcOperandA === 'undefined') {
        calcDisplay.textContent = calcOperandA
        calcOperandA = ''
        calcOperandB = ''
    } else if (calcOperandA) {
        calcDisplay.textContent = Number(calcOperandA.toFixed(4))
        calcOperandB = ''
    }
    else if (calcDisplay.textContent.includes('.')) {
        calcDecimalA = '.'
    }
    else {
        calcDecimalA = ''
    }
    calcDecimalB = ''
    calcOperator = ''
    operatorBtns.forEach((operatorBtn) => operatorBtn.setAttribute('style', 'background-color: lightgray'))
}
let numBtns = document.querySelectorAll('.num-btn')
numBtns.forEach((numBtn) => numBtn.addEventListener('click', () => {
    // before an operator has been chosen
    if (calcOperator === '') {
        calcOperandA += numBtn.id
        calcDisplay.textContent = calcOperandA
    }
    // after an operator has been chosen
    else {
        calcOperandB += numBtn.id
        calcDisplay.textContent = calcOperandB
    }
}))

let operatorBtns = document.querySelectorAll('.operator-btn')
operatorBtns.forEach((operatorBtn) => operatorBtn.addEventListener('click', () => {

    if (calcOperator === '') {
        calcOperator = operatorBtn.id
        operatorBtn.setAttribute('style', 'background-color: #8D8D91')
    }
    else {
        operateCalculator()
        calcOperator = operatorBtn.id
        operatorBtn.setAttribute('style', 'background-color: #8D8D91')
    }
}))

let equalBtn = document.querySelector('.equal-btn')
equalBtn.addEventListener('click', () => {
    if (calcOperator != '') {
        operateCalculator()
    }
})

let deleteBtn = document.querySelector('.delete-btn')
// EDITOR'S NOTE TO SELF: The delete button is a mess. Let's take another look and see if we can clean this up.
// KNOWN ISSUES: Does not work as intended with the decimal button
// POTENTIAL FIXES: Let's simplify this. See below 
// Check: Are we modifying an Operand? If so, which one?
// If not, are we modifying an Operator?
// If not, are we modifying a decimal? If so, which one?
deleteBtn.addEventListener('click', () => {
    // This will work when we want to alter calcOperandA
    if (calcOperator === '' && calcDisplay.textContent != '0') {
        if (calcOperandA.length - 1 != 0) {
            calcOperandA = calcOperandA.substring(0, calcOperandA.length - 1)
            calcDisplay.textContent = calcOperandA
        } else {
            calcOperandA = 0
            calcDisplay.textContent = calcOperandA
        }
    }
    else if (calcOperator && calcOperandB === '') {
        calcOperator = ''
        operatorBtns.forEach((operatorBtn) => operatorBtn.setAttribute('style', 'background-color: lightgray'))
    }
    else if (calcOperator && calcOperandB) {
        if (calcOperandB.length - 1 != 0) {
            calcOperandB = calcOperandB.substring(0, calcOperandB.length - 1)
            calcDisplay.textContent = calcOperandB
        } else {
            calcOperandB = 0
            calcDisplay.textContent = calcOperandB
        }
    }
    else if (calcDisplay.textContent === '0') {
        // DO NOTHING
    }
})

let clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = 0
    calcOperandA = ''
    calcOperandB = ''
    calcDecimalA = ''
    calcDecimalB = ''
    calcOperator = ''
    operatorBtns.forEach((operatorBtn) => operatorBtn.setAttribute('style', 'background-color: lightgray'))
})

let decimalBtn = document.querySelector('.decimal-btn')
decimalBtn.addEventListener('click', () => {
    // does the first number already have a decimal?
    if (calcDecimalA === '') {
        calcDecimalA += decimalBtn.id
        if (calcOperator === '') {
            calcOperandA += decimalBtn.id
            calcDisplay.textContent = calcOperandA
        }
    }
    // if the first number already has a decimal, then we check to see if the second number has a decimal,
    // AND we've started to input a number for the second value
    else if (calcDecimalA === '.') {
        if (calcDecimalB === '' && calcOperandB != '') {
            calcDecimalB += decimalBtn.id
            calcOperandB += decimalBtn.id
            calcDisplay.textContent = calcOperandB
        }
    }

})
