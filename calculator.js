// let userInput = prompt('Enter expression:', '1 + 1').replace(/[^0-9,.+\-*x/]/g, '');
// let operator = userInput.match(/[+\-*x/]/)[0];
// let firstNum = userInput.slice(0, userInput.indexOf(operator));
// let secondNum = userInput.slice(userInput.indexOf(operator) + 1, );
const buttons = document.querySelectorAll('.btn.container .btn.number, .btn.container .btn.operator, .btn.container .btn.decimal-separator');
const displayInput = document.querySelector('input#display');
let inputValue;

buttons.forEach((btn) => {
  btn.addEventListener(('click'), (e) => {
    inputValue = getInputValue(e);
    displayInput.value += inputValue;
  });
});

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

function getInputValue(e) {
  let displayString = e.target.id;
  return displayString;
};