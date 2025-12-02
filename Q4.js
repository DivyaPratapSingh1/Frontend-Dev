// Q4 - Employee Inheritance (classes + polymorphism)
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  work() {
    console.log(this.name + ' works in ' + this.department);
  }
}

class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }
  // Override work() to show manager behavior
  work() {
    console.log(this.name + ' manages ' + this.department);
  }
}

// Demonstrate runtime polymorphism
const e = new Employee('Ravi', 'Engineering');
const m = new Manager('Sima', 'Engineering');

e.work(); // Employee behavior
m.work(); // Manager overridden behavior (polymorphism)
