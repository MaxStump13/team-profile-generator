const { expect } = require("@jest/globals");
const { describe } = require("jest-circus");
const { exitCode } = require("process");
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");
const intern = new Intern("max", "3", "max@test.com", "PSU" );
//tests for intern subclass, tests if parent class functions and getSchool function returns correct value

describe("Engineer data test", () => {
    it("should take in engineer info", () =>{
        
        expect(intern.name).toEqual("max");
        expect(intern.id).toEqual("3");
        expect(intern.email).toEqual("max@test.com");
        expect(intern.school).toEqual("PSU");

    })
    
});
describe("function to get Intern name", () =>{
    it("should return the Intern name", () =>{
        expect(intern.getName()).toEqual("max")
    })
});
describe("function to get Intern id", () =>{
    it("should return the Intern id", () =>{
        expect(intern.getId()).toEqual("3")
    })
});
describe("function to get Intern email", () =>{
    it("should return the Intern email", () =>{
        expect(intern.getEmail()).toEqual("max@test.com")
    })
});
describe("function to get Intern school", () =>{
    it("should return the Intern school", () =>{
        expect(intern.getSchool()).toEqual("PSU")
    })
});
describe("function to get role", () =>{
    it("should return the role Intern", () =>{
        expect(intern.getRole()).toEqual("Intern")
    })
});