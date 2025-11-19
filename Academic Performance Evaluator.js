// Q4 Academic Performance Evaluator
let marks = [88, 92, 80, 75, 90]; // 5 subjects
let anyFail = marks.some(m => m < 35);
let totalMarks = marks.reduce((a, b) => a + b, 0);
let percentage = totalMarks / marks.length;

if (anyFail) {
  console.log("Detained (Failed in a subject)");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
console.log("Percentage:", percentage.toFixed(2));
