const Employee = require("./Employee");
//subclass of employee with role eqaul to Manager, adds an office number and function to get it

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber= officeNumber;
    
}

getRole(){
    return "Manager"
}
getOfficeNumber(){
    return this.officeNumber;
}

}


module.exports = Manager;