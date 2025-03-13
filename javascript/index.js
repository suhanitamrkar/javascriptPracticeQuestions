// console.log('suhani');
// class Car {
//     constructor (brand){
//         this.carName = brand

//     }
//     present(){
//         return 'I have a ' + this.carName
//     }
// }
// class Model extends Car {
//     constructor (brand,mod){
//         super (brand);
//         this.modal = mod
//     }
//     static hello (x){
//         return 'Hello ' + x.modal
//     }
//     show(){
//         return this.present() + ',it is a ' + this.modal
//     }
// }

// let myCar = new Model ('Ford','Mustang')
// console.log(myCar);

// function myDisplayer (some){
//     document.getElementById('demo').innerHTML = some;

// }
// function myCalculator(num1,num2){
//     let sum = num1 + num2;
//     return sum
// }
// let result = myCalculator(5,4)
// console.log(result);

// function myDisplayer (some){
//     document.getElementById('demo').innerHTML = some;

// }
// function myCalculator(num1,num2,myCallback){
//     let sum = num1 + num2;
// myCallback(sum)
//     // return sum
// }
// let result = myCalculator(5,4,myDisplayer)
// console.log(result);

// const myNumber = [2, 3, 4, 5, 3, 2, 2, 2, 4, 5];
// const posNumbers = removeNeg(myNumber, (x) => x >= 0);
// document.getElementById("demo").innerHTML = posNumbers;

// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }

// setTimeout(myFunction,3000)
// function myFunction (){
//     document.getElementById('demo').innerHTML = 'I Love You'
// }

// setTimeout(function (){myFunction('Say hii')},3000)

// for(let  x =0; x <= 15; x++){
//     if(x === 0){
//         console.log(x + 'is even');

//     }else if(x % 2 === 0){
//         console.log(x + 'is even');

//     }else{
//         console.log(x + 'is odd');

//     }
// }
// var x,y,chr;
// for (x = 1; x <= 8; x++){
//     for(y = 1; y < x; y++){
//         chr = chr + ('*')
//     }
//     // console.log(chr);
//     chr = ''

// }

// const button = document.createElement('button')
// button.textContent = 'click me'

// button.addEventListener('click',() =>{
//     console.log('Button clicked !');

// })
// document.body.appendChild(button)

// const h1 = document.createElement('h1')
// h1.textContent = 'this is suhani tamrkar'
// document.body.appendChild(h1)

// const para = document.createElement('paragraph')
// para.textContent = 'This is a paragraph'
// document.body.appendChild(para)

// let today = new Date()
// let day = today.getDay()
// let dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// console.log('Today is : ' + dayList[day] + '.');

// let hour = today.getHours()
// let minute = today.getMinutes()
// let second = today.getSeconds()

// let prepand = (hour >= 12 ) ? 'PM' : 'AM';

// hour = (hour >= 12) ? hour - 12 : hour;

// if(hour === 0 && prepand === 'PM'){
//     if(minute === 0 && second === 0){
//         hour = 12;
//         prepand = 'Noon';
//     }else {
//         hour = 12;
//         prepand = "PM"
//     }
// }

// if(hour === 0 && prepand === 'AM'){
//     if(minute === 0 && second === 0){
//         hour = 12;
//         prepand = 'Midnight';
//     }else {
//         hour = 12;
//         prepand = "AM"
//     }
// }
// // console.log('Current Time : ' + hour + prepand + ' : ' + minute);

// function print_current_page (){
//     window.print()
// }

// function animate_string(id){
//     let element = document.getElementById(id);
//     let textNode = element.childNodes[0];
//     let text = textNode.data

//     setInterval(function(){
//         text = text[text.length - 1] + text.substring(0 ,text.length - 1);
//         textNode.data = text;
//     },1000)
// }
// let mode = 'white'
// let result = mode == 'dark' ? 'yes this dark mode':'no this is not a dark mode'
// console.log(result);

// let color ;
// if(mode === 'dark'){
//     color == 'black';
// }else if (mode === 'blue'){
//     color = 'blue'
// }else if (mode === 'pink'){
//     color = 'pink'
// }else {
//     color = 'white'
// }
// console.log(color);

// let userInput = prompt('Enter any number')
// if(userInput  %  5 === 0 ){
//     console.log(userInput,'yes it is multiple of 5');

// }else{
//     console.log(userInput,'not this is multiple of 5');

// }

// let scores = 30

// if (scores == 80 && scores == 100) {
//   console.log("A");
// } else if (scores == 70 && scores == 89) {
//   console.log("B");
// } else if (scores == 60 && scores == 69) {
//   console.log("C");
// } else if (scores == 50 && scores == 59) {
//   console.log("D");
// } else if (scores == 0 && scores == 49) {
//   console.log("F");
// }
// scores = 60;

// for(let i = 1; i <= 20; i++){
//   // console.log(i);

// }
// let sum = 0
// for (let i = 1; i <= 5; i++){
// sum = sum + i
// }
// console.log(sum);
// let i = 1;
// do{
//   // console.log('i',i);
//   i++

// }while ( i <= 10)

// // while(i <= 10){
// //   console.log('suhani ');
// //   i++;
// // }
// let str = 'Suhani'
// for (let val of str){
//   console.log(val);

// }

// let student = {
//   name : 'suhani tamrkar',
//   age : 20,
//   cgpa : 8.5,
//   isPass : true
// }
// for(let key in student){
//   console.log(key ,student[key]);

// // }
// function createParagraph (){
//   const para = document.createElement('p');
//   para.textContent = 'You clicked the button!';
//   document.body.appendChild(para);
// }
// const buttons = document.querySelectorAll('button')
// for (const button of buttons){
//   button.addEventListener('click',createParagraph);
// }

// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector('.guesses');
// const lastResult = document.querySelector('.lastResult')
// const lowOrHi = document.querySelector('.lowOrHi')

// const guessSubmit = document.querySelector('.guessSubmit')
// const guessField = document.querySelector('.guessField')
// let guessCount = 1;
// let resetButton;

// function checkGuess(){
//   alert('I am a placeholder')
// }

// let myNumber = '32'
// // myNumber += 3
// myNumber = Number(myNumber) + 3
// console.log(myNumber);
// const employee = {
//   calcTax (){
//     console.log('tax rate is 10%');

//   }
// }
// const arjun = {
//   salary : 3000
// }
// arjun.__proto__ = employee;
// class Car {
//   constructor(brand, name, country) {
//     this.brand = brand;
//     this.name = name;
//     this.country = country;
//   }
//   start (){
//     console.log('car is start');
    
//   }
//   stop(){
//     console.log('stop');
    
//   }
// }
// let fortuner = new Car ('fortuner','suhnai','india')

// class Bike extends Car {

// }
class Person {
  eat(){
    console.log('eat');
    
  }
  sleep(){
    console.log('sleep');
    
  }
}
class Engineer extends Person {
  work(){
    console.log('work');
    
  }
  job(){
    console.log('job');
    
  }
}
let suhani = Engineer