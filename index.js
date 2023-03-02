// importing modules, file system and generateMarkdown javascript file
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './assets/generateMarkdown.cjs';

// An array that contains the questions for the user to answer for the readme
const questions = [
    // The name of the project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: title => (title) ? true :
            console.log('Please enter a title to continue.')
    },
    // The description of the project
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        validate: description => (description) ? true :
            console.log('Please provide a project description.')
    },
    // The installation instructions for the project
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: installation => (installation) ? true :
            console.log('Please provide installation instructions to continue.')
    },
    // How to use the project
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
        validate: usage => (usage) ? true :
            console.log('Please enter how to use your project.')
    },
    // information on how to contribute to the project
    {
        type: 'input',
        name: 'contribution',
        message: 'How do you contribute to your project?',
        validate: contribution => (contribution) ? true :
            console.log('Please enter information on contribution.')
    },
    // Instructions on how to test the project
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test your project?',
        validate: testing => (testing) ? true :
            console.log('Please describe how to test your project.')
    },
    // License options to choose from
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project',
        choices: ['Mozilla-Public', 'GNU-General-Public', 'Apache', 'Common-Development-and Distribution', 'MIT', 'None'],
        validate: licensing => (licensing) ? true :
            console.log('Please pick a license for your project.')
    },
    // User to enter their Github Username
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub Username',
        validate: github => (github) ? true :
            console.log('Please enter your GitHub username.')
    },
    // option to add an email address
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: email => (email) ? true :
            console.log('Please enter your email address.')
    },
];

// This function starts the readme generator
function start() {
    inquirer.prompt(questions)
        .then((answers) =>
            fs.writeFile("README.md", generateMarkdown(answers), (err) => (err) ? console.error(err) :
                console.log('SUCCESSFUL! - README file generated.'))
        );
};

// this functions calls the start function
start();