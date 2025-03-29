// const obj = {name:'Alice',age:24};
// console.log(obj);
// const jsonString = JSON.stringify(obj);
// const jsonString = '{"name":"Alice","age":24}';
// const obj1 = JSON.parse(jsonString)
// console.log(obj1.name);

// console.log(jsonString);

const object = {name:'Alice',age:33};
console.log(JSON.stringify(object,null,2));


const dates = {date : new Date().toISOString()}
console.log(JSON.stringify(dates));


const jsonData = '[{"name":"Alice","age":23 },{"name":"Bob","age":23}] '
const people = JSON.parse(jsonData)
const filteredPeople = people.filter(person => person.age > 23)
console.log(filteredPeople);


const jsonString = '{"age":"23"}';
const obj = JSON.parse(jsonString, (key ,value) => 
key === 'age' ? Number(value) : value)
console.log(obj.age);


const obj3 ={a : 1, b : {c : 2}};
const clone = JSON.parse(JSON.stringify(obj3))
console.log(clone);
