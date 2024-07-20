import inquirer from "inquirer";
import chalk from "chalk";
let userInput = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "what is your name?"
    }
]);
console.log(chalk.magentaBright(`Hello ${userInput.name}`));
