// Calculating Employee and Manager salary

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    annualSalary() {
        return this.salary * 12;
    }
    }

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    
    annualSalary() {
        return super.annualSalary() + 10000;
    }
}

const manager1 = new Manager('DeMatthew', 5000, 'HR');
const manager2 = new Manager('Sally', 6000, 'Marketing');

console.log(manager1.annualSalary());
console.log(manager2.annualSalary())