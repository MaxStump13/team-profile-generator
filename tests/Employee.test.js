const Employee = require("../lib/Employee")
const { expect } = require("@jest/globals");
const { describe } = require("jest-circus");
const { exitCode } = require("process");
const employee = new Employee("max", "3", "max@test.com" );
//tests for employee class, checks if functions in employee class return correct values
describe("Engineer data test", () => {
    it("should take in engineer info", () =>{
        
        expect(employee.name).toEqual("max");
        expect(employee.id).toEqual("3");
        expect(employee.email).toEqual("max@test.com");

    })
    
});
describe("function to get employee name", () =>{
    it("should return the employee name", () =>{
        expect(employee.getName()).toEqual("max")
    })
});
describe("function to get employee id", () =>{
    it("should return the employee id", () =>{
        expect(employee.getId()).toEqual("3")
    })
});
describe("function to get employee email", () =>{
    it("should return the employee email", () =>{
        expect(employee.getEmail()).toEqual("max@test.com")
    })
});
describe("function to get role", () =>{
    it("should return the role Employee", () =>{
        expect(employee.getRole()).toEqual("Employee")
    })
});
