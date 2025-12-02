// Q4 - DevOps Delay: Promise.all and Promise.race
function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() < 0.2) return reject(new Error('Server A failed'));
      resolve('Server A done (2s)');
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() < 0.2) return reject(new Error('Server B failed'));
      resolve('Server B done (3s)');
    }, 3_000);
  });
}

Promise.all([serverA(), serverB()])
  .then(results => {
    console.log('Deployment completed for all servers');
    console.log(results);
  })
  .catch(err => {
    console.error('Deployment error (all):', err.message);
  });

Promise.race([serverA(), serverB()])
  .then(first => {
    console.log('Fastest response:', first);
  })
  .catch(err => {
    console.error('Deployment error (race):', err.message);
  });
