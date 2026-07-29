const calculator = new Object();

calculator.resultHistory = [];

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
        const firstOperand = (this.resultHistory.length > 0)
            ? this.resultHistory.at(-1)
            : validated[0];
        const secondOperand = validated[1];

        const operations = {
            "+": this.add,
            "-": this.subtract,
            "*": this.multiply,
            "/": this.divide
        };

        const operationFunction = operations[operator];
        if (!operationFunction) {
            throw new Error("Invalid operation.");
        };

        const result = operationFunction(firstOperand, secondOperand);
        this.resultHistory.push(result);
        return result;
    } catch (error) {
        return error;
    }
}

calculator.validateInput = function(firstValue, secondValue) {
    if (isNaN(firstValue) || isNaN(secondValue)) { 
        throw new Error("Not a valid number.");
    }

    return [Number(firstValue), Number(secondValue)];
}