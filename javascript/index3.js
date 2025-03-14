//create nested object and access the deepest property
const user = {
  name: "Alice",
  address: {
    city: "Indore",
    longDetail: {
      houseNo: 33,
      street: "superCoridor",
      road: "kushwah nagar",
    },
  },
  information:{
    email : 'alice300gmail.com',
    mobile : 900342312,
    isSign : {
        now : true,
        then : false
    }
  }
};

console.log(user.address.longDetail.houseNo);
console.log(user.address.longDetail.street);
console.log(user.address.longDetail.road);
console.log(user.address.city);
console.log(user.name);



