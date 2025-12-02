// Q10 - Async Delivery Pipeline
// Steps: takeOrder -> prepare -> pack -> dispatch -> deliver
// Each step returns a Promise with random 1-2s delay and random success/failure
// runPipeline uses async/await and try/catch to control flow

function randDelay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function maybeFail(prob=0.15) {
  return Math.random() < prob;
}

function step(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(maybeFail(0.15)) {
        reject(new Error(name + ' failed'));
      } else {
        resolve(name + ' done');
      }
    }, randDelay());
  });
}

async function runPipeline() {
  console.log('Start Pipeline');
  try {
    console.log('Step 1: Order taken');
    await step('takeOrder');

    console.log('Step 2: Food prepared');
    await step('prepare');

    console.log('Step 3: Package ready');
    await step('pack');

    console.log('Step 4: Out for delivery');
    await step('dispatch');

    await step('deliver');
    console.log('Delivery completed!');
  } catch (err) {
    console.error('Pipeline failed!', err.message);
  }
}

// Execute
runPipeline();

// Comments:
// - Each await pauses the async function until the Promise resolves/rejects.
// - If a step rejects, control jumps to catch so subsequent steps are not executed.
// - The event loop runs Promises and timers; awaiting a Promise yields control so
//   other tasks can run while waiting.
