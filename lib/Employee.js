class Employee {
    constructor(name,id, email){
        this.name =name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

// functions for getName, getId, getEmail, getRole
//propertires name,id email

// function getName(data){
//     const empName = data.name;   
// }
// function getId(data){
//     const empId = data.id;

// }
// function getEmail(data){
//     const empEmail = data.email;
// }
// function getRole(data){
//     const empRole = data.role;
// }

// <section class = "card">
//      <div class="card-header">
//      <h5 class="card-title">Name</h5>
//      <i>Position</i>
//      </div>
//      <div class="card-body">
//      <p class="card-text">ID: </p>
//      <p class="card-text">Email: </p>
//      <p class="card-text">Office Number: </p>
//      </div>
                
// </section>
// </div>
//</section>

module.exports = Employee;