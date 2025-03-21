//difference between slice and substring
let text = "Javascript";
// console.log(text.replace("javascript", "Orange"));
// console.log(text.split(""));

// console.log(text.slice(-4));
// console.log(text.slice(0,3));
// console.log(text.substring(0,3));
// //native ignored
// console.log(text.substring(-3));

//to check a word start with
let str = "hello world";
// console.log(str.startsWith("hello"));

//repeat a word
let star = "*";
// console.log(star.repeat(5));

//how can you check if a string contains only numbers
function isNumeric(str) {
  return !isNaN(str.trim());
}
// console.log(isNumeric("12345"));
// console.log(isNumeric("1234dfd"));

// console.log(text.slice(0,3));


//reverse a word
function reverseString(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseString("sihani"));

//count vowels in a word
function countVowels(str){
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
// console.log(countVowels('Javascript is fun!'));


//how do you extract the domain name from a url string
function getDomain(url){
    return url.split('/')[2];
}
// console.log(getDomain('https://www.example.com/page'));

// function checkFirstLetter(str){
// return str.split('').toUpperCase().join('')
// }
// console.log(checkFirstLetter('suhnai'));


//how can you convert a string object to a string literal
let strObj = new String ('Hello')
console.log(strObj.valueOf());
console.log(String(strObj));


//how can you check if a string ends with a specific word
console.log('Javascript'.endsWith('script'));


//how can you pad a number with leading zeros to make it 5 digits
let number = '43'
console.log(number.padStart(10,'0'));

//how can you repeat a string 4 times
console.log('sorry'.repeat(10));


//how can you count the number of spaces in a string
let wrd = 'Hello world Today Morning suhani'
console.log((wrd.match(/ /g) || []).length);


//how can you check if a string contains only digits
function isDigits(str){
  return /^\d+$/.test(str)
}
console.log(isDigits('12345'));
console.log(isDigits('1234a'));


//how can you capitalize the first letter of each word
function capitalizeWords(str){
  return str.split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
console.log(capitalizeWords('hello world'));
