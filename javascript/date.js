//to show simply current date time
let currentDate = new Date();
// console.log(currentDate);

//using new date(year,month , day,hours ,minutes , seconds, milliseconds)
let specificDate = new Date(2023, 11, 25, 10, 30, 15);
// console.log(specificDate);

//new date (milliseconds)
let dateFroMs = new Date(86400000);
// console.log(dateFroMs);

//new date (dateString)
let dateFromString  = new Date('2024-03-27T10:15:30');
// console.log(dateFromString);


//common date methods
let date = new Date()

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getTime());
// console.log(date.getTimezoneOffset());


//some question
//how do you calculate the remaining days until an event
function daysUntilEvent(eventDate){
    let now = new Date();
    let event = new Date(eventDate);
    let diff = event - now;

    let days = Math.ceil(diff / 1000 * 60 * 60 * 24)
    return days;
}

// console.log(daysUntilEvent('2024-12-25'));


//is the year leap or not
function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

}
// console.log(isLeapYear(2024));
// console.log(isLeapYear(2023));


//sorting dates in an array
let dates = [
    new Date('2024-03-10'),
    new Date('2024-01-15'),
    new Date('2024-02-10')

]
dates.sort((a,b) => a - b);
// console.log(dates);


//convert UTC to local time
let utcDate = new Date('2024-03-27T10:00:00Z');
// console.log(utcDate.toLocaleString());


//measure execution time
let start = Date.now();
for(let i = 0; i < 1000000; i++){}

let end = Date.now();
// console.log(`Execution Time:${end - start}ms`);


let firstDay = new Date(new Date().getFullYear(),new Date().getMonth(),1);
// console.log(firstDay);

let day = new Date().getDay();
console.log(day);

