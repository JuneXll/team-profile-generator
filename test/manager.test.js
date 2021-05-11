const Manager=require("../lib/manager");

describe("Manager class",()=>{
    it("Should set office number with constructor argument",()=>{
        const testON=1;
        const newMan= new Manager("test",1,"test@email.com",testON);

        expected(newMan.testON).toMatch(testSchool);
    })
});

describe("getOfficeNumber",()=>{
    it("Should retrieve office number",()=>{
        const testON=1;
        const newMan=new Manager("test",1,"test@email.com",testON);

        expected(newMan.getOfficeNumber()).toEqual(testON);
    })
});

describe("getRole",()=>{
    it("Should retrieve role for a manager",()=>{
        const testRole="Manager";
        const newMan=new Manager("June",1,"test@email.com",1);

        expected(newMan.getRole()).toBe(testRole);
    })

});