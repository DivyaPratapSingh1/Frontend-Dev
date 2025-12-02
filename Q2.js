// Q2 - Task Scheduler: microtask vs macrotask demo
// Logs: Start, schedules macrotask (setTimeout), microtask (Promise.then), synchronous log, End
// Microtasks (Promise.then) run before macrotasks (setTimeout) after current synchronous code.

// Explanation in comments:
// The event loop executes the current call stack, then processes microtasks queue (Promises),
// and only after microtasks are drained does it start processing macrotasks (timers, IO).

console.log('Start');

setTimeout(() => {
  console.log('setTimeout callback (macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise.then callback (microtask)');
});

console.log('Synchronous log');

console.log('End');

// Expected order:
// Start
// Synchronous log
// End
// Promise.then callback (microtask)
// setTimeout callback (macrotask)
