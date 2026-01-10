// 📦 Chapter 1: Variables & Declarations
// 🧠 What are Variables?
// Variables are containers that hold data.
// They help us store, reuse, and update information in JavaScript — from simple values like
// numbers to complex data like arrays and objects.
// Think of a variable as a box with a name on it. You can put something inside it (a value), and later
// check or change what's inside.
// In JavaScript, you create these boxes using keywords: var , let , or const .

// *******************************************************************************************************************************************
// 🧪 var, let, and const – Line-by-Line Comparison
// *******************************************************************************************************************************************

// 🧓 var – Old and risky
// Scoped to functions, not blocks
// Can be redeclared and reassigned
// Hoisted to the top with undefined value

// var score = 10;
// var score = 20; // OK

// // *******************************************************************************************************************************************
// // 🧑‍💻let – Modern and safe
// // Scoped to blocks ( {} )
// // Can be reassigned but not redeclared
// // Hoisted, but stays in the Temporal Dead Zone (TDZ)

// let age = 25;
// age = 30; // ✅ reassigned
// // let age = 40; // ❌ Error (same block) redeclared

// // *******************************************************************************************************************************************
// // 🔐 const – Constant values
// // Scoped to blocks
// // Cannot be reassigned or redeclared
// // Value must be assigned at declaration
// // TDZ applies here too

// const PI = 3.14;
// PI = 3.14159; // ❌ Error

// // 👉 But: If const holds an object/array, you can still change its contents:
// const student = { name: "Riya" };
// student.name = "Priya"; // ✅ OK
// student = {}; // ❌ Error

// *******************************************************************************************************************************************
// var let const
// declarations and initialization
// var a; // declaration
// var a = 10; // declaration and initialization
// a = 10; // initialization

// *******************************************************************************************************************************************
// var
// Add to the window ---> Window me add hota hai
// var function scoped ---> function scoped hota hai
// var is can be rediclard ---> app firse declare kr sakte ho same name se and error nahi ayega

// let
// let are block scoped
// let can't be rediclard
// let b;
// let b = 5;

// *******************************************************************************************************************************************
// Scoped (Globle, Block, Function)
// var (function) by default
// let (Block) like this {}
// const (Block) like this {}

// Globle Scoped use all code ---> Globle Scoped ko pure code me use kar sakte hai
// Function Scoped use only function scope ---> Function Scoped ko fucntion ke ander access karna
// Block Scoped use only {} (Curly brackets, or braces) ---> Block Scoped ko curly braces ke under use karte hai

// *******************************************************************************************************************************************
// // Reassignment, redeclaration
// // var alow both of reassignment and redeclaration
// var a = 5;
// var a = 10; // redeclaration
// a = 11; // reassignment

// // let alow reassigment and not allow redeclaration  ---> let alow nahi karta hai redeclaration
// let b = 10;
// b = 11; // reassigment
// // let b = 11; // redeclaration

// // const cannot alow reassigment and redeclaration ---> const alow nahi karta hai reassigment aur redeclaration ko
// const c = 10;
// c = 11; // reassigment
// console.log(c)
// // const c = 12; // redeclaration
// // console.log(c)

// *******************************************************************************************************************************************
// // TDZ (Temporal Dead Zone) ---> utna area jitne me js ko pata to hai ki variable exist karta hai par wo aapko value nahi de sakta hai
// console.log(d); // d ko initializr karne se pahle bata nahi sakta hu ki d ki value kya hai

// // Temporal Dead Zone only work for let and const
// // in var to hoisting

// let d = 4;

// let age = 25;
// age = 30; // ✅
// let age = 40; // ❌ Error (same block)

// *******************************************************************************************************************************************
// Hoisting impact per type
// hoisting ---> ek variable ko jab js mein banate hai to wo variable do hisso me toot jata hai aur uska declare part upar chala jata hai and uska initializatin part neeche rah jata hai
// console.log(e);

// var e = 10;

// // example
// // do hisso me toot jata hai
// // declare part upar chala jata hai
// var e = undefined;

// // initializatin part neeche rah jata hai
// e = 10;

// var -> hoist -> undefined
// let -> hoist -> X
// const -> hoist -> X

// *******************************************************************************************************************************************
// Common Confusion in const
// const student = { name: "Riya" };
// student.name = "Priya"; // ✅ OK
// student = {}; // ❌ Error

// Confusion in var let and const
// {
//  var x = 5;
//  let y = 10;
//  const z = 15;
// }
// console.log(x); // ✅ 5
// console.log(y); // ❌ ReferenceError
// console.log(z); // ❌ ReferenceError

// *******************************************************************************************************************************************
// console.log("hehehehhe"); // console.log console me print ke liye kam me ata hai
// console.info("hehheheehffkdsf"); // console.info me kuch kuch brower me i sign show hota hai
// console.warn("warn");
// console.error("error");

// // kuch kuch browsers bas console.info ko thode alag tarike se show karte hai unke age ek i sign ajata hai

// prompt(); // promt me dialog box dikhate hai jisme user input de sakta hai
// alert(); // alert me dialog box dikhate hai chijo ko alert ke liye

// *******************************************************************************************************************************************
// slice
// slice method array ko change nahi karta humko ak naya return copy deta hai array ki // isme do property hoti hai pahli index janha se hatani hai aur dusri kanha tak hatani hai. janha tak hatani hai uske ak value pahle tak hatata hai // ye original array ko change nahi karta hai
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(0, 3);
// console.log(newArr);
// console.log(arr);

// const something = "Hello everyone how are you.";
// const somethingCopy = something.slice(14, 19);
// console.log(somethingCopy);

// *******************************************************************************************************************************************
// split

// *******************************************************************************************************************************************
// temp
