
// Q6 - Event-Based Counter Simulation

let count = 0;

function counterSystem() {
    function increment() {
        count++;
        console.log("Incremented:", count);
    }

    function decrement() {
        count--;
        console.log("Decremented:", count);
    }

    // simulate clicks
    increment();
    increment();
    decrement();
}

counterSystem();
