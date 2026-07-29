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
        let result;

        switch (operator) {
            case "+":
                result = this.add(validated[0], validated[1]);
                this.resultHistory.push(result);
                return result;
            case "-":
                result = this.subtract(validated[0], validated[1]);
                this.resultHistory.push(result);
                return result;
            case "*":
                result = this.multiply(validated[0], validated[1]);
                this.resultHistory.push(result);
                return result;
            case "/":
                result = this.divide(validated[0], validated[1]);
                this.resultHistory.push(result);
                return result;
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