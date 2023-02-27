import inquirer from 'inquirer';
import fs from 'fs';

const generateHTML = (response) =>
    `# ${response.title}

## Description

### ${response.description}

## Table Of Contents

### ${response.contents}

## Installation

### ${response.install}

## Usage

### ${response.usage}

## License

### ${response.license}

## Contributing

### ${response.contribute}

## Tests 

### ${response.tests}
`

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the desciption?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the contents',
            name: 'contents',
        },
        {
            type: 'input',
            message: 'What are the installation instructions',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How do you use the application',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'what licence will you use',
            name: 'licence',
        },
        {
            type: 'input',
            message: 'What are the contributions',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'what are the tests',
            name: 'tests',
        },

    ])
    .then((response) => {

        const HTMLtemplate = generateHTML(response);

        fs.writeFile('readme.md', HTMLtemplate, (err) =>
            err ? console.error(err) : console.log('Commit logged!')
        )
    });
