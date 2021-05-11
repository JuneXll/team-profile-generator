const Intern=require("../lib/intern");

describe("Intern class",()=>{
    it("Should set school with constructor argument",()=>{
        const testSchool="UM";
        const newInt= new Intern("test",1,"test@email.com",testSchool);

        expect(newInt.school).toBe(testSchool);
    })
});

describe("getSchool",()=>{
    it("Should retrieve school",()=>{
        const testSchool="um";
        const newInt=new Intern("test",1,"test@email.com",testSchool);

        expect(newInt.getSchool()).toBe(testSchool);
    })
});

describe("getRole",()=>{
    it("Should retrieve role for an intern",()=>{
        const testRole="Intern";
        const newInt=new Intern("June",1,"test@email.com","um");

        expect(newInt.getRole()).toBe(testRole);
    })

});