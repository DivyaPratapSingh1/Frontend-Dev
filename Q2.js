// Q2 - Online Food Ordering (map + Error Handling)
const menu = {
  'burger': 120,
  'pizza': 300,
  'fries': 80,
  'cola': 30
};

function calculateBill(orderItems) {
  try {
    // Map order items to prices (throws if item not found)
    const prices = orderItems.map(item => {
      if (!menu.hasOwnProperty(item)) {
        throw new Error('Invalid menu item: ' + item);
      }
      return menu[item];
    });
    // Reduce to total
    const total = prices.reduce((acc, p) => acc + p, 0);
    return total;
  } catch (err) {
    // Rethrow so caller can handle or display
    throw err;
  }
}

// Example usage
try {
  console.log('Bill for [burger, fries, cola]:', calculateBill(['burger','fries','cola']));
  console.log('Bill for [pizza, tacos]:', calculateBill(['pizza','tacos'])); // tacos invalid
} catch (err) {
  console.error('Error calculating bill:', err.message);
}
