//e-commerce cart calculate total price
function calculateTotal(cart) {
  return cart.reduce((totl, price) => totl + price, 0);
}
let cart = [200, 150, 50, 100];
// console.log(calculateTotal(cart));

//filtering available products
function countAvailableProducts(stock) {
  return stock.filter((item) => item).length;
}
let stock = [true, false, true, true, false, true];
// console.log(countAvailableProducts(stock));

//most expensive product
let prices = [500, 1500, 1200, 800, 2000, 200];
let maxPrice = Math.max(...prices);
let miniPrice = Math.min(...prices);
// console.log(miniPrice);
// console.log(maxPrice);

//sorting student scores
let scores = [84, 34, 23, 90, 89];
scores.sort((a, b) => b - a);
// console.log(scores);

//checking if a user exists
function userExists(users, username) {
  return users.includes(username);
}
let users = ["john_doe", "jame_smith", "admin"];
// console.log(userExists(users,'admin'));
// console.log(userExists(users,'guest'));

//remove duplicates from an array
let number = [1, 2, 2, 3, 34, 5, 6, 5, 6, 7, 7, 9, 9];
let uniqueNumbers = [...new Set(number)];
// console.log(uniqueNumbers);

//counting words in a paragraph
function wordCount(para) {
  let words = para.toLowerCase().split(" ");
  let count = {};
  words.forEach((word) => (count[word] = (count[word] || 0) + 1));
  return count;
}
// console.log(wordCount('hello world hello everyone'));

//find common elements between two arrays
function commonElements(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}
console.log(commonElements([1, 2, 3], [2, 3, 4, 5]));

//finding the longest word in a sentence
function longestWord(sentence) {
  return sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}
console.log(longestWord('JavaScript is amazing dfdsfdfdsada'));


//find even numbers in an array
let numbers = [10,15,20,25,30,35]
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);


//suffle an array 
function shuffleArray (arr){
    return arr.sort(() => Math.random() - 0.5)

}
console.log(shuffleArray([1,2,3,4,5,6]));
