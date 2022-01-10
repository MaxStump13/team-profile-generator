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
const generate = require("./src/generateHTML");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");



const projectManQuestions = [
    {
        type: "input",
        message: "What is the name of the Project Manager?",
        name: "Name"
    },
    {
        type: "input",
        message: "What is the Project Manager's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the Project Managers email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the Project Manager's Office Number?",
        name: "office"
    },
];

const engineerQuestions =[
    {
    
        type: "input",
        message: "What is the name of the Engineer?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the Engineer's ID?",
        name: "id"
    },
    {
    
        type: "input",
        message: "What is the email of the Engineer?",
        name: "email"
    },
    {
    
        type: "input",
        message: "What is the Engineer's GitHub username?",
        name: "github"
    },
];
const internQuestions =[
    {
    
        type: "input",
        message: "What is the name of the Intern?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the ID of the Intern?",
        name: "id"
    },
    {
    
        type: "input",
        message: "What is the email of the Intern?",
        name: "email"
    },
    {
    
        type: "input",
        message: "What is the school did the Intern go to?",
        name: "school"
    },
];

function menu(){
const menuQuestion = [
    {
    input: "list",
    message: "Would you like to add an engineer, intern, or finished building your team?",
    name: "choice",
    choice: ["Add Engineer", "Add Intern", "Finish building your team"]
    }
];
inquirer.prompt(menuQuestion)
.then(function(answers){
    if(answers.choice === "Engineer"){
        inquirer.prompt(engineerQuestions)
        .then(
        menu()
        )
    }
    else if(answers.choice === "Intern"){
        inquirer.prompt(internQuestions)
        .then(
        menu()
        )
    }
    else{
        generateHtml(answers);
    }
})
}


function init(){
inquirer
.prompt(projectManQuestions)
.then(function(answers){
console.log(answers);
//add to a array or something
generate(answers);
menu();
})

}

//make function for prompt menu then have it go to other functions with eng int or done
//at the end of eng and int, call menu again

// inquirer.prompt(menu)
// .then(function(answers){
//     if(answers.choice === "Engineer"){
//         inquirer.prompt(engineerQuestions)
//         .then(function)
//     }
//     else if(answers.choice === "Intern"){
//         inquirer.prompt(internQuestions)
//     }
//     else{
//         generateHtml(answers);
//     }
// })


// { <section class = "card">
//     <div class="card-header">
//         <h5 class="card-title">${engineer-name}</h5>
//         <h5>Engineer</h5>
//     </div>
//     <div class="card-body">
//         <p class="card-text">ID: ${engineer-id}</p>
//         <p class="card-text">Email: ${engineer-email} </p>
//         <p class="card-text">Github: ${engineer-github}</p>
//     </div>  
// </section> }

{/* <section class = "card">
    <div class="card-header">
        <h5 class="card-title">${intern-name}</h5>
        <h5>Intern</h5>
    </div>
    <div class="card-body">
        <p class="card-text">ID: ${intern-id}</p>
        <p class="card-text">Email: ${intern-email} </p>
        <p class="card-text">Office Number: ${intern-school}</p>
    </div>  
    
</section> */}
init();