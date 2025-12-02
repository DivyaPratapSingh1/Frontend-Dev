// Q5 - Callback hell -> async/await refactor
// Five stages: design -> build -> test -> deploy -> celebrate
// Each stage takes ~1s

function stage(name, cb) {
  setTimeout(() => {
    console.log(name);
    cb && cb();
  }, 1000);
}

// 1) Nested callbacks (callback hell)
function pipelineWithCallbacks() {
  stage('design', () => {
    stage('build', () => {
      stage('test', () => {
        stage('deploy', () => {
          stage('celebrate', () => {
            console.log('Pipeline (callbacks) completed');
          });
        });
      });
    });
  });
}

// 2) Promisified stages + async/await
function stagePromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

async function pipelineAsync() {
  // async/await improves readability by enabling linear flow and try/catch
  try {
    await stagePromise('design');
    await stagePromise('build');
    await stagePromise('test');
    await stagePromise('deploy');
    await stagePromise('celebrate');
    console.log('Pipeline (async/await) completed');
  } catch (err) {
    console.error('Pipeline failed:', err);
  }
}

// Demonstration:
console.log('--- Callback version ---');
pipelineWithCallbacks();

setTimeout(() => {
  console.log('--- Async/Await version ---');
  pipelineAsync();
}, 7000); // delay so outputs don't mix too badly

// Comment: async/await flattens nested callbacks into readable sequential code,
// allows try/catch for errors, and it's easier to reason about than deeply nested callbacks.
