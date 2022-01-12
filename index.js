
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHTML.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const team= [];


//questions prompted when app is started
const projectManQuestions = [
    {
        type: "input",
        message: "What is the name of the Project Manager?",
        name: "name"
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
        name: "officeNumber"
    },
];
//questions prompted when add engineer is selected
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
        name: "gitHub"
    },
];
//questions prompted when add intern is selected
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
//function to add engineer, intern, or finish team building
function menu(){
const menuQuestion = [
    {
    type: "list",
    message: "Would you like to add an engineer, intern, or finished building your team?",
    name: "choice",
    choices: ["Add Engineer", "Add Intern", "Finish building your team"]
    }
];
// based on the selection, a different set of questions is listed then the answers are pushed to the team array to generate the html
inquirer.prompt(menuQuestion)
    .then(function(answers){
        if(answers.choice === "Add Engineer"){
            inquirer.prompt(engineerQuestions)
                .then(function(engAnswers){
                const engineer = new Engineer(engAnswers.name, engAnswers.id, engAnswers.email, engAnswers.gitHub);
                team.push(engineer);
                menu();
                }
                )
        }
        else if(answers.choice === "Add Intern"){
            inquirer.prompt(internQuestions)
                .then(function(intAnswers){
                const intern = new Intern(intAnswers.name, intAnswers.id, intAnswers.email, intAnswers.school);
                team.push(intern);
                menu();
                }
        
                )
        }
    else{
        const html = generateHtml(team);
        fs.writeFile("./dist/index.html", html,err => {
            if(err){
                console.log(err);
            }
            else{
                console.log("Profile Created. Check the dist folder");
            }
        });
    }

    
    })
}


function init(){
inquirer
.prompt(projectManQuestions)
.then(function(answers){
//add to a array or something
const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
team.push(manager);
menu();
})

}

init();