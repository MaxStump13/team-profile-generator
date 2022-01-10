// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
//manager is required  engineer and intern are optional


const inquirer = require("inquirer");
const fs = require("fs");
const projectManQuestions = [
    {
        type: "input",
        message: "What is the name of the Project Manager?",
        name: "proj-man"
    },
    {
        type: "input",
        message: "What is the Project Manager's ID?",
        name: "proj-man-id"
    },
    {
        type: "input",
        message: "What is the Project Managers email?",
        name: "proj-man-email"
    },
    {
        type: "input",
        message: "What is the Project Manager's Office Number?",
        name: "proj-man-office"
    },
];

const engineerQuestions =[
    {
    
        type: "input",
        message: "What is the name of the Engineer?",
        name: "engineer-name"
    },
    {
        type: "input",
        message: "What is the Engineer's ID?",
        name: "engineer-man-id"
    },
    {
    
        type: "input",
        message: "What is the email of the Engineer?",
        name: "engineer-email"
    },
    {
    
        type: "input",
        message: "What is the Engineer's GitHub username?",
        name: "engineer-GitHub"
    },
];
const internQuestions =[
    {
    
        type: "input",
        message: "What is the name of the Intern?",
        name: "intern-name"
    },
    {
        type: "input",
        message: "What is the ID of the Intern?",
        name: "intern-id"
    },
    {
    
        type: "input",
        message: "What is the email of the Intern?",
        name: "intern-email"
    },
    {
    
        type: "input",
        message: "What is the Intern's GitHub username?",
        name: "intern-GitHub"
    },
];
const menu = [
    {
    input: "input",
    message: "Would you like to add an engineer, intern, or finished building your team?",
    name: "menu",
    choice: ["Add Engineer", "Add Intern", "Finish building your team"]
    }
];



function init(){
inquirer
.prompt(questions)
.then(function(answers){
console.log(answers);

generate(answers);
})
}

function generate(data){
    
}


init();