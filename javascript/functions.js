//simple exmaple of function delacaration
function calculateArea(length, width) {
  return length * width;
}
// console.log(calculateArea(3, 5));

//function expression
const greet = function (name) {
  return `Hello ${name} !`;
};
// console.log(greet("Suhani"));

//arrow function
const multiply = (a, b) => {
  return a * b;
};
// console.log(multiply(23, 54));

//anonymous function
document.getElementById("btn").addEventListener("click", function () {
  // console.log("Button Clicked");
});

//Immediately invoked function expression (IIFE)
(function () {
  // console.log("IIFE exucuted!");
})();

//questions
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(23, 43));

// function checkNumber(num) {
//   if (num % 2 === 0) {
//     return console.log(`Number ${num} is even`);
//   } else {
//     console.log(`Number ${num} is odd`);
//   }
// }
// checkNumber(9999);

// function checkAge(age) {
//   if (age >= 18) {
//     console.log("Your are eligible for voting");
//   } else {
//     console.log("Your are not eligible for voting");
//   }
// }
// checkAge(12)

// function random (num){
//     return Math.random(Math.floor(num))
// }
// console.log(random());

// function capitalizes (str){
//     return str[0].toUpperCase()
// }
// console.log(capitalizes('suhani'));

//Password strength checker
function isStrongPassword(password) {
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  if (password.length >= 8 && hasNumber && hasSpecialChar) {
    return "Strong Password";
  } else {
    return "Weak Password";
  }
}
// console.log(isStrongPassword("Pass@1123"));
// console.log(isStrongPassword("234"));

//calculate discounted price
const calculateDiscount = function (price, discount = 10) {
  return price - (price * discount) / 100;
};
// console.log(calculateDiscount(1000));
// console.log(calculateDiscount(2000, 20));

//Email validator
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
// console.log(isValidEmail("user@example.com"));
// console.log(isValidEmail("invalid-emial.com"));

//username generator
const generatorUsername = (name) => {
  return name.slice(0, 3).toLowerCase() + Math.floor(Math.random() * 1000);
};
// console.log(generatorUsername("Jonathan"));
// console.log(generatorUsername("suhani"));

//word counter
function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}
// console.log(countWords("Hello world! Welcome to coding."));
// console.log(countWords("Hello world"));

//calculate GST
function calculateGST(price, rate = 18) {
  return price + (price * rate) / 100;
}
// console.log(calculateGST(1000));

//temperature converter
const toFagrenheit = function (celsius) {
  return (celsius * 9) / 5 + 32;
};
// console.log(toFagrenheit(23));

//age calculator
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
// console.log(calculateAge(1972));

//shopping cart total
function calculateTotal(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}
// console.log(calculateTotal(100, 200, 300));

//bmi calculator
const calculateBMI = function (weight, height) {
  const bmi = weight / (height * height);

  if (bmi < 18.5) return "Underweight";
  if (bmi < 24.9) return "Healthy";
  if (bmi < 29.9) return "overweight";
  return "Obese";
};
// console.log(calculateBMI(70,1.24));

//what is pass by value and pass by refernce
//primitives data types - string , number ,null
//undefined, symbol,boolean,bigint
function updateValue(num) {
  num = num * 2;
  // console.log('Inside funtion:',num);
}
let x = 10;
updateValue(x);
updateValue(34);
// console.log('Outside function:',x);

//pass by reference
//objects,arrays,functions
function updatePerson(person) {
  person.name = "john";
  // console.log('Inside funtion:',person);
}
let personObj = { name: "Alice" };
updatePerson(personObj);
// console.log('Outside function:',personObj);

function doubleValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
}
let numbers = [1, 2, 3, 4];
doubleValues(numbers);
// console.log('Update array:',numbers);

//nested funtion
function greetUser(name) {
  function getGreeting() {
    return `Hello, ${name}!`;
  }
  return getGreeting();
}
console.log(greetUser("Alice"));

function calculateArea(length, width) {
  function multiply() {
    return length * width;
  }
  return `Area: ${multiply()} sq units`;
}
console.log(calculateArea(23, 54));

//Protecting data with nested functions(Encapsulation)
// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const increment = counter();
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

//Nested function for filtering data
function filterArray(arr, threshold) {
  function isGreaterThanThreshold(num) {
    return num > threshold;
  }
  return arr.filter(isGreaterThanThreshold);
}
const num = [10, 25, 30, 5, 23];
console.log(filterArray(num, 20));

//understanding closures
function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    console.log(`Count: ${count}`);
  }
  return innerFunction;
}
const counter = outerFunction()
counter()
