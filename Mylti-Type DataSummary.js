// Q2 Multi-Type Data Summary
let userName2 = "Rohan";        // string
let age = 22;                   // number
let isAdmin = false;            // boolean
let hobbies = ["cricket", "coding"];  // array
let address = { city: "Delhi", pin: 110092 }; // object
let married = null;             // null
let futureData;                 // undefined

console.table([
  { label: "Name", value: userName2, type: typeof userName2 },
  { label: "Age", value: age, type: typeof age },
  { label: "isAdmin", value: isAdmin, type: typeof isAdmin },
  { label: "Hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { label: "Address", value: address, type: typeof address },
  { label: "Married", value: married, type: typeof married },
  { label: "Future Data", value: futureData, type: typeof futureData }
]);
