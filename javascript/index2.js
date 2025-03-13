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

class Vehicle {
    constructor (make ,model ,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails(){
        console.log(`Make : ${this.make}`);
        console.log(`model : ${this.model}`);
        console.log(`Year : ${this.year}`);

        
    }
}
class Car extends Vehicle {
    constructor(make ,model,year,doors){
        super (make ,model,year);
        this.doors = doors;
    }
    displayDetails(){
        super.displayDetails();
        console.log(`Doors : ${this.doors}`);
        
    }
}
const vehicle = new Vehicle('Ford','F-150',2020)
console.log('Vehile Details');
vehicle.displayDetails();

const car = new Car ('Honda','Accord' , 2023 , 4)

console.log('\nCar Details');
car.displayDetails()

