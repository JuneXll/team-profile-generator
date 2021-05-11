const Engineer=require("../lib/engineer");

describe("Engineer class",()=>{
    it("Should set github with constructor argument",()=>{
        const testGit="junexll";
        const newEngi= new Engineer("test",1,"test@email.com",testGit);

        expect(newEngi.github).toBe(testGit);
    })
});

describe("getGithub",()=>{
    it("Should retrieve github",()=>{
        const testGit="junexll";
        const newEngi=new Engineer("test",1,"test@email.com",testGit);

        expect(newEngi.getGithub()).toBe(testGit);
    })
});

describe("getRole",()=>{
    it("Should retrieve role for engineer",()=>{
        const testRole="Engineer";
        const newEngi=new Engineer("June",1,"test@email.com","junexll");

        expect(newEngi.getRole()).toBe(testRole);
    })

});