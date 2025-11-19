
// Q9 - Odd–Even Number Analyzer

let nums = [];
let result = [];

for (let i = 1; i <= 30; i++) nums.push(i);

nums.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) result.push("FizzBuzz");
    else if (num % 2 === 0) result.push("Even");
    else result.push("Odd");
});

console.log(result);
