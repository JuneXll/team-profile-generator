const Employee=require("../lib/employee");

describe("Employee class", ()=>{
    it("Creates a new instance of employee",()=>{
        const newEmployee= new Employee();

        expect(typeof(newEmployee)).toBe("object");
    })

    it("Should set name with constructor argument",()=>{
        const testName="June";
        const newEmployee= new Employee(testName);

        expect(newEmployee.name).toBe(testName);
    })

    it("Should set id with constructor argument",()=>{
        const testId=1;
        const newEmployee=new Employee("test",testId);

        expect(newEmployee.id).toBe(testId);
    })

    it("Should set email with constructor argument",()=>{
        const testEmail="test@email.com";
        const newEmployee=new Employee("test",1,testEmail);

        expect(newEmployee.email).toBe(testEmail);
    })
});

describe("getName",()=>{
    it("Should retrieve name for employee",()=>{
        const testName="June";
        const newEmployee=new Employee(testName);

        expect(newEmployee.getName()).toBe(testName);
    })

});

describe("getId",()=>{
    it("Should retrieve id for employee",()=>{
        const testId=1;
        const newEmployee=new Employee("test",testId);

        expect(newEmployee.getId()).toBe(testId);
    })

});

describe("getEmail",()=>{
    it("Should retrieve email for employee",()=>{
        const testEmail="test@email";
        const newEmployee=new Employee("test",1,testEmail);

        expect(newEmployee.getEmail()).toBe(testEmail);
    })

});

describe("getRole",()=>{
    it("Should retrieve role for employee",()=>{
        const testRole="Employee";
        const newEmployee=new Employee("June",1,"test@email.com");

        expect(newEmployee.getRole()).toBe(testRole);
    })

});