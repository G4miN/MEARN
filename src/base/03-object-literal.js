const person = {
  name: "John Doe",
  age: 30,
  hobbies: ["reading", "gaming", "hiking"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  }
}
//console.table(person)
console.log(person)

//! Important: Objects are reference types in JavaScript
const person2 = person; //this does not work as spread!!!
person2.name = "Martin";

console.log(person)
console.log(person2);

//! using spread operator to create a copy
const person3 = { ...person };
person3.name = "Jane";

console.log(person3);
console.log(person);
console.log(person2);