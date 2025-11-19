// Q2. Multi-Type Data Summary
let username = "Divya";
let age = 20;
let isStudent = true;
let hobbies = ["coding", "gaming"];
let profile = { city: "Vrindavan", course: "BCA" };
let score = null;
let extraInfo;
console.table({
  username: { value: username, type: typeof username },
  age: { value: age, type: typeof age },
  isStudent: { value: isStudent, type: typeof isStudent },
  hobbies: { value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  profile: { value: profile, type: typeof profile },
  score: { value: score, type: "null" },
  extraInfo: { value: extraInfo, type: typeof extraInfo }
});