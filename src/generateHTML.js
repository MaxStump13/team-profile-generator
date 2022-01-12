
let html = [];

  //generates a card for an employee with the role engineer
            const generateEng = function(engineer){
                let engHtml = 
                 `<section class = "card">
                    <div class="card-header" style = "background-color: lightblue">
                        <h5 class="card-title">${engineer.name}</h5>
                        <i>Engineer</i>
                    </div>
                    <div class="card-body">
                        <ul class = "list-group">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: <a href = "mailto:${engineer.email}">${engineer.email}</a></li>
                            <li class="list-group-item">GitHub: <a target = "_blank" href = "https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
                        </ul>
                    </div>
                    </section>`;
                    html.push(engHtml)

            }
            
            
          //generates a card for an employee with the role intern

            const generateInt = function(intern){
                let intHtml =
                `<section class = "card">
                        <div class="card-header" style = "background-color: lightblue">
                            <h5 class="card-title">${intern.name}</h5>
                            <i>Intern</i>
                        </div>
                        <div class="card-body">
                        <ul class = "list-group">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">Email: <a href ="mailto:${intern.email}">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                        </div>
                    </section>`;
                    html.push(intHtml);
            }
        
          //generates a card for an employee with the role manager

            const generateMan = function(projMan){
                let proj=  `<section class = "card">
                        <div class="card-header" style = "background-color: lightblue">
                            <h5 class="card-title">${projMan.name}</h5>
                            <i>Manager</i>
                        </div>
                        <div class="card-body">
                            <ul class = "list-group">
                                <li class="list-group-item">ID: ${projMan.id}</li>
                                <li class="list-group-item">Email: <a href = "mailto:${projMan.email}">${projMan.email}</a></li>
                                <li class="list-group-item">Office #: ${projMan.officeNumber}</li>
                            </ul>
                        </div>
                    </section>`;
                    html.push(proj);
            };
            
//function loops through array and calls respective generate function based on role, then calls generate html function to return the finalized index.html
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
        <header class = "col-12 text-center py-3" style = "background-color: lightblue">
                <h1>My Team</h1>
        </header>
        <main class ="d-flex flex-wrap justify-content-around m-3 p-2">
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