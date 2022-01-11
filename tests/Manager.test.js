const { expect } = require("@jest/globals");
const { describe } = require("jest-circus");
const { exitCode } = require("process");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const manager = new Manager("max", "3", "max@test.com", "123" );

describe("Manager data test", () => {
    it("should take in Manager info", () =>{
        
        expect(manager.name).toEqual("max");
        expect(manager.id).toEqual("3");
        expect(manager.email).toEqual("max@test.com");
        expect(manager.officeNumber).toEqual("123");

    })
    
});
describe("function to get manager's name", () =>{
    it("should return the manager's name", () =>{
        expect(manager.getName()).toEqual("max")
    })
});
describe("function to get manager id", () =>{
    it("should return the manager id", () =>{
        expect(manager.getId()).toEqual("3")
    })
});
describe("function to get manager email", () =>{
    it("should return the manager email", () =>{
        expect(manager.getEmail()).toEqual("max@test.com")
    })
});
describe("function to get manager office number", () =>{
    it("should return the managers office number", () =>{
        expect(manager.getOfficeNumber()).toEqual("123")
    })
});
describe("function to get role", () =>{
    it("should return the role Manager", () =>{
        expect(manager.getRole()).toEqual("Manager")
    })
});