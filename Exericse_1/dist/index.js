"use strict";
const calc = () => {
    let num1 = Number(prompt('Enter First Number'));
    let operator = prompt('Enter Operator');
    let num2 = Number(prompt('Enter Second Number'));
    if (isNaN(num1) || isNaN(num2)) {
        return alert('Please enter valid numbers.');
    }
    if (operator === "-") {
        return alert(`Result is ${num1 - num2}`);
    }
    else if (operator === "+") {
        return alert(`Result is ${num1 + num2}`);
    }
    else if (operator === "*") {
        return alert(`Result is ${num1 * num2}`);
    }
    else if (operator === "/") {
        return alert(`Result is ${num1 / num2}`);
    }
    else {
        return alert('Invalid operator. Please use +, -, *, or /.');
    }
};
calc();
