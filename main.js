import inquirer from "inquirer";
const result = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "firstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform your operation", type: "list", name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
//Condional Statement
if (result.operator === "Addition") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operator === "Subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operator === "Multiplication") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operator === "Division") {
    console.log(result.firstNumber / result.secondNumber);
}
else {
    console.log("Please select Valid Operator");
}
