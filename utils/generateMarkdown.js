// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      } else if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      } else if (license === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      } else {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "None") {
        return (`https://opensource.org/licenses${license}`)
    };
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        return (`This application is protected under ${license}`)
    }
    return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions) 

## Description
 ${data.description}

 ## Installation
git clone ${data.clone}

 ## Usage
 ${data.usage}

 ## License

 ${renderLicenseSection(data.license)}

 ${renderLicenseLink(data.license)}

 ## Contributing
 
 You will need to create a pull request to contribute further to this application

 - Fork the Repo
 - Create a Feature Branch
 - Commit your New Feature
 - Push your Branch
 - Create a New Pull Request

 Features will be merged depending on review

 ## Tests
 ${data.test}

 ## Questions
 For any questions, please reach me, ${data.author}, at either ${data.userEmail} and/or my GitHub ${data.userName}


`;
}

module.exports = generateMarkdown;
