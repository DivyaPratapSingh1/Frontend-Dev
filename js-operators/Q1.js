
// Q1 - Scope Conflict Resolver

let bonus = 5000; // global bonus

function calculateSalary(isPermanent) {
    let salary = 40000; // local salary
    let total = salary;

    if (isPermanent) {
        total += bonus;
    }

    console.log("Is Permanent:", isPermanent);
    console.log("Total Salary:", total);
}

calculateSalary(true);
calculateSalary(false);
