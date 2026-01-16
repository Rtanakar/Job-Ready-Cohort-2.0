// *******************************************************************************************************************************************
// Object-Oriented JavaScript (OOP)
// ✅Teach:
// Constructor functions and prototypes
// new keyword behavior
// ES6 Classes: constructor, methods, extends, super
// Prototypal inheritance vs classical inheritance
// Encapsulation (private fields using #)
// *******************************************************************************************************************************************
// in Cohort 2.0
// Introduction to OOPS in JavaScript -> oops ak tarika hai bade code ko scable ki tarah modular karne ka
// Understanding `classes` and `objects` in JavaScript
// objects -> ak person ki details ak sath rakhne ke liye apke pas hai objects // modular ho -> maintainable ho -> scalable ho -> easy to read ho -> easy to manage ho
// classes -> classes bluprint hoti hai jo hamko bar bar object bana ke deti hai // classes banate hai taki hame har baar ak naya object mil jaye // classes object ki factory hai // har bar new ke sath class run karenge to ak naya object milega
// *******************************************************************************************************************************************
// this
// this keyword special keyword hai, kyuki jaise ki baaki saare keyword ki value ya unka nature same rehta hai this ki value ya nature badal jaata hai is baat se ki aap usey kaha youse kar rahe ho

// constructor -> ek function jo automatic chalta hai jaise hi class se naya instance banaya jata hai // const k1 = new Kitaab(); --> isme k1 ak instance hai
// sidha sa matlab class chalate hi constructor apne ap chal jayega

// prototype -> prototype memory me space bachane ke liye use kia jata hai
// *******************************************************************************************************************************************

// Understanding `Constructor` and `Prototypes` - [`this keyword`, `call`, `apply`, `bind`]
// More Topics in OOPS - [`class expression`, `hoisting`, `inheritance` `getter & setter`]

// *******************************************************************************************************************************************

// new ka matlab hota hai blank object
// agar hum new ka use nahi karenge to function me this ka matlab window hota hai // isliye hume function me this ka use karna hai to new ka use karo
// blank object banne par aap use variable me save kar sakte hai // jaise ki biscuit1 aur biscuit2 hai
// Jin function ko ham new ke sath chalate hai use hum constructor function bolte hai
// Constructor function ka pahla letter Capital hona chahiye wahi constructor function hota hai

// *******************************************************************************************************************************************
// Constructor functions
// function createBiscuits(name, price, quantity, company, flaver) {
//   this.name = name;
//   this.price = price;
//   this.quantity = quantity;
//   this.company = company;
//   this.flaver = flaver;
// }

// let biscuit1 = new createBiscuits("ParleG Regular", 5, 3, "ParleG", "Regular");
// let biscuit2 = new createBiscuits("Oreo", 10, 2, "Cadbury", "Chocolate");
// console.log(biscuit1);
// console.log(biscuit2);

// *******************************************************************************************************************************************
// hamein seekhna hai factories banaana, matlab ki aap ek baar blueprint bana do ki har object kaisa dikhega and hum log naye naye objects with different values bana paayege, yahi upar upar se poora kaam hai OOPS mein

// function CreatePencil(name, price, color, company) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.company = company;
//   this.write = function (text) {
//     const h1 = document.createElement("h1");
//     (h1.textContent = text),
//       (h1.style.color = color),
//       document.body.appendChild(h1);
//   };
// }

// const pencil1 = new CreatePencil("NATARAJ", 5, "black", "NATARAJ GOLD");
// const pencil2 = new CreatePencil("APSARA", 10, "blue", "APSARA GOLD");
// pencil1.write("hey how are you.");
// pencil2.write("whats app bro");
// pencil1.write("where are you?");
// pencil2.write("Im on the way.");
// console.log(pencil1);
// console.log(pencil2);

// *******************************************************************************************************************************************
// Prototype
// prototype memory me space bachane ke liye use kia jata hai
// Prototype means uski extra memory // Shared memory
// agar tumhaara constructor function koi field apne prototype par attach karle to us constructor se banne waale sabhi new instances yaani ki objects, ke paas wo field automatically chali jaati hai

// function CreatePencil(name, price, color, company) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.company = company;
// }

// CreatePencil.prototype.write = function (text) {
//   const h1 = document.createElement("h1");
//   (h1.textContent = text),
//     (h1.style.color = this.color),
//     document.body.appendChild(h1);
// };

// const pencil1 = new CreatePencil("NATARAJ", 5, "black", "Nataraj Gold");
// const pencil2 = new CreatePencil("APSARA", 10, "blue", "Apsara Gold");
// pencil1.write("hey how are you.");
// pencil2.write("whats app bro");
// pencil1.write("where are you?");
// pencil2.write("Im on the way.");
// console.log(pencil1);
// console.log(pencil2);

