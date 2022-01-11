const Employee = require("./Employee");
//add functions to for getRole, getGithub,
// properties github 
class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        super(name,id,email);
        this.gitHub = gitHub;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.gitHub;
    }
}


{/* <section class = "card">
    <div class="card-header">
        <h5 class="card-title">${engineer-name}</h5>
        <h5>Engineer</h5>
    </div>
    <div class="card-body">
        <p class="card-text">ID: ${engineer-id}</p>
        <p class="card-text">Email: ${engineer-email} </p>
        <p class="card-text">Github: ${engineer-github}</p>
    </div>  
</section> */}

module.exports = Engineer;