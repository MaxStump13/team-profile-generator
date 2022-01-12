const Employee = require("./Employee");
//subclass of employee with role eqaul to Intern, adds a school and function to get employees school
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


module.exports = Intern;