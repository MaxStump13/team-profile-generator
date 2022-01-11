const { expect } = require("@jest/globals");
const { describe } = require("jest-circus");
const { exitCode } = require("process");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const engineer = new Engineer("max", "3", "max@test.com", "maxstump13" );

describe("Engineer data test", () => {
    it("should take in engineer info", () =>{
        
        expect(engineer.name).toEqual("max");
        expect(engineer.id).toEqual("3");
        expect(engineer.email).toEqual("max@test.com");
        expect(engineer.gitHub).toEqual("maxstump13");

    })
    
});
describe("function to get engineer name", () =>{
    it("should return the engineers name", () =>{
        expect(engineer.getName()).toEqual("max")
    })
});
describe("function to get engineer id", () =>{
    it("should return the engineers id", () =>{
        expect(engineer.getId()).toEqual("3")
    })
});
describe("function to get engineer email", () =>{
    it("should return the engineers email", () =>{
        expect(engineer.getEmail()).toEqual("max@test.com")
    })
});
describe("function to get engineer GitHub profile", () =>{
    it("should return the engineers github", () =>{
        expect(engineer.getGithub()).toEqual("maxstump13")
    })
});
describe("function to get role", () =>{
    it("should return the role Engineer", () =>{
        expect(engineer.getRole()).toEqual("Engineer")
    })
});