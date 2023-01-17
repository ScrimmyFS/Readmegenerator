

const ReadMeGenerator = (data) =>
`
# ${data.Title}
htttps://github.com/${data.Username}/${data.Title}
# Description
${data.Description}
# Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contribution)
[Test](#test)
[Questions](#questions)
# Installation
The following dependencies must be installed to run the application ${data.Installation}
# Usage
In order to use this app, ${data.Usage}
# License
This project is lecensed unde the ${data.License} license.
# Contributors
Contributors: ${data.Contrbuting}
# Tests
The following is needed to run the test: ${data.Tests}
# Questions
if you have any questions about the repo, opan issue or contact ${data.Username}, or directly at : ${data.Email}

`

module.exports = ReadMeGenerator;