// class Sketch {
//   constructor(character, color) {
//     this.character = character;
//     this.color = color;
//     this.some = function () {};
//   }

//   // by default prototype inside class
//   speck() {}
//   walk() {}
// }

// // Prototype
// // Sketch.prototype.speck = function() {}
// // Sketch.prototype.walk = function() {}

// const sketch1 = new Sketch("doremon", "skyblue");
// console.log(sketch1);
// const sketch2 = new Sketch("shinchain", "red");
// console.log(sketch2);

// *******************************************************************************************************************************************
// Class and Object
// class CreatePencil {
//   constructor(name, price, color, company) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     this.company = company;
//   }

//   write(text) {
//     const h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.appendChild(h1);
//   }

//   erase() {
//     document.querySelectorAll("h1").forEach((elem) => {
//       if (elem.style.color === this.color) {
//         elem.remove();
//       }
//     });
//   }
// }

// const pencil1 = new CreatePencil("NATARAJ", 5, "black", "Nataraj Gold");
// const pencil2 = new CreatePencil("APSARA", 10, "orange", "Apsara Gold");
// pencil1.write("hey how are you.");
// pencil2.write("whats app bro");
// pencil1.write("where are you?");
// pencil2.write("Im on the way.");
// pencil2.write("Im on the way.");
// pencil2.write("Im on the way.");
// pencil1.write("where are you?");
// pencil1.write("where are you?");

// pencil1.erase();

// console.log(pencil1);
// console.log(pencil2);

// class biscuitMaker {
//   constructor(company, flaver, price, color) {
//     this.company = company;
//     this.flaver = flaver;
//     this.price = price;
//     this.color = color;
//   }

//   biscuitPack() {
//     console.log("Biscuit Pack Completed");
//   }

//   biscuitUnPack() {
//     console.log("Biscuit UnPacked");
//   }
// }

// const biscuit1 = new biscuitMaker("ParleG", "regular", "5rs", "yello");
// console.log(biscuit1);
// biscuit1.biscuitPack();
// const biscuit2 = new biscuitMaker("ParleG", "gold", "10rs", "God");
// console.log(biscuit2);
// biscuit2.biscuitUnPack();

// *******************************************************************************************************************************************
// extends
// class User {
//   constructor(name, address, username, email) {
//     this.name = name;
//     this.address = address;
//     this.username = username;
//     this.email = email;
//     this.role = "User";
//   }

//   checkRole() {
//     console.log(`Hey, ${this.name} - You are ${this.role}`);
//   }

//   write(text) {
//     const h1 = document.createElement("h1");
//     h1.textContent = `${this.name}: ${text}`;
//     document.body.appendChild(h1);
//   }
// }

// class Admin extends User {
//   constructor(name, address, username, email) {
//     super(name, address, username, email);
//     this.role = "Admin";
//   }

//   remove() {
//     document.querySelectorAll("h1").forEach((elem) => {
//       elem.remove();
//     });
//   }
// }

// const user1 = new User(
//   "Alen",
//   "Ohio",
//   "alenohio123",
//   "alenohio@gmail.com",
//   "user"
// );
// const user2 = new User(
//   "Smith",
//   "Boston",
//   "smithboston778899",
//   "smithboston@gmail.com",
//   "user"
// );
// const a1 = new Admin(
//   "Cody",
//   "Gorgia",
//   "americanCody",
//   "americannightmare@gmail.com",
//   "Admin"
// );
// user1.write("Hey, smith");
// user2.write("ya hey, alen");
// user1.write("How are You?");
// user2.write("I'm fine.");
// a1.write("Hey, I'm Cody");
// user1.write("Hey, cody");
// user2.write("hey, cody");
// // a1.remove();
// user1.checkRole();
// user2.checkRole();
// a1.checkRole();
// console.log(user1);
// console.log(user2);

// *******************************************************************************************************************************************
// Prototypal inheritance vs classical inheritance

// ***********************************************
// classical inheritance
// agar koi class hai jisme kuch likha hai and aap mante ho ek nayi class usi ka extension hai to ap wo rare features puraani class se borrow kar sakte ho and nayi class me use kar sakte ho and apne naye features bhi bana sakte ho
// classes banana aur unhe extends krdena hi classical inheritance hota hai. // isme ham parent se chijo ko lete hai

// ***********************************************
// prototypal inheritance
// inheritance class -> class
// prototypal inheritance - object -> object

