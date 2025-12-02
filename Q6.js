// Q6 - E-Commerce Dashboard: Product Card Fetcher
// Simulate fetching product cards asynchronously. Use async/await and try/catch.
// If an error occurs, display a friendly message.

function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() < 0.25) return reject(new Error('Network error'));
      resolve([
        {id:1, name:'Laptop'},
        {id:2, name:'Shoes'},
        {id:3, name:'Watch'},
      ]);
    }, 1200);
  });
}

async function loadProductCards() {
  try {
    console.log('Loading products...');
    const products = await fetchProducts();
    console.log('Products loaded:', products);
    // In UI you'd render cards; here we just log them
  } catch (err) {
    console.error('Failed to load products. Please try again.');
  }
}

loadProductCards();
