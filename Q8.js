// Q8 - Order processing with retry logic
// submitOrder fails 50% of time; processOrder tries up to 3 times

function submitOrder(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? reject(new Error('Submit failed')) : resolve('Order accepted: ' + orderId);
    }, 700);
  });
}

async function processOrder(orderId) {
  const maxAttempts = 3;
  for(let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await submitOrder(orderId);
      console.log('Attempt', attempt + ':', 'Success -', res);
      return res;
    } catch (err) {
      console.log('Attempt', attempt + ':', 'Failed');
      if(attempt === maxAttempts) {
        throw new Error('Order could not be processed');
      }
    }
  }
}

(async () => {
  try {
    await processOrder(123);
  } catch (err) {
    console.error(err.message);
  }
})();
