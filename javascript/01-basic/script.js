// let myobj = {
//     userName: "Mosaref",
//     age: 23,
//     crouse: "javascript",
//     price: 2999
// }

// console.log(myobj.userName);
// console.log(myobj.price);
// Destructuring

// const {userName,age,price} =myobj;

// console.log(`My name is ${myobj.userName} age is ${myobj.age}`);

// console.log(`my name is ${userName} age is ${age}`);


// Define a class called 'Person'
class Person {
    // Constructor method to initialize properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to greet
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Create an instance of the Person class
  let person1 = new Person("John", 30);
  
  // Call the greet method
  person1.greet(); // Output: Hello, my name is John and I am 30 years old.


class Taskin{
  constructor(arg1,arg2) {
    this.arg1 = arg1;
    this.arg2 = arg2;
  }
  bilkis() {
    console.log(`My name is ${this.arg1} age is ${this.arg2}`);
  }
}

let mpaik = new Taskin("Mosaref paik" , 23)

mpaik.bilkis()
  