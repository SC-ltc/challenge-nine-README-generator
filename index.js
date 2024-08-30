// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project'
    },
    {
        type:'input',
        name:'description',
        message: 'Please provide a description of your project'
    },
    {
        type:'input',
        name:'installation',
        message:'Please provide the installation instructions for your project'
    },
    {
        type:'input',
        name:'usage',
        message:'Please provide the usage information for your project'
    },
    {
        type:'input',
        name:'contributing',
        message:'Please provide the contribution guidelines for your project'
    },
    {
        type:'input',
        name:'tests',
        message:'Please provide the test instructions for your project'
    },
    {
        type:'list',
        name:'license',
        message: 'Please choose a license for your project',
        choices:['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'None' ]
    },
    {
        type:'input',
        name:'github',
        message:'Please provide your GitHub username'
    },
    {
        type:'input',
        name:'email',
        message:'Please provide your email address'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created a README!')
    );
};

// TODO: Create a function to initialize app
// Assisted by Xpert Learning Assistant on how to pass the questions array to inquirer.prompt
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmepageContent = generateMarkdown(answers);
        writeToFile('README.md', readmepageContent);
    });
}

// Function call to initialize app
init();