// ek object hai, aap chaaho to uski saari props/methods ko inherit kara dete ho doosre object mein
// let coffee = {
//   color: "dark",
//   drink: function () {
//     console.log("gut gut gut");
//   },
// };
// let abirataCoffee = Object.create(coffee);
// abirataCoffee.taste = "bitter";
// console.log(abirataCoffee.taste);
// abirataCoffee.drink();

// *******************************************************************************************************************************************
// ⚠️ Confusions
// Class syntax vs function prototype chain
// Shared vs own properties

// *******************************************************************************************************************************************
// 🧠 Mindset:
// Classes are for structure; functions are for freedom

// *******************************************************************************************************************************************
// 🧪 Practice Zone
// Create a "BankAaccount" class with deposit/withdraw
// Extend "User" class into "Admin" class

// *******************************************************************************************************************************************

// #  Day 56 – Object-Oriented Concepts in JavaScript
// JavaScript OOP (Object-Oriented Programming) helps you write cleaner, reusable, and structured code using **objects**, **classes**, **constructors**, **prototypes**, and **inheritance**.
// ---
// ## 🔹 1. Introduction to OOPS in JavaScript
// JavaScript supports OOP using:

// - Objects
// - Classes
// - Constructors
// - Prototypes
// - Inheritance

// ### ✔️ Simple Object Example
// ```js
// const user = {
//   name: "Anubhav",
//   age: 24,
//   greet() {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// user.greet();
// ```
// ---

// ## 🔹 2. Understanding Classes and Objects
// - **class = blueprint**
// - **object = real instance created from the blueprint**

// ### ✔️ Basic Example
// ```js
// class Car {
//   constructor(brand, price) {
//     this.brand = brand;
//     this.price = price;
//   }

//   drive() {
//     console.log(`${this.brand} is driving...`);
//   }
// }

// const car1 = new Car("BMW", 5000000);
// car1.drive();
// ```

// ---

// ## 🔹 3. Constructor & Prototype
// ###  Constructor
// A constructor is a special method inside a class that initializes object properties.

// ```js
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const s1 = new Student("Anubhav", 24);
// ```

// ---

// ## 🔹 Prototype in JavaScript
// Every function in JavaScript has a **prototype**, which is used to **share methods** across all objects created from that function.
// ### ✔️ Example Without Classes

// ```js
// function Person(name) {
//   this.name = name;
// }

// // Adding method using prototype
// Person.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// const p1 = new Person("Anubhav");
// p1.sayHi();
// ```

// ---
// Displaying Day56_OOPs in JS.md.

// *******************************************************************************************************************************************
// #  Day 58 – Advance JS 3
// # 1. Class Expression

// JavaScript allows classes to be created as **expressions**, just like function expressions.

// ### Anonymous Class Expression
// ```js
// const Person = class {
//   constructor(name) {
//     this.name = name;
//   }
// };

// const p = new Person("Anubhav");
// console.log(p.name);
// ```

// ### Named Class Expression
// ```js
// const Car = class CarClass {
//   constructor(model) {
//     this.model = model;
//   }
// };

// const c = new Car("BMW");
// console.log(c.model);
// ```

// ---

// ## 2. Hoisting in Classes

// Classes are **not hoisted**. You cannot use a class before declaring it.

// ```js
// const obj = new Student();  //  ReferenceError

// class Student {
//   constructor() {}
// }
// ```

// ---

// ## 3. Inheritance (`extends`)

// ```js
// class Animal {
//   speak() {
//     console.log("Animal speaks");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Dog barks");
//   }
// }

// const d = new Dog();
// d.speak();
// d.bark();
// ```

// ---

// ## 4. Getter & Setter

// ```js
// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name.toUpperCase();
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// const u = new User("anubhav");
// console.log(u.name);
// u.name = "Jha";
// console.log(u.name);
// ```

// ---

// ## 5. Constructor Functions (Before ES6)

// ```js
// function Animal() {
//   this.name = "harsh";
// }

// new Animal();
// ```

// ### Adding Methods Using Prototype
// ```js
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function () {
//   console.log(this.name + " makes a sound");
// };

// const cat = new Animal("Kitty");
// cat.speak();
// ```
// Displaying Day 58 - Advance JS 3.md.

// *******************************************************************************************************************************************
// class Animal {
//   constructor() {
//     this._age = 3;
//   }
//   set age(val) {
//     if (val < 0) {
//       console.log("not");
//       return;
//     }
//     this._age = val;
//     return this._age;
//   }

//   get age() {
//     return this._age;
//   }
// }

// const a1 = new Animal();
// a1._age = 55;
// console.log(a1.age);
