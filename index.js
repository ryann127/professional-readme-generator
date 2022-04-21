// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: "What are the installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "Please tell us about how you use your project:",
        name: "usage",
    },
    {
        type: "input",
        message: "What is the link to clone the repo?",
        name: "clone",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
        ],
    },
    {
        type: "input",
        message: "Please enter any testing protocols you used for your project?",
        name: "test",
    },
    {
        type: "input",
        name: "author",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email?",
    }
    // may need to add contributing section
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

function licenseBadge(value) {
}

// TODO: Create a function to initialize app
async function init() {

}

// Function call to initialize app
init();
