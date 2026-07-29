const numberButtons = document.querySelectorAll(".number-input");
const operatorButtons = document.querySelectorAll(".operator-input");
const evaluateButton = document.querySelector(".evaluate");

const resultOutputDisplay = document.querySelector(".result-output-container");
const historyOutputDisplay = document.querySelector(".history-output-container");

const resetButton = document.querySelector(".reset-button");
const deleteButton = document.querySelector(".delete-button");

const calculator = new Object();
resetCalculator();

numberButtons.forEach(button => {
    button.addEventListener("click", e => {
        const num = e.target.value;
        if (calculator.operator) {
            calculator.secondOperand += num;
        } else {
            calculator.firstOperand += num;
        } 

        render(resultOutputDisplay);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", e => {
        const operator = e.target.value;

        if (calculator.operator) {
            if (calculator.firstOperand && calculator.secondOperand) {
                render(historyOutputDisplay);
                runEvaluate(calculator.firstOperand, calculator.secondOperand, calculator.operator);
            }
        }

        setOperator(operator);
        render(resultOutputDisplay);
    });
});

evaluateButton.addEventListener("click", e => {
    render(historyOutputDisplay);
    runEvaluate(calculator.firstOperand, calculator.secondOperand, calculator.operator);
    render(resultOutputDisplay);
});

resetButton.addEventListener("click", e => {
    resetCalculator();
});

deleteButton.addEventListener("click", e => {
    deleteLastInput();
});

function deleteLastInput() {
    // equivalent to pressing 'backspace', should only delete the last character, because of the way
    // I'm handling how the values are actually stored, it's a bit more tricky and has to go through a few checks.
    if (calculator.operator && calculator.secondOperand.length > 0) {
        calculator.secondOperand = calculator.secondOperand.slice(0, -1);
    } else if (calculator.operator && calculator.secondOperand.length === 0) {
        calculator.operator = null;
    } else if (calculator.operator === null && calculator.firstOperand.length > 0) {
        calculator.firstOperand = calculator.firstOperand.slice(0, -1);
    }
}

function resetCalculator() {
    calculator.firstOperand = "";
    calculator.operator = null;
    calculator.secondOperand = "";
}

function runEvaluate(firstOperand, secondOperand, operator) {
    const result = calculator.evaluate(firstOperand, secondOperand, operator);

    calculator.firstOperand = `${result}`;
    calculator.operator = null;
    calculator.secondOperand = "";

    return result;
}

function setOperator(operatorInput) {
    calculator.operator = operatorInput;
}

function render(targetDisplay) {
    if (!targetDisplay) {
        throw new Error("Error! No display detected.");
    }
    const operatorSymbols = {
        "+": "+",
        "-": "-",
        "*": "x",
        "/": "÷"
    };

    const active = calculator.operator ? calculator.secondOperand : calculator.firstOperand;
    targetDisplay.textContent = 
        calculator.operator === null
            ? calculator.firstOperand
            : `${calculator.firstOperand} ${operatorSymbols[calculator.operator]} ${calculator.secondOperand}`;
}

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
            return result;
        } else {
            throw new Error("Oops! Something went wrong.");
        }
    } catch (error) {
        return error;
    }
};

calculator.validateInput = function(firstOperand, secondOperand) {
    if (isNaN(firstOperand) || isNaN(secondOperand)) { 
        throw new Error("Not a valid number.");
    }

    return [Number(firstOperand), Number(secondOperand)];
};