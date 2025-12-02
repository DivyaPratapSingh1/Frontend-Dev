// Q3 - Product Discount System (constructor + prototype)
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// Prototype method to apply discount and return new price
Product.prototype.applyDiscount = function(percent) {
  if (percent < 0 || percent > 100) throw new Error('Invalid discount percent');
  const discounted = this.price - (this.price * percent) / 100;
  return Number(discounted.toFixed(2));
};

// Create products
const p1 = new Product('Laptop', 50000);
const p2 = new Product('Shoes', 1500);
const p3 = new Product('Watch', 2500);

// Apply discounts
console.log(p1.name, 'new price:', p1.applyDiscount(10));
console.log(p2.name, 'new price:', p2.applyDiscount(20));
console.log(p3.name, 'new price:', p3.applyDiscount(5));

// Abstraction: the applyDiscount method hides the calculation details,
// so consumers simply call applyDiscount(percent) without worrying about internals.
