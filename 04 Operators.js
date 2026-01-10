// 🔧 What are Operators?
// Operators are special symbols or keywords in JavaScript used to perform operations on values
// (operands).
// You’ll use them in calculations, comparisons, logic, assignments, and even type checks.
// Think of them as the verbs of your code — they act on data.

// *******************************************************************************************************************************************
// Arithmetic, Comparison, Logical, Assignment, Unary, ternary

// *******************************************************************************************************************************************
// ➕ Arithmetic Operators
// Used for basic math.
// + // addition
// - // subtraction
// * // multiplication
// 28/06/2025, 15:10 Complete JS Course Syllabus
// 10/36
// Example:

// 🧮 Assignment Operators
// Assign values to variables.
// Example:

// 🧾 Comparison Operators
// Used in condition checks.
// / // division
// % // modulus (remainder) // ye sheshphal deta hai 2 % 5 = 1 kyonki 2 ne 5 ko puri tarah se bhag nahi kia hai aur jo sheshphal bacha vahi modulus hota hai
// ** // exponentiation (power)

// Example:
// let a = 10, b = 3;
// console.log(a + b); // 13
// console.log(a % b); // 1
// console.log(2 ** 3); // 8

// *******************************************************************************************************************************************
// � Assignment Operators
// Assign values to variables.

// = // assigns value // value dalna // value dene me use kia jata hai
// += // a += b => a = a + b // value ko particular se badhana
// -= // a -= b => a = a - b // value ko particular se ghatana
// *= // a *= b => a = a * b // value ko particular se gunda karna
// /= // a /= b => a = a / b // value ko particular se division karna
// %= // a %= b => a = a % b // value ko particular se modulus karna

// Example:
// let score = 5;
// score += 2; // score = 7

// *******************************************************************************************************************************************
// 🧾 Comparison Operators
// Used in condition checks

// == // equal (loose) ye value check karta hai par type nahi
// === // equal (strict – value + type) ye value and type dono check karta hai
// != // not equal (loose) // ye kabhi use nahi karna hai
// !== // not equal (strict) // ye hamesa use karna hai // ye check karta hai value ko agar do value left side or right side barabar nahi to true dega agar hai to false dega
// 5 !== 6 // true ---> because 5 jo hai vo 6 ke barabar nahi hai isliye true hai

// > < >= <=

// Example:
// console.log(5 == "5"); // true
// console.log(5 === "5"); // false

// *******************************************************************************************************************************************
// ✅ Logical Operators
// Used to combine multiple conditions.
// && // AND – both must be true
// || // OR – either one true
// ! // NOT – negates truthiness // ye ulta karta hai kisi bhi value ko true ka false kardeta hai aur false ka true kar deta hai

// Example:
// let age = 20,
//   hasID = true;
// if (age >= 18 && hasID) {
//   console.log("Allowed");
// }

// *******************************************************************************************************************************************
// 🌀 Unary Operators
// Used on a single operand.

// + // tries to convert to number
// - // negates
// ++ // increment
// -- // decrement
// typeof // returns data type

// Example:
// let a = 5;
// console.log(++a); // ye turant value ko badhata hai meas pahle
// console.log(a++); // ye bad me value ko badhata hai
// console.log(--a); // ye turant value ko ghatata hai meas pahle
// console.log(a++); // ye bad me value ko ghatata hai

// kisi bhi value ko convert karna jaise sring ke pahle + karne par number me convert ho jata hai
// let x = "5";
// console.log(+x); // 5 (converted to number)

// *******************************************************************************************************************************************
// ❓ Ternary Operator (Conditional)
// Shorthand for if...else

// agar value true hogi to ? mark vala cahlega agar value false hogi to : mark vala chalega
// condition ? valueIfTrue : valueIfFalse

// Example:
// let score = 80;
// let grade = score > 50 ? "Pass" : "Fail"; // score is beggar then 50 so answer is Pass
// console.log(grade);

// *******************************************************************************************************************************************
// 🧪 typeof Operator

// typeof 123 // "number"
// typeof "hi" // "string"
// typeof null // "object" (JS bug) (quirks)
// typeof NaN // "number" (quirks)
// typeof [] // "object" (quirks)
// typeof {} // "object"
// typeof function(){} // "function"

// *******************************************************************************************************************************************
// String Operator
// + (for concatenation) // ye string me chijo ko jodta hai
// console.log("SitaJi" + "RamJi");

// *******************************************************************************************************************************************
// Nullish Coalescing Operator
// ?? (fallback only when null / undefined)

