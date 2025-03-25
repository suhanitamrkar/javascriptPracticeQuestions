let a = 10;
let b = 10.5;
// 2121

let x = 25;
let y = "25";
// console.log(typeof x === "number");
// console.log(typeof y === "number");

// console.log(Number.isFinite(x)); // true
// console.log(Number.isFinite(y));

// let str1 = "100";
// let str2 = "99.99";

// console.log(parseInt(str1));
// console.log(parseFloat(str2));
// console.log(Number(str1));
// console.log(+str2);

// let result = "hello" / 2;
// console.log(result);
// console.log(isNaN(result));
// console.log(Number.isNaN(result));

//age verification in a website
// let age = parseInt(prompt("Enter your age:"));
// if (!isNaN(age) && age >= 18) {
//   console.log("Access granted");
// } else {
//   console.log("Access denied");
// }

//price calculation with discounts
function calcaluteDiscountedPrice(price, discount) {
  let discountAmount = (price * discount) / 100;
  let finalPrice = price - discountAmount;
  return finalPrice.toFixed(2);
}
// console.log(calcaluteDiscountedPrice(1000, 10));

//Emi calculation
function calculateEMI(principal, rate, time) {
  let monthlyRate = rate / (12 * 100);
  let emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, time))/(
    Math.pow(1 + monthlyRate, time) - 1
  );
  return emi.toFixed(2);
}
// console.log(calculateEMI(50000 ,10 ,24));


//currency conversion
function convertCurrency(amount,exchangeRate){
  return (amount * exchangeRate).toFixed(2)
}
// console.log(convertCurrency(1000,82.5),'INR');


//random OTP generation
function generationOTP(){
  return Math.floor(100000 + Math.random() * 900000)
}
// console.log(generationOTP());


//shopping cart total calcalutaion
let cart = [
  {item:'Laptop',price:50000},
  {item:'Phone',price:20000},
  {item:'Headphones',price:5000},
]
let total = cart.reduce((sum ,item) => sum + item.price, 0);
// console.log(`Total Amount: ${total}`);


//percentage calculation
function calculatePercentage(markObtained,totalMarks){
  return ((markObtained / totalMarks) * 100).toFixed(2)
}
// console.log(calculatePercentage(450 ,500));

//finding the maximum and minimum value 
let numbers = [10,30,40,60,50]
// console.log('maximum numbers', Math.max(...numbers));
// console.log('minimum numbers',Math.min(...numbers));

//compound interest calculation
function compundInterest(principal,rate,time){
  return (principal * Math.pow(1 + rate / 100, time)).toFixed(2)
}
// console.log(compundInterest(1000,5,2));

//hexidecimal to decimal conversion
// console.log(parseInt('1A',16));

//countdown timer
// let seconds = 10;
// let timer = setInterval(() => {
// console.log(seconds);
// seconds--;
// if(seconds < 0) clearInterval(timer)

// },1000)

//time difference calculation
let date1 = new Date('2023-01-01')
let date2 = new Date('2023-12-31')
let diff = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)
console.log(diff);

//convert decimal to binary 
console.log((10).toString(2));
