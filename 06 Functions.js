// Functions
// (JavaScript – Learn Everything Series by Sheryians Coding School)
// 🧠 What are Functions?
// Functions are blocks of reusable logic.
// Instead of repeating the same task again and again, wrap it in a function and reuse it with
// different inputs.
// Think of a function like a vending machine:
// Input: you give money + item code
// Output: it gives you the item
// Logic: hidden inside
// *******************************************************************************************************************************************
// - Understanding Function in JavaScript and why its widely used - [`parameters`, `arguments`, `rest parameters`, `hoisting`, `Variable Hoisting`, `Function Hoisting`]

// - Parameters in JavaScript - [`required`, `destructured`, `rest`, `default`]

// - Arguments in JavaScript - [`positional`, `default`, `spread`]

// - `Classic Function`, `Nested Function`(function within function), `Scope Chain` in JavaScript.

// - Understanding Immediately Invoked Function Expression(IIFE).

// - More Functions in JavaScript - [`Arrow Function`, `Fat Arrow`, `Anonymous`, `Higher Order`, `Callback`, `First Class`, `Pure Function`, `Impure Function`]

// - Understanding Scoping in JS - [`Global scope`, `Function scope`]

// - Understanding `Closures`, `Scoping Rule` .

// *******************************************************************************************************************************************
// hamare pass ak code hai aur us code ko turant nahi chalana hai to us case me ham function banayenge
// code ko reuse karne me help karta hai
// function apke ke code ko tab chalata hai jab ap chaho

// 🛠️ Function Declarations

// // This is a normal function
// function dance() {
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
//   console.log("dance");
// }
// dance();

// // This is a function expression
// let fnc = function () {
//   console.log("heyeheyheyehey");
// };
// fnc();

// // This is a fat arrow function
// const faf = () => {
//   console.log("lolololol");
// };
// faf();

// *******************************************************************************************************************************************
// 🧾 Parameters vs Arguments
// function dance(v) {  // // v is a parameter
//   console.log(`${v} naach raha hai`);
// }
// dance("Ghoda"); // // "Ghoda" is the argument you pass
// dance("chil");
// dance("hirad");

// function add(num1, num2) { // num1 and num2 is a parameter
//   console.log(num1 + num2);
// }
// add(1, 2); // (1, 2) is the argument you pass
// add(11, 22);
// add(111, 222);

// function abce() {
//   console.log(arguments);
// }
// abce("sitaji", 0, "sitaji@gmail.com");

// *******************************************************************************************************************************************
// // 🧂 Default Parameter
// function sum(num1 = 1, num2 = 3) {
//   console.log(num1 + num2);
// }
// sum();

// // 🧂 Rest Parameter
// jab arguments kai saare ho to hamen utne hi parameter banane padge, issey bachne ke liye, hum rest operator ka use karte hai agar ... function ke parameter space mein lagaye to wo rest parameter(operator) hai
// function fnc(...val) {
//   console.log(val);
// }
// fnc(1, 2, 3, 4, 5, 6, 7, 8);

// function fnc(a, b, c, ...val) {
//   // parameter + rest
//   console.log(a, b, c, val);
// }
// fnc(1, 2, 3, 4, 5, 6, 7, 8);

// *******************************************************************************************************************************************
// required parameter
// agar hamne parameter banaya aur humne usme arguments nahi bheje to fir wo value parameter ki undefined ho jayegi
// function abcd(a, b, c, d) {

// }
// abcd();

// *******************************************************************************************************************************************
// - Arguments in JavaScript - [`positional`, `default`, `spread`]
// // d = 1 is default
// function abcd(a, b, c, d = 1) {
//   console.log(a, b, c, d);
// }
// let arr = [1, 2, 3, 4]; // 1, 2, 3, 4 is positional
// abcd(...arr); // ...arr is spread

// *******************************************************************************************************************************************
// 🌀 Return Values
// return matlab janha se aaye ho wahi dal denge
// function fnc(num) {
//   return 12 + num;
// }
// const val = fnc(23);
// console.log(val);