// *******************************************************************************************************************************************
// ❓ Optional Chaining
// ?. (safe access to nested vlaues)
// ye object me error nahi dega agar value hai ya nahi
// Avoids errors if a nested property is undefined:

// *******************************************************************************************************************************************
// // TDZ (Temporal Dead Zone) ---> utna area jitne me js ko pata to hai ki variable exist karta hai par wo aapko value nahi de sakta hai
// console.log(d); // d ko initializr karne se pahle bata nahi sakta hu ki d ki value kya hai
// jaha par variable ko banaya uske upar ka pura area us variable ka temporal dead zone hota hai
// // Temporal Dead Zone only work for let and const
// // in var to hoisting

// let d = 4;

// let age = 25;
// age = 30; // ✅
// let age = 40; // ❌ Error (same block)

// *******************************************************************************************************************************************
// variable hoisting in js
// hoisting ka matlab hai ki variable ko banane se pahle bhi use kia ja sakta hai
// hoisting me apka variable toot jata hai do hisso me
// declaration top of the file jata hai
// initialication wahi rehta hai jaha variable tha
// ab apka variable error nahi deta kyoki wo hamesa use hone se pahle exist kar raha tha

// Hoisting impact per type
// hoisting ---> ek variable ko jab js mein banate hai to wo variable do hisso me toot jata hai aur uska declare part upar chala jata hai and uska initializatin part neeche rah jata hai
// console.log(e);

// var e = 10;

// // example
// // do hisso me toot jata hai
// // declare part upar chala jata hai
// var e = undefined;

// // initialization part neeche rah jata hai
// e = 10;

// var -> hoist -> undefined
// let -> hoist -> X
// const -> hoist -> X

// *******************************************************************************************************************************************
// Assignment
// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)
// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.
// const a = 10;
// const b = 3;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3
// console.log(a % b); // 1

// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.
// let x = 5;
// x = x + 3;
// console.log(x);

// let x = 5;
// x += 3;
// console.log(x); // 8
// x -= 3;
// console.log(x); // 5
// x *= 3;
// console.log(x); // 15
// x /= 3;
// console.log(x); // 5
// x %= 3;
// console.log(x); // 2

// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–-
// let count = 5;
// count++;
// console.log(count); // 6
// ++count;
// console.log(count); // 7
// count--;
// console.log(count); // 6
// --count;
// console.log(count); // 5

// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.
// console.log(5 == "5"); // true // this is check value
// console.log(5 === "5"); // false // this is check value as well data type

// // e. Check if 10 is greater than 5, less than 20, and equal to 10.
// const x = 10;
// if (x > 5 && x < 20 && x === 10) {
//   console.log(
//     `${x} is Greter then 5 and ${x} is Less then 20 and ${x} equal to 10`
//   );
// }

// f. Try logical AND and OR:
// console.log(true && false); // false
// console.log(true || false); // true
// console.log(!true); // false

// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)
// console.log(5 > 3 && 10 > 8); // true
// console.log(5 > 3 || 10 < 8); // true

// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// console.log(5 & 1 && 5 | 1);

// 2. Variable Hoisting in JavaScript
// a. Predict output of:
// console.log(a); // undefined // because this is hoisting
// var a = 10;

// b. Predict output of:
// console.log(b); // error // because let or not hoisting
// let b = 10;

// c. Predict output of:
// test(); // "Hello"
// function test() {
//   console.log("“Hello”");
// }

// d. Try writing a function expression before initialization and call it:
// hello(); // error
// var hello = function () {
//   console.log("“Hi”");
// };

// Write what happened and why.
// e. Write one sentence:
// What gets hoisted?
// What does not get hoisted fully?

// 3. Conditional Operators (if, else, else-if, ternary, switch)
// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.
// const age = 18;
// if (age > 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”
// const marks = 33;
// if (marks >= 90) {
//   console.log("A grade");
// } else if (marks >= 75) {
//   console.log("B grade");
// } else if (marks >= 50) {
//   console.log("C grade");
// } else if (marks >= 33) {
//   console.log("D grade");
// } else {
//   console.log("Fail");
// }

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”
// const city = "Delhi";
// if (city === "Bhopal") {
//   console.log("MP");
// } else if (city === "Delhi") {
//   console.log("Delhi");
// } else {
//   console.log("Unknown City");
// }

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.
// let score = 40;
// score > 35 ? console.log("Pass") : console.log("Fail");

// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }
// const temperature = 35;
// temperature > 30 ? console.log("Hot") : console.log("Pleasant");

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”
// const age = 18;
// const country = "India";
// if (age >= 18 && country === "India") {
//   console.log("Eligible for vote");
// } else {
//   console.log("Not Eligible");
// }
