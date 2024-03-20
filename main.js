#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { mesege: "Enter your first number", type: "number", name: "firstnumber" },
    { mesege: "Enter your second number", type: "number", name: "secondnumber" },
    {
        mesege: "Select one of the operater to perform task",
        type: "list",
        name: "operater",
        choices: ['Addition', `Subtration`, `Multiplication`, `Divison`],
    },
]);
//conditional statment
if (answer.operater === `Addition`) {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operater === `Subtration`) {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operater === `Multiplication`) {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operater === `Divison`) {
    console.log(answer.firstnumber / answer.secondnumber);
}
