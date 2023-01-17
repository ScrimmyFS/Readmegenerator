// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const ReadMeGenerator = require('./ReadMeGenerator')


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is your project's name?",
    name: "Title"
},{
    type: "input",
    message: "Please write a short description of your project",
    name: "Description"
},{
    type: "input",
    message: "What does the user need to install and run this app?",
    name: "Installation"
},{
    type: "input",
    message: "How is this app used?",
    name: "Usage"
},{
    type: "input",
    message: "What liscense is being used?",
    name: "License"
},{
    type: "input",
    message: "Who contributed to this project?",
    name: "Contributing"
},{
    type: "input",
    message: "Contact info for inquiries",
    name: "Questions"
},
{
    type: "input",
    message: "What is your GitHub username?",
    name: "Username"
},{
    type: "input",
    message: "What is your email address?",
    name: "Email"
},




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) { 
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        }   else {
            console.log("Success!")
        }
    })

}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", ReadMeGenerator(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
