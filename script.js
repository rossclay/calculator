
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
        return 'ERROR'
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
let calcDisplayA = ''
// after an operator has been chosen
let calcDisplayB = ''
// has an operator been chosen?
let calcOperator = ''
// is there a decimal in the first number? 
let calcDecimalA = ''
// is there a decimal in the second number?
let calcDecimalB = ''

function operateCalculator() {
    calcDisplayA = operate(parseFloat(calcDisplayA), parseFloat(calcDisplayB), calcOperator)
    calcDisplay.textContent = Number(calcDisplayA.toFixed(4))
    calcDisplayB = ''
    if (calcDisplay.textContent.includes('.')) {
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
        calcDisplayA += numBtn.id
        calcDisplay.textContent = calcDisplayA
    }
    // after an operator has been chosen
    else {
        calcDisplayB += numBtn.id
        calcDisplay.textContent = calcDisplayB
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
deleteBtn.addEventListener('click', () => {
    if (calcOperator === '' && calcDisplay.textContent != '0') {
        if (calcDisplayA.length - 1 != 0) {
            calcDisplayA = calcDisplayA.substring(0, calcDisplayA.length - 1)
            calcDisplay.textContent = calcDisplayA
        } else {
            calcDisplayA = 0
            calcDisplay.textContent = calcDisplayA
        }
    }
    else if (calcOperator && calcDisplayB === '') {
        calcOperator = ''
        operatorBtns.forEach((operatorBtn) => operatorBtn.setAttribute('style', 'background-color: lightgray'))
    }
    else if (calcOperator && calcDisplayB) {
        if (calcDisplayB.length - 1 != 0) {
            calcDisplayB = calcDisplayB.substring(0, calcDisplayB.length - 1)
            calcDisplay.textContent = calcDisplayB
        } else {
            calcDisplayB = 0
            calcDisplay.textContent = calcDisplayB
        }
    }
    else if (calcDisplay.textContent === '0') {
        // DO NOTHING
    }
})

let clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = 0
    calcDisplayA = ''
    calcDisplayB = ''
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
            calcDisplayA += decimalBtn.id
            calcDisplay.textContent = calcDisplayA
        }
    }
    // if the first number already has a decimal, then we check to see if the second number has a decimal,
    // AND we've started to input a number for the second value
    else if (calcDecimalA === '.') {
        if (calcDecimalB === '' && calcDisplayB != '') {
            calcDecimalB += decimalBtn.id
            calcDisplayB += decimalBtn.id
            calcDisplay.textContent = calcDisplayB
        }
    }

})
