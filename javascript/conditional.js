// let num = 3;
// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("Empty object");
} else {
  console.log("Object has properties");
}

//switch cases
let role = "admin";
switch (role) {
  case "admin":
    console.log("welcome Admin!");
    break;
  case "user":
    console.log("Welcome User!");
    break;
  default:
    console.log("Please Log In");
}
console.log();

// //ternary operator
//1
// let age = 21;
const message = age >= 18 ? "You can Vote" : "Too young to vote";
console.log(message);

//2
let isLoggedIn = true;
const statusValue = isLoggedIn ? "welcome back!" : "Please log in";
console.log(statusValue);

// 3
// let num;
console.log(num > 0 ? "Positive" : "Negative");

isLoggedIn && console.log("Welcome!");
// let user;
console.log(user?.address?.city ?? "City not available");

const userName = "admin";
const password = "secure123";

//&& operator
if (userName === "admin" && password === "secure123") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

//if-elseif- else
const hour = new Date().getHours();
if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 18) {
  console.log("Good Afternoon !");
} else {
  console.log("Good Evening !");
}

//
// const cartTotal = 140;
// if (cartTotal >= 200) {
//   console.log("You get a 20% discount");
// } else if (cartTotal >= 100) {
//   console.log("You get a 10% discount");
// } else {
//   console.log("No discount available");
// }

//detecting leap year
const year = 2026;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

// //guard clauses - an elegant alternative
function getDiscount(price) {
  if (price < 0) return "Invalid price";
  if (price === 0) return "Free item";

  return price >= 100 ? "10% discount " : "No discount";
}

//handling optional chaining (?.) for safer conditions
const user = { profile: { name: "Alice" } };
// console.log(user.profile?.name);
// console.log(user.setting?.theme); //undefined but no error

//using ?? nullish coalescing operator
// The ?? operator returns the right-side value only when the left side is null or undefined.
// const userName = null;
console.log(userName ?? "Suhani");

// //using .includes() for multiple matches
const fruits = ["apple", "banana", "mango"];
if (fruits.includes("banana")) {
  console.log("Banana Found!");
} else {
  console.log("Not found anything");
}

//using return instead of else in funtion
function getStatus(status) {
  if (status === "active") return "Active";
  return "Inactive";
}
console.log(getStatus());

//handing asynchronous conditions in promises
fetch("https://api.example.com/data").then((respose) => {
  if (!respose.ok) throw new Error("Network error");
  return respose.json();
})
.then(data => console.log(data))
.catch(error => console.log(error))

//Error handing with try...catch in conditions
try {
  JSON.parse('{invalidJson');
}catch (error){
  console.error('Invalid JSON data');

}
let color = "green";
switch (color) {
  case "green":
    console.log("Go");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "red":
    console.log("Stop");
    break;
  default:
    console.log("Invalid color");
}

let num = 13;

if (num % 5 === 0) {
  console.log("Multiple of 5");
} else {
  console.log("Not mutiple of 5");
}

let temp = 12;
if (temp >= 30) {
  console.log(" temp Hot");
} else if (temp < 15) {
  console.log("Cold");
} else {
  console.log("Moderate");
}

let age = 2 ;
if(age > 18){
console.log('You can vote');

}else {
  console.log('You can  not vote');
  
}