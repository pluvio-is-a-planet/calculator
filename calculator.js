const add = function(a, b) {

  if (isNaN(a) || isNaN(b)) { 
    throw new Error('Can\'t add these two values together, check your input.');
  } // Check for values that aren't numbers, accepts numbers as strings, but not strings containing non-numbers

  return Number(a) + Number(b); // Make sure the numbers entered are of the 'Number' type
};