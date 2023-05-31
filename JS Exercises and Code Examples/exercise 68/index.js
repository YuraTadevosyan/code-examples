// Check Readme.md file
const calculate = (splittedStr) => {
    const [num1, operator, num2] = splittedStr

    switch (operator) {
        case '+':
            return num1.length + num2.length
        case '-':
            return num1.length - num2.length
        case '*':
            return num1.length * num2.length
        case '//':
            return num1.length / num2.length
    }
}

const dotCalculator = (equation) => ''.padStart(calculate(equation.split(' ')), '.')