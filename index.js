// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please enter a one-sentence description of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "What is the link to clone the repo?",
        name: "clone",
    },
    {
        type: "input",
        message: "Please tell us about how you use your project:",
        name: "usage",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
            "GNU GPLv3",
            "MIT",
            "Apache",
            "BSD",
        ],
    },
    {
        type: "input",
        message: "Please enter any testing protocols you used for your project:",
        name: "test",
    },
    {
        type: "input",
        message: "What is your name?",
        name: "author",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "userName",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "userEmail",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'))
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            writeToFile('README.md', generateMarkdown(responses))
        })

}

// Function call to initialize app
init();
