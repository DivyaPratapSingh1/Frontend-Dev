// Q1 Personalized Login Greeting
let userName = "Daksh";
let currentHour = new Date().getHours();

if (currentHour < 12) {
  console.log(`Good Morning ${userName}!`);
} else if (currentHour >= 12 && currentHour < 17) {
  console.log(`Good Afternoon ${userName}!`);
} else {
  console.log(`Good Evening ${userName}!`);
}
