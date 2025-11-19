// Q8 Employee Salary Projection
let salary = 30000;
let increment = 10; // % per year
let projection = [];

for (let year = 1; year <= 5; year++) {
  salary += salary * (increment / 100);
  projection.push({ Year: year, Salary: Math.round(salary) });
}

console.table(projection);