// . return sends back a result to wherever the function was called
// . After return , function exits

// 🔁 Early Return Pattern and Early Returns
// function fnc(age) {
//   if (age > 17) return "Allowed";
//   return "Denied";
// }
// console.log(fnc(18));

// . This avoids deep nesting and makes logic cleaner.

// *******************************************************************************************************************************************
// 🎯 First-Class Functions
// JavaScript treats functions as values:
// Assign to variables
// Pass as arguments
// Return from other functions

// first class function -> functions ko values ki tarah treat karna

// const abcd = function (val) {
//   val();
// };

// abcd(function () {
//   console.log("hey");
// });

// *******************************************************************************************************************************************
// 🧠 Higher-Order Functions (HOF)
// Functions that accept other functions or return functions.

// Higher-Order Functions wo function hota hai joki return kare ak function ya fir accept kare ak function apne parameter mein

// A Higher-Order Function is a function that either returns another function or accepts a function as a parameter.

// A Higher-Order Function is a function that can take another function as an argument or return a function as its result.
// // with return
// function abcd() {
//   return function () {
//     console.log("heyeheyehey");
//   };
// }
// abcd()();

// *****************************
// // with parameter
// function abcd(val) {
//   val();
// }
// abcd(function () {
//   console.log("heyeyeyey");
// });

// *******************************************************************************************************************************************
// // pure vs impure functions
// let a = 4;

// // pure functions
// // aisa fnc jo ki bahar ki value ko naa badle wo hai pure fnc
// function abcd() {
//   console.log("heyeheyey");
// }
// abcd();

// // impure functions
// // aisa fnc jo bahar ki value ko badal de wo hai impure functions
// function abcd2() {
//   console.log(++a);
// }
// abcd2();

// let a = 12;
// function abcd(a) {
//   console.log(Math.random() + a);
// }
// abcd(12);
// abcd(12);
// abcd(12);


// *******************************************************************************************************************************************
// 🔐 Closures
// Closures = when a function remembers its parent scope, even after the parent has finished.

// // closures -> ek fnc jo return kare ek aur function aur return hone wala function hamesha use karega parent function ka koi variable

// ek function hai jo return karta hai function but returning function jo hai wo parent function ka koi variable use karega
// har closure ak higher order function bhi hota hai // lekin ye higher order function se ak step age hota hai

// function abcd() {
//   let val = 4;
//   return function () {
//     console.log(val);
//   };
// }
// abcd()();

// 🔐 Lexical Scope
// // lexical scope -> lexical scope means unki phisycal position ka scope kya hai unka
// // a ka phisycal position hai line number 179 iska phisycal position ka scope hai line number 178 se 186 tak. kyonki abcd janha tak exist karega a wanha tak exist karega
// function abcd() {
//   let a = 5;
//   function efgh() {
//     let b = 9;
//     function ijkl() {
//       let c = 10;
//     }
//   }
// }

// *******************************************************************************************************************************************
// ⚡ IIFE – Immediately Invoked Function Expression

// Used to create private scope instantly.

// (function () {
//   console.log("heyeheeheyehey");
// })();

// *******************************************************************************************************************************************
// 🚀 Hoisting: Declarations vs Expressions

// function hoisting kar sakte hai jo normal function use karte hai
// variable function hoisting nahi karte hai

// it is work
// normal function me work karega
// abcd();
// function abcd() {
//   console.log("heyeyheyehyehey");
// }

// it is not work
// function expression me work nahi karega error ayega (Cannot access 'abcd' before initialization)
// abcd();
// let abcd = function () {
//   console.log("heheheheye");
// };

// . Declarations are hoisted
// . Expressions are not

// *******************************************************************************************************************************************
// ⚠️ Common Confusions
// Arrow functions don’t have their own this
// You can’t break out of forEach
// Closures often trap old variable values
// Return vs console.log – don't mix them up
