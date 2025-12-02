// Q3 - Callback to Promise migration
// Original:
// function fetchBugs(callback) { setTimeout(() => callback([...]), 1000); }

// Convert to Promise-based getBugs()
function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fail = Math.random() < 0.2; // 20% chance to fail
      if(fail) return reject(new Error('API Error: failed to fetch bugs'));
      resolve(['UI glitch', 'API timeout', 'Login failure']);
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.log('Bugs received:');
    console.table(bugs.map((b, i) => ({id: i+1, bug: b})));
  })
  .catch(err => {
    console.error('Failed to fetch bugs:', err.message);
  });
