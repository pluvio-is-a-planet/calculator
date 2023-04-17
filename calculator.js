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