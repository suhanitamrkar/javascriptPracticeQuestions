//1 for loop
// for (let i = 0; i <= 10; i++) {
//   //   console.log(i);
// }

// //2 while loop
// let i = 1;
// while (i <= 5) {
//   //   console.log(i);
//   i++;
// }

// //3 do...while
// let j = 1;
// do {
//   //   console.log(i);
//   i++;
// } while (i <= 5);

// //4 for...in
// const person = {
//   name: "suhani",
//   age: 21,
//   city: "Indore",
// };
// for (let key in person) {
//   //   console.log(`${key} : ${person[key]}`);
// }

// //5 for...of
// const fruits = ["Apple", "Banana", "Cherry"];
// for (let fruit of fruits) {
//   // console.log(fruit);
// }

// //questions
// //print all even numbers from 1  to 20
// // for (let i = 1; i <= 20; i++) {
// //   if (i % 2 === 0) {
// //     // console.log(i);
// //   }
// // }

// // //sum of numbers from 1 to 100
// // let sum = 0;
// // for (let i = 1; i <= 100; i++) {
// //   sum += i;
// // }
// // // console.log(`Sum : ${sum}`);

// // //reverse a string
// // const str = "Hello";
// // let reversed = "";
// // for (let i = str.length - 1; i >= 0; i--) {
// //   reversed += str[i];
// // }
// // console.log(reversed);

// // //count vowels in a string
// // const str2 = "Javascript is amazing";
// // let count = 0;
// // for (let char of str2) {
// //   if ("aeiou".includes(char)) {
// //     count++;
// //   }
// // }
// // // console.log(`Vowels : ${count}`);

// // //find the largest number in array
// // const numbers = [5, 23, 2, 1, 4, 5, 89];
// // let largest = numbers[0];
// // for (let number of numbers) {
// //   if (number > largest) {
// //     largest = number;
// //   }
// // }
// // // console.log(`Largest number : ${largest}`);

// // //create a multipication table
// // const number = 5;
// // for (let i = 1; i <= 10; i++) {
// //   //   console.log(`${number} x ${i} = ${number * i}`);
// // }

// // //filter out negative numbers from an array
// // const numbers2 = [10, 23, 1, -2, -3];
// // const positiveNumber = numbers2.filter((num) => num >= 0);
// // // console.log(positiveNumber);

// // //Generate Fibonacci series
// // let a = 0,
// //   b = 1;
// // for (let i = 0; i < 10; i++) {
// //   console.log(a);
// //   [a, b] = [b, a + b];
// // }

// //calculate factorial of a number
// let num = 5;
// let factorial = 1;
// for (let i = 1; i <= num; i++) {
//   factorial *= i;
// }
// // console.log(`Factorial : ${factorial}`);

// //filering even numbers
// const number = [12, 3, 4, 5, 6, 43, 43];
// const even = [];
// for (let num of number) {
//   if (num % 2 === 0) even.push(num);
// }
// // console.log(`Even numbers : ${even}`);

// //find prime numbers in a range
// function isPrime (num){
//     if(num < 2) return false;
//     for(let i = 2; i < num; i++){
//         if(num % i === 0) return false
//     }
// }
// for(let i = 1; i <= 20; i++){
//   if(isPrime(i)) console.log(i);

// }

// //checking palindrome
// const word = 'pop'
// const reversed = word.split('').reverse().join('');
// // console.log(word === reversed ? 'Palindrome' : "Not a Palindrome");

// //creating a countdown timer
// let seconds = 5;
// while (seconds >= 0){
//   // console.log(`Time left : ${seconds} seconds`);
//   seconds--
// }

// //Printing fibanacci series
// let a = 0, b = 1;
// // console.log(a);
// // console.log(b);
// for(let i = 2; i < 10; i++){
//   let next = a + b;
//   // console.log(next);
//   a = b;
//   b = next;

// }

