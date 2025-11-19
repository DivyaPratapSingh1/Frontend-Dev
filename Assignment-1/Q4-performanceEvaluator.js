// Q4. Academic Performance Evaluator
let marks = [88, 92, 75, 85, 90];
let anyFail = marks.some(m => m < 35);
let total = marks.reduce((a, b) => a + b, 0);
let percentage = total / marks.length;
if (anyFail) console.log("Detained");
else if (percentage >= 85) console.log("Promoted with Distinction");
else if (percentage >= 50) console.log("Promoted");
else console.log("Detained");
console.log("Percentage:", percentage.toFixed(2));