// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Assisted by Xpert Learning Assistant on where to find badges and how to render them
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return `![License](https://img.shields.io/badge/license-MIT-blue.svg)`;
  } 
  if (license === 'Apache License 2.0') {
    return `![License](https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square.svg)`;
  } 
  if (license === 'GNU General Public License v3.0') {
    return `![License](https://img.shields.io/badge/License-GNU%20GPL-blue.svg)`;
  }
  if (license === 'None') {
    return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License'){
    return `[MIT License](https://choosealicense.com/licenses/mit/)`;
  }
  if (license === 'Apache License 2.0'){
    return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
  }
  if (license === 'GNU General Public License v3.0'){
    return `[GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`;
  }
  if (license === 'None'){
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// In README syntax, you CANNOT have any spaces before certain elements like badges and links because they will NOT render correctly
// So for lines 45 and 47, there has to be NO indentation
function renderLicenseSection(license) {
  if (license === 'None'){
    return ''
  } else {
    return `## License
This project is covered under the following license:

${renderLicenseLink(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // In README syntax, you can't have any spaces before certain elements like badges and links because they will NOT render correctly
  return `# ${data.title}  

${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions, you may contact me at:

  Github: [${data.github}](https://github.com/${data.github})
  
  Email: ${data.email}

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
