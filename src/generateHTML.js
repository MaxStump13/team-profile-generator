// const Employee =require("./lib/Employee.js");
// const Engineer = require("./lib/Engineer.js");
// const Manager = require("./lib/Manager.js");
// const Intern = require("./lib/Intern.js");
let html = [];

  
            const generateEng = function(){
                let engHtml = 
                 `<section class = "card">
                    <div class="card-header">
                        <h5 class="card-title">${team[i].name}</h5>
                        <i>Engineer</i>
                    </div>
                    <div class="card-body">
                        <ul class = "list-group">
                            <li class="list-group-item">ID: ${team[i].id}</li>
                            <li class="list-group-item">Email: ${team[i].email}</li>
                            <li class="list-group-item">GitHub: ${team[i].gitHub}</li>
                        </ul>
                    </div>
                    </section>`;
                    html.push(engHtml)

            }
            
            
        
            const generateInt = function(){
                let intHtml =
                `<section class = "card">
                        <div class="card-header">
                            <h5 class="card-title">${team[i].name}</h5>
                            <i>Intern</i>
                        </div>
                        <div class="card-body">
                        <ul class = "list-group">
                            <li class="list-group-item">ID: ${team[i].id}</li>
                            <li class="list-group-item">Email: ${team[i].email}</li>
                            <li class="list-group-item">School: ${team[i].school}</li>
                        </ul>
                        </div>
                    </section>`;
                    html.push(intHtml);
            }
        
        
            const generateMan = function(){
                let proj=  `<section class = "card">
                        <div class="card-header">
                            <h5 class="card-title">${team[i].name}</h5>
                            <i>Manager</i>
                        </div>
                        <div class="card-body">
                            <ul class = "list-group">
                                <li class="list-group-item">ID: ${team[i].id}</li>
                                <li class="list-group-item">Email: ${team[i].email}</li>
                                <li class="list-group-item">Office #: ${team[i].officeNumber}</li>
                            </ul>
                        </div>
                    </section>`;
                    html.push(proj);
            };
            

function generateHTML(team){  
    for(i = 0; i < team.length; i++){
        const role = team[i].getRole();
        if(role == "Engineer"){
            const engineer = generateEng(team[i]);
            html.push(engineer);
        }
        else if(role == "Intern"){

            const intern = generateInt(team[i]);
            html.push(intern);

        }
        else{
            const manager = generateMan(team[i]);
            html.push(manager);

        }
    }
    const cards = html.join("");
    const generatePage = generate(cards);
    return generatePage;
}
const generate = function(cards){

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
    
        <link rel="stylesheet" href="./assets/css/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header class = "col-12 text-center">
                <h1>My Team</h1>
        </header>
        <main class ="d-flex flex-wrap  m-3 p-2">
            ${cards}
        </main>
        
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
        <script src="./assets/js/script.js"></script>
    </body>
    </html>`;
}
module.exports = generateHTML;