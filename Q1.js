// Q1 - Async Coffee Maker
// Simulate 3 async steps: boilWater, brewCoffee, pourCup
// Each returns a Promise that resolves after 1-2 seconds.
// Use Promise chaining and catch errors (random failure).

function randomDelay() {
  return 1000 + Math.floor(Math.random() * 1000); // 1-2s
}

function maybeFail() {
  return Math.random() < 0.2; // 20% chance to fail
}

function boilWater() {
  return new Promise((resolve, reject) => {
    console.log('Boiling water...');
    setTimeout(() => {
      if(maybeFail()) return reject(new Error('Boiler malfunction'));
      console.log('Water boiled.');
      resolve('water');
    }, randomDelay());
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    console.log('Brewing coffee...');
    setTimeout(() => {
      if(maybeFail()) return reject(new Error('Coffee grounds missing'));
      console.log('Coffee brewed.');
      resolve('coffee');
    }, randomDelay());
  });
}

function pourCup(coffee) {
  return new Promise((resolve, reject) => {
    console.log('Pouring into cup...');
    setTimeout(() => {
      if(maybeFail()) return reject(new Error('Cup cracked'));
      console.log('Poured into cup.');
      resolve('done');
    }, randomDelay());
  });
}

// Use Promise chaining
boilWater()
  .then(w => brewCoffee(w))
  .then(c => pourCup(c))
  .then(() => console.log('Coffee ready for the team!'))
  .catch(err => console.error('Coffee process failed:', err.message));
