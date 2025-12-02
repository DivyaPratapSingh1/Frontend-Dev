// Q9 - Debugging the Event Loop
// Predict the order in comments before running:

/*
Predicted output order:
1. Script start
2. Script end
3. Promise callback
4. Timeout callback

Reason: After the current call stack finishes (script), microtasks (Promise callbacks)
run before macrotasks (setTimeout).
*/

console.log('Script start');

setTimeout(() => console.log('Timeout callback'), 0);

Promise.resolve().then(() => console.log('Promise callback'));

console.log('Script end');

// Run this file to compare prediction with actual output.
