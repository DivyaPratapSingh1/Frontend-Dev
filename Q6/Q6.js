class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }
  getAnnualSalary() { return this.salary * 12; }
  applyBonus(percent) { this.salary += (this.salary * percent) / 100; }
}
const employees = [
  new Employee(1, "Aman", "HR", 30000),
  new Employee(2, "Ravi", "IT", 40000),
  new Employee(3, "Sita", "IT", 35000),
  new Employee(4, "John", "Sales", 28000),
  new Employee(5, "Karan", "IT", 50000),
];
employees.forEach(e => console.log(e.name, e.getAnnualSalary()));
const total = employees.reduce((s, e) => s + e.getAnnualSalary(), 0);
console.log("Total Annual Payout:", total);