// //generating star patterns
// for(let i = 1; i <= 5; i++){
//   // console.log('*'.repeat(i));

// }

// //calculating factorial
// let num1 = 5;
// let fact = 1;
// for(let i = 1; i <= num1; i++){
//   fact *= i;
// }
// // console.log(`Factorial: ${fact}`);

// //finding common elements in arrays
// const arr1 = [2,3,4,6,7,2]
// const arr2 = [3,4,2,35]
// const common = arr1.filter(item => arr2.includes(item))
// // console.log(`Common Elements: ${common}`);

// //removing deplicates from an array
// const items = [1,2,3,4,4,2,2]
// const uniqueItems = [...new Set (items)]
// // console.log(`Unique Elements: ${uniqueItems}`);

// //sum of digits in a number
// let number2 = 12345;
// let sum = 0;
// while (number2) {
//   sum += number2 % 10;
//   number2 = Math.floor(number2 / 10)
// }
// console.log(`Sum of digits:${sum}`);

//printing odd numbers in a range
// for(let i = 1; i <= 10; i++){
//   // if( i % 2 !== 0 ) console.log(i);

// }

// //finding the  largest word in a sentence
// const sentence = 'Learning Javascript is fun !';
// const words = sentence.split(' ');
// // console.log(words);

// let largest = '';
// for(let word of words){
//   if(word.length > largest.length)largest = word
// }
// // console.log(`Longest word : ${largest} `);

// //checking armstrong number
// // const num3 = 143
// // const digits = [...String(num)];
// // const result = digits.reduce((acc,digit) => acc + Math.pow(Number(digit),3),0)
// // console.log(result === num3 ? 'Armstrong Number' : 'Not an armstrong number');

// //extracting unique characters from a string
// const  text = 'hello world';
// const uniqueChars = [...new Set (text.replace(/\s/g,''))]
// // console.log(`Unique characters : ${uniqueChars.join('')}`);

// //creating a simple progress bar
// for(let i = 0; i <= 100; i += 10){
//   // console.log(`Progress: ${i}%`);

// }

//practice  question
// let arr = [12,32,54,67,45]
// let str = 'Hello'
// let final = str.split('').reverse().join('')
// console.log(final);

// let array = [2,-3,32,-1,-4]
// let result = array.filter((num) => num >= 0);
// console.log(result);

const product = ["Shoes", "Shirts", "Jeans", "Jackets"];
for (let i = 0; i < product.length; i++) {
  // console.log(`Product List ${i + 1}: ${product[i]}`);
}

const prices = [100, 200, 400, 130];
let total = 0;
for (let price of prices) {
  total += price;
}
// console.log(`Total Bill:${total}`);

const word = "Javascript is powerfull";
const wordCount = word.split(" ").length;
// console.log(`Word count : ${wordCount}`);

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  // console.log(i);
}

const numbers = [1, 3, 10, 5, 7, 5, 7];
for (let num of numbers) {
  if (num === 10) {
    // console.log('Number 10 found, stopping the loop.');
    break;
  }
  // console.log(num);
}

// const data = '{"name ":"john","age":30';
// try {
//   const parsedData = JSON.parse(data);
//   console.log(parsedData);

// }catch (error){
//   console.log('Error parsing data:',error.message);

// }finally{
//   console.log('Parsing attempt finished');

// }

for (let i = 1; i <= 5; i++) {
  // console.log(i);
}
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
// console.log(` Total Sum : ${sum} `);

for (let i = 3; i <= 30; i++){
  if( i % 3 === 0){
    console.log(i);
    
  }
}
let str = 'Hello '
for (let i = 1; i <= 5; i++){
  console.log('Hello');
  
}

let fact = 1;
for(let i = 1; i <= 5; i++){
  fact *= 1;
}
console.log(`Factorial of 5 : ${fact}`);

// for(let i = 1; i <= 10; i--){
//   console.log(i);
  
// }