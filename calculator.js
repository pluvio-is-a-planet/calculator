const calculator = new Object();

calculator.add = function(a, b) {
    let validated = [];

    try {
        validated = validateInput(a, b);
    } catch (error) {
        return error;
    }

    return validated[0] + validated[1];
};

calculator.subtract = function(a, b) {
    let validated = [];

    try { 
        validated = validateInput(a, b);
    } catch (error) {
        return error;
    }

    return validated[0] - validated[1];
};

calculator.multiply = function(a, b) {
    let validated = [];

    try {
        validated = validateInput(a, b);
    } catch (error) {
        return error;
    }

    return validated[0] * validated[1];
};

calculator.divide = function(a, b) {
    let validated = [];

    try {
        validated = validateInput(a, b);
    } catch (error) {
        return error;
    }

    return validated[0] / validated[1];
};

function validateInput(a, b) {
    if (isNaN(a) || isNaN(b)) { 
        throw new Error("Not a valid number.");
    }

    return [a, b];
}