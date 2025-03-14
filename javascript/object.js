// //create nested object and access the deepest property
// const user = {
//   name: "Alice",
//   address: {
//     city: "Indore",
//     longDetail: {
//       houseNo: 33,
//       street: "superCoridor",
//       road: "kushwah nagar",
//     },
//   },
//   information: {
//     email: "alice300gmail.com",
//     mobile: 900342312,
//     isSign: {
//       now: true,
//       then: false,
//     },
//   },
// };

// //update a deep property inside a nested obejct
// user.address.longDetail.houseNo = 365;
// user.address.longDetail.road = "yadav nand nagar";

// // console.log(user.address.longDetail.houseNo);
// // console.log(user.address.longDetail.street);
// // console.log(user.address.longDetail.road);
// // console.log(user.address.city);
// // console.log(user.name);

// //Use a  loop to iterate through a nested object
const data = {
  id: 110,
  info: {
    name: "Bob",
    skills: {
      frontend: "React",
      backend: "Node.js",
    },
  },
};
// const {id , info :{name , skills :{frontend,backend}}} = data
// console.log(id,skills,frontend,backend);
const {id , ...rest} = data
// console.log(rest);
// console.log('name' in data);
// Object.freeze(data)



// for (const key in data.info.skills) {
// //   console.log(`${key} : ${data.info.skills[key]}`);
// }
// for (const key in user.address.longDetail) {
// //   console.log(`${key} : ${user.address.longDetail[key]}`);
// }

// //create a getter and setter in an object
const product = {
  _price: 100,
  id: 100,
  get price() {
    return `$${this._price}`;
  },
  set price(value) {
    if (value > 0) {
      this._price = value;
    }
  },
};
// console.log(product);
// product.price = 200;
// console.log(product.price);

//clone an object using spread syntax
// const userInformation  = {...user}
// const userInformation = structuredClone(user)
// console.log(userInformation);

//clone a deep object using structured cloning
// const obj1 = {
//     user : {name:'Suhani',age:21},
//     skills : ['JS',"React"]
// }
// const obj2 = structuredClone(obj1)
// console.log(obj2);

//merge two objects with spread syntax
const mergeObj = { ...data, ...product };
// console.log(mergeObj);

//merge objects with the same keys
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 4, c: 3 };

const mergeObj1 = { ...obj1, ...obj2 };
console.log(mergeObj);

//create a complex object with multiple layers
// const library = {
//   books: [
//     {
//       title: "Book One",
//       author: "Author A",
//       genres: ["Fiction", "Adventure"],
//       available: true,
//     },
//     {
//       title: "Book Two",
//       author: "Author B",
//       genres: ["Non-fiction", "Science"],
//       available: false,
//     },
//   ],
// };
// console.log(library.books[1].genres[1]);
// console.log(library.books[0].author);

//use Object.keys() to list keys of an object
// const person = {name : 'alice',age:23,city:'paris'}
// console.log(Object.keys(person));

// //use Object.values() to get values of an object
// console.log(Object.values(person));
// console.log(Object.entries(person));

const car = {
  brand : 'Toyota',
  model : 'Camry',
  engine  : {type : 'V4' , horsePower : 400}
}
// const {engine : {type , horsePower},brand,model} = car
// console.log(type , horsePower,model,brand);
