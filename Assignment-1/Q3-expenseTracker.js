// Q3. Monthly Expense Tracker
let expenses = [3000, 1200, 8000, 1500, 1000];
let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;
total += total * 0.10;
console.log("Total (after tax):", total.toFixed(2));
console.log("Average Expense:", average.toFixed(2));