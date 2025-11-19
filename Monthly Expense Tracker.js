// Q3 Monthly Expense Tracker
let expenses = [5000, 1200, 8000, 2000, 1500]; // food, travel, rent, bills, leisure
let total = expenses.reduce((sum, v) => sum + v, 0);
let average = total / expenses.length;

total += total * 0.10; // 10% tax

console.log("Total (Before Tax):", (total / 1.10).toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount with Tax:", total.toFixed(2));
