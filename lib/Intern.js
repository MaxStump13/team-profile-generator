const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        
        
        this.school=school;
    }
    getRole(){
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
}
//add functions to for getRole, getSchool, 
// properties school

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

module.exports = Intern;