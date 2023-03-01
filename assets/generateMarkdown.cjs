// A function created to generate markdown for the README file
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.licensing}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Questions:

  ### if you have any questions feel free to contact me below:
  - Email: ${data.email};
  - Github: ${data.github} : (https://github.com/${data.github})`
}
// Exporting the generateMarkdwon JS file
module.exports = generateMarkdown;
