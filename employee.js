// JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

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