
// Q8 - Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;

cart.forEach(p => {
    let discount = 0;

    if (p.category === "electronics") discount = 0.10;
    else if (p.category === "fashion") discount = 0.05;

    p.finalPrice = p.price - p.price * discount;
    total += p.finalPrice;
});

if (total > 50000) total *= 0.95;

console.log("Final Total:", total);
