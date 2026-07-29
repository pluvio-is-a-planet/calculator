const calculator = new Object();

const inputButtons = document.querySelectorAll(".row-container .input");
const operatorButtons = document.querySelectorAll(".operator-input");
const evaluateButton = document.querySelector(".evaluate-input");

calculator.resultHistory = [];

calculator.add = function(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
};

calculator.subtract = function(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
};

calculator.multiply = function(firstOperand, secondOperand) {
    return firstOperand * secondOperand;
};

calculator.divide = function(firstOperand, secondOperand) {
    return firstOperand / secondOperand;
};

calculator.evaluate = function(firstValue, secondValue, operator) {
    try {
        const validated = this.validateInput(firstValue, secondValue);
        // Need to make sure that validated is actually valid, by checking that this.validateInput
        // indeed returned an array containing 2 items
        if (Array.isArray(validated) && validated.length === 2) {
            const firstOperand = validated[0];
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
        } else {
            throw new Error("Oops! Something went wrong.");
        }
    } catch (error) {
        return error;
    }
};

calculator.evaluateNext = function(secondValue, operator) {
    if (this.resultHistory.length < 1) {
        throw new Error("No previous result, history is empty.");
    }

    const previousResult = this.resultHistory.at(-1);

    return this.evaluate(previousResult, secondValue, operator);
};

calculator.validateInput = function(firstOperand, secondOperand) {
    if (isNaN(firstOperand) || isNaN(secondOperand)) { 
        throw new Error("Not a valid number.");
    }

    return [Number(firstOperand), Number(secondOperand)];
};