var inquirer = require('inquirer');
inquirer.prompt([
    {
        type: 'input',
        message: "what's the word",
        name: "word"
    }
]).then(answers => {
    console.log(JSON.stringify(answers, null, ' '));
});