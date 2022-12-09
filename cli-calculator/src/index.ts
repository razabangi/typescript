#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

let timeout = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

let welcome = async () => {
    let title = chalkAnimation.karaoke("Lets start tha calculation..");
    await timeout();
    title.stop();
}

console.log(`
▄████▄   ▄▄▄       ██▓     ▄████▄   █    ██  ██▓    ▄▄▄     ▄▄▄█████▓ ▒█████   ██▀███  
▒██▀ ▀█  ▒████▄    ▓██▒    ▒██▀ ▀█   ██  ▓██▒▓██▒   ▒████▄   ▓  ██▒ ▓▒▒██▒  ██▒▓██ ▒ ██▒
▒▓█    ▄ ▒██  ▀█▄  ▒██░    ▒▓█    ▄ ▓██  ▒██░▒██░   ▒██  ▀█▄ ▒ ▓██░ ▒░▒██░  ██▒▓██ ░▄█ ▒
▒▓▓▄ ▄██▒░██▄▄▄▄██ ▒██░    ▒▓▓▄ ▄██▒▓▓█  ░██░▒██░   ░██▄▄▄▄██░ ▓██▓ ░ ▒██   ██░▒██▀▀█▄  
▒ ▓███▀ ░ ▓█   ▓██▒░██████▒▒ ▓███▀ ░▒▒█████▓ ░██████▒▓█   ▓██▒ ▒██▒ ░ ░ ████▓▒░░██▓ ▒██▒
░ ░▒ ▒  ░ ▒▒   ▓▒█░░ ▒░▓  ░░ ░▒ ▒  ░░▒▓▒ ▒ ▒ ░ ▒░▓  ░▒▒   ▓▒█░ ▒ ░░   ░ ▒░▒░▒░ ░ ▒▓ ░▒▓░
  ░  ▒     ▒   ▒▒ ░░ ░ ▒  ░  ░  ▒   ░░▒░ ░ ░ ░ ░ ▒  ░ ▒   ▒▒ ░   ░      ░ ▒ ▒░   ░▒ ░ ▒░
░          ░   ▒     ░ ░   ░         ░░░ ░ ░   ░ ░    ░   ▒    ░      ░ ░ ░ ▒    ░░   ░ 
░ ░            ░  ░    ░  ░░ ░         ░         ░  ░     ░  ░            ░ ░     ░     
░                          ░   
`);

console.log(`
_____________________
|  _________________  |
| |  Raza   Bangi   | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|

`);

let blue = chalk.blue.bold;
let green = chalk.bgGreen.bold;

let askQuestions = async () => {
    return await inquirer
        .prompt([
            {
                type: "list",
                name: "operator",
                message: "Which operation you want to perform? \n",
                choices: ["addition", "substraction", "multiplication", "divide"],
            }, {
                type: "input",
                name: "num1",
                validate(name) {
                    if (!name) {
                        return "Number is required";
                    } else if (isNaN(name)) {
                        return "Please enter the number only";
                    }
                    return true;
                },
                message: blue("Enter the number one: "),
            }, {
                type: "input",
                name: "num2",
                validate(name) {
                    if (!name) {
                        return "Number is required";
                    } else if (isNaN(name)) {
                        return "Please enter the number only";
                    }
                    return true;
                },
                message: blue("Enter the number two: "),
            }
        ])
        .then((answers) => {
            let result;
            switch (answers.operator) {
                case "addition":
                    result = +answers.num1 + +answers.num2;
                    break;
                case "substraction":
                    result = +answers.num1 - +answers.num2;
                    break;
                case "multiplication":
                    result = +answers.num1 * +answers.num2;
                    break;
                case "divide":
                    result = +answers.num1 / +answers.num2;
                    break;
                default:
                    break;
            }            
            console.log(green(`\n Your result is: ${result} \n`));
        });
}

await welcome();

console.log("\n");

let showAgain = async () => {
    do {
        await askQuestions();
        var again = await inquirer
            .prompt({
                type: "input",
                name: "restart",
                message: "Do you want to continue? Press y or n:",
                validate(name) {                    
                    if (!name) {
                        return "Answer is required";
                    }
                    return true;
                },
            });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "Yes" || again.restart == "YES" || again.restart == "yes")
}

showAgain();