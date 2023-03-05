// A function created to generate markdown for the README file
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Licensing:
  [![License](https://img.shields.io/badge/License-${answers.licensing}-blue.svg)](https://shields.io)

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  ${answers.description}

  ## Installation:
  ${answers.installation}

  ## Usage:
  ${answers.usage}

  ## License:
  ${answers.licensing}

  ## Contribution:
  ${answers.contribution}

  ## Testing:
  ${answers.testing}

  ## Questions:

  ### if you have any questions feel free to contact me below:
  - Email: ${answers.email};
  - Github: ${answers.github} : (https://github.com/${answers.github})`
}
// Exporting the generateMarkdwon JS file
module.exports = generateMarkdown;
