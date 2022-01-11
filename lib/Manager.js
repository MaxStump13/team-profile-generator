const Employee = require("./Employee");

//add functions to for getRole
// properties office number
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

{/* <section class = "card">
    <div class="card-header">
        <h5 class="card-title">${proj-man}</h5>
        <h5>Manager</h5>
    </div>
    <div class="card-body">
        <p class="card-text">ID: ${proj-man-id}</p>
         <p class="card-text">Email: ${proj-man-email} </p>
        <p class="card-text">Office Number: ${proj-man-office}</p>
    </div>      
</section> */}

module.exports = Manager;