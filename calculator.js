let firstNum = null;
let secondNum = null;
let operation = null;

const numberBtns = document.querySelectorAll('.btn.number');
const operatorBtns = document.querySelectorAll('.btn.operator');
const decimalBtn = document.querySelector('.btn.decimal-separator');
const equalsBtn = document.querySelector('.btn.equals');
const clearBtn = document.querySelector('.btn.clear');
const outputDisplay = document.querySelector('.display.output');
const outputHistory = document.querySelector('.display.history');

numberBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    appendNum(e.target.id);
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    setOperator(e.target.id);
  });
});

decimalBtn.addEventListener('click', (e) => {
  appendNum(e.target.id);
});

equalsBtn.addEventListener('click', evaluate);

clearBtn.addEventListener('click', clearAll);

const add = function(a, b) {
  if (isNaN(a) || isNaN(b)) { 
    throw new Error('Can\'t add these two values together, check your input.');
  } // Check for values that aren't numbers, accepts numbers as strings, but not strings containing non-numbers

  return Number(a) + Number(b); // Make sure the numbers entered are of the 'Number' type
};

const subtract = function(a, b) {
  if (isNaN(a) || isNaN(b)) { 
    throw new Error('Can\'t subtract these two values from each other, check your input.');
  }

  return Number(a) - Number(b);
};

const multiply = function(a, b) {
  if (isNaN(a) || isNaN(b)) { 
    throw new Error('Can\'t calculate the product of these two values, check your input.');
  }

  return Number(a) * Number(b);
};

const divide = function(a, b) {
  if (isNaN(a) || isNaN(b)) { 
    throw new Error('Can\'t divide these two values, check your input.');
  }

  return Number(a) / Number(b);
};

const operate = function(num1, num2, operator) {
  switch (operator) {
    case '+': return add(num1, num2);
    case '-': return subtract(num1, num2);
    case '*': return multiply(num1, num2);
    case 'x': return multiply(num1, num2);
    case '/': return divide(num1, num2);
  }
};

function appendNum(num) {
  if (num === '.') { // check to enter a decimal point
    if (outputDisplay.textContent === '') {
      outputDisplay.textContent = 0;
    } else if (outputDisplay.textContent.includes('.')) return;
  } else if (outputDisplay.textContent === '0') {
    outputDisplay.textContent = '';
  }

  outputDisplay.textContent += num;
}

function setOperator(operator) {
  if (operation !== null) evaluate();
  firstNum = outputDisplay.textContent;
  operation = operator;
  outputHistory.textContent = `${firstNum}${operation}`;
  outputDisplay.textContent = '';
}

function evaluate() {
  if (operation === null) return;
  secondNum = outputDisplay.textContent;
  outputDisplay.textContent = operate(firstNum, secondNum, operation);
  outputHistory.textContent = `${firstNum}${operation}${secondNum}=`
  operation = null;
}

function clearAll() {
  firstNum = null;
  secondNum = null;
  operation = null;
  outputDisplay.textContent = '';
  outputHistory.textContent = '';
}