console.log('suhani');
class Person {
    constructor(name , age , country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    displayDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);

        
    }
}

const person1 = new Person('Francisaca Rohan',34,'USA')
const person2 = new Person('Raimond Aruna',21,'Austrlia')
const person3 = new Person(' Rohan Sharma',30,'north america')

console.log('\n Person - 2 Details:');
person2.displayDetails()
person1.displayDetails()
