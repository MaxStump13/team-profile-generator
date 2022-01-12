const Employee = require("./Employee");
//subclass of employee with role eqaul to Engineer, adds a github profile and function to obtain it

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



module.exports = Engineer;