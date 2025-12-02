// Q6 - E-Commerce Inventory System (array methods)
const products = [
  {id:1, name:'Laptop', category:'Electronics', price:50000, stock:5},
  {id:2, name:'Mouse', category:'Accessories', price:500, stock:50},
  {id:3, name:'Shoes', category:'Fashion', price:1500, stock:2},
  {id:4, name:'Keyboard', category:'Accessories', price:1200, stock:0},
  {id:5, name:'Phone', category:'Electronics', price:20000, stock:10},
];

// 1. getLowStockProducts -> stock <= 5
function getLowStockProducts(items) {
  return items.filter(p => p.stock <= 5);
}

// 2. sortProductsByPrice -> ascending
function sortProductsByPrice(items) {
  return [...items].sort((a, b) => a.price - b.price);
}

// 3. calculateTotalInventoryValue -> sum of price * stock
function calculateTotalInventoryValue(items) {
  return items.reduce((acc, p) => acc + p.price * p.stock, 0);
}

// 4. groupByCategory -> object grouping
function groupByCategory(items) {
  return items.reduce((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
}

// Tests
console.log('Low stock:', getLowStockProducts(products));
console.log('Sorted by price:', sortProductsByPrice(products));
console.log('Total inventory value:', calculateTotalInventoryValue(products));
console.log('Grouped by category:', groupByCategory(products));
