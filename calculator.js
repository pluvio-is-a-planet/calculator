const calculator = new Object();

calculator.add = function(firstValue, secondValue) {
    return firstValue + secondValue;
};

calculator.subtract = function(firstValue, secondValue) {
    return firstValue - secondValue;
};

calculator.multiply = function(firstValue, secondValue) {
    return firstValue * secondValue;
};

calculator.divide = function(firstValue, secondValue) {
    return firstValue / secondValue;
};

calculator.evaluate = function(firstValue, secondValue, operator) {
    try {
        const validated = this.validateInput(firstValue, secondValue);

        switch (operator) {
            case "+": return this.add(validated[0], validated[1]);
            case "-": return this.subtract(validated[0], validated[1]);
            case "*": return this.multiply(validated[0], validated[1]);
            case "/": return this.divide(validated[0], validated[1]);
            default:
                throw new Error("Invalid operator.");
        }
    } catch (error) {
        return error;
    }
}

calculator.validateInput = function(firstValue, secondValue) {
    if (isNaN(firstValue) || isNaN(secondValue)) { 
        throw new Error("Not a valid number.");
    }

    return [firstValue, secondValue];
}