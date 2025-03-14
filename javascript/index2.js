// console.log('suhani');
// class Person {
//     constructor(name , age , country){
//         this.name = name;
//         this.age = age;
//         this.country = country;
//     }
//     displayDetails(){
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//         console.log(`Country: ${this.country}`);

//     }
// }

// const person1 = new Person('Francisaca Rohan',34,'USA')
// const person2 = new Person('Raimond Aruna',21,'Austrlia')
// const person3 = new Person(' Rohan Sharma',30,'north america')

// // console.log('\n Person - 2 Details:');
// person2.displayDetails()
// person1.displayDetails()

// class Vehicle {
//     constructor (make ,model ,year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     displayDetails(){
//         console.log(`Make : ${this.make}`);
//         console.log(`model : ${this.model}`);
//         console.log(`Year : ${this.year}`);

//     }
// }
// class Car extends Vehicle {
//     constructor(make ,model,year,doors){
//         super (make ,model,year);
//         this.doors = doors;
//     }
//     displayDetails(){
//         super.displayDetails();
//         console.log(`Doors : ${this.doors}`);

//     }
// }
// const vehicle = new Vehicle('Ford','F-150',2020)
// console.log('Vehile Details');
// vehicle.displayDetails();
// const bike = new Vehicle ('Zomoto' , 'D-233',2023)
// const car = new Car ('Honda','Accord' , 2023 , 4)

// console.log('\nCar Details');
// car.displayDetails()

// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//     console.log(`Name of the Employee : ${name}`);
//     console.log(`Monthly Salary : ${salary}`);
//   }
//   calculateAnnualSalary() {
//     return this.salary * 12;
//   }
// }
// class Manager extends Employee {
//   constructor(name, salary, department) {
//     super(name, salary);
//     this.department = department;
//   }
//   calculateAnnualSalary() {
//     const baseSalary = super.calculateAnnualSalary();
//     const bonus = 0.1;
//     console.log(`Bonus (10% of the base salary) : ${bonus}`);
//     return bonus * baseSalary + baseSalary;
//   }
// }

// const manager1 = new Manager ('Angela Luca' , 5000 , 'Marketing')
// const annualSalary1 =  manager1.calculateAnnualSalary();

// console.log(`Manager : ${manager1.name}`);
// console.log(`Department: ${manager1.department}`);
// console.log(`Annual Salary : ${annualSalary1}`);

// const manager2 = new Manager (`Jonella Rozaliya` , 5000 , 'Market officer')
// const annualSalary2 = manager2.calculateAnnualSalary();

// console.log(`Manager : ${manager2.name}`);
// console.log(`Department : ${manager2.department}`);
// console.log(`Annual Salary  : ${annualSalary2}`);

// const manager3 = new Manager('Suhani Tamrkar',4000,'Web Development')
// const annualSalary3 = manager3.calculateAnnualSalary();

// console.log(`Manager :${manager3.name}`);
// console.log(`Department :${manager3.department}`);
// console.log(`Annual Salary :${annualSalary3}`);

class Book {
  constructor(title, author, publicYear) {
    this.title = title;
    this.author = author;
    this.publicYear = publicYear;
  }
  bookDetail() {
    console.log(`Title : ${this.title}`);
    console.log(`Author : ${this.author}`);
    console.log(`Publication Year : ${this.publicYear}`);
  }
}
class Ebook extends Book {
  constructor(title, author, publicYear, price) {
    super(title, author, publicYear);
    this.price = price;
  }
  displayDetails (){
    super.displayDetails();
    console.log(`Price :$${this.price}`);
    
  }
}
