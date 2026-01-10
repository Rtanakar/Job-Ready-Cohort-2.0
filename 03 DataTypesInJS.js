// Primitives -> aisi saari values jinko copy karne par hame ek real copy mil jaye // jinki value direct copy kar sakte hai
// string, number, boolean, null, undefined, symbol, bigInt

// reference (relative) -> inko copy karne par real copy nahi milegi but humko reference milega parent ka // inko hum direct copy nahi kar sakte hai // jisme bracket ho vo sabhi value relative ya reference data type hoti hai
// arrays, objects, functions // [] {} ()

// Primitives -> jinki value direct copy kar sakte hai
// Non-Primitives or reference or relative -> jinki value direct copy nahi kar sakte hai

// float - aisa koi bhi number jisme point ata hai use float kahte hai // 23.3
// number - 23 // isko integer bhi kaha jata hai
// string - vo sabhi jo number nahi hai string hai // name email password
// boolean - ye value ya ans ko sirf true or false me deti hai
// null - jab apke pas koi value na ho dene ke liye tab ham null ka use karte hai

// array - ak se jyada value ko hold karne ke liye hoti hai // const arr = ["Sita", "Ram", 1, 2, 3, 4, {}, [], true, false, class Home] sabhi ko hold kar sakte hai chahe vo kaise bhi ho

// object - ak se jyada properties ak person ki hold karne ke liye hoti hai //
// Symbol - will learn when we will see objects in detail
// undefined - jab koi variable banaya aur usme koi value nahi di
// NaN - koi number ke sath aisa operation kia jaye jo hohi nahi sakta to NaN milta hai
// Infinity - Infinity
// relative and primitive datatype in js

// *******************************************************************************************************************************************
// string
// A string is a sequence of characters used to represent text.
// Strings can be created using single (`'`), double (`"`) or backticks (`` ` ``).
// let a = "";
// let b = "";
// let c = ``;

// number
// Numbers and Floats
// JavaScript uses a single type of number: `number`. It can represent both integers and floating-point numbers.
// let a = 1;
// let b = 1.5;

// boolean
// let a = true;
// let b = false;

// null
// The `null` type represents an intentional absence of any object value.
// `typeof null` returns `"object"` — this is a historical bug in JavaScript
// null ka matlab hai humne jaan boojh kar koi value nahi di

// // undefined
// A variable that has been declared but not assigned a value is undefined.
// `undefined` means a variable exists but has no value assigned.
// // undefined ka matlab ki humne ek variable banaya aur usey value nahi di to jo value by default mili wo hai undefined
// let a;

// Symbol
// Symbol ---> Unique immutable value
// A Symbol is a unique and immutable data type introduced in ES6.
// We will learn more about Symbols when we study objects in detail.
// future mein hum koi libraries use karenge ab is case mein un libraries mein kai baar kuchh fields hoti hai jinse similar hum bhi banaa dete hai aur galti se humaari banaai hui feilds us library ki original fields ko change kar deta hai
// ak pekar se Symbol overrite nahi karta hai cijo ko unique hi rakhta hai chahe ve same ho ya nahi
// let a = Symbol("uid");
// let b = Symbol("uid");
// console.log(a === b); // false because a symbol is unique and b symbol is unique, those are different

// NaN (Not-a-Number)
// NaN represents a value that is not a valid number.
// Use `isNaN()` to check if a value is NaN.

// BigInt
// bigint me ham badi se badi value rakh sakte hai without error. last me n likh kar
// let a = 485894898945593543859034853485n;
// console.log(a);

//  Infinity and -Infinity
// `Infinity` represents a number too large to be represented in JavaScript.
// You can use it for mathematical comparisons.

// *******************************************************************************************************************************************
// ✅ Summary Table
// Type      Example                    Category                            Description
// Number    `42`, `3.14`               Primitive                           Numeric values
// String    `'hello'`, `"world"`       Primitive                           Text values
// Boolean   `true`, `false`            Primitive                           Logical values
// Null      `null`                     Primitive                           Empty value
// Undefined `undefined`                Primitive                           Uninitialized variable
// Symbol    `Symbol("id")`             Primitive                           Unique value identifier
// Object    `{name: "Ritik"}`          Reference                           Collection of data
// Array     `[1,2,3]`                  Reference                           Ordered list
// NaN       `NaN`                      Primitive                           Not a number
// Infinity  `Infinity`                 Primitive                           Beyond numeric limit

// *******************************************************************************************************************************************
// 🏁 Conclusion
// Understanding data types is the foundation of JavaScript.
// They help you decide how data should be stored, used, and
// manipulated efficiently.
// Next, we will dive deeper into objects and symbols to
// understand complex data handling in JavaScript.

// *******************************************************************************************************************************************
// Assignment
// Primitive vs Reference
// 1. let x = 5; let y = x; y = 10; console.log(x, y)
// let x = 5; // 5
// let y = x; // 5
// y = 10; // 10
// console.log(x, y); // 5, 10

// 2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”;
// let obj1 = { name: "SitaJI" };
// let obj2 = obj1;
// obj2.name = "RadhaJi"; // RadhaJi
// console.log(obj1); // RadhaJi
// console.log(obj2); // RadhaJi

// let age = 25;
// console.log(typeof age); // number

// let name = "Hars" + (2 + 3);
// console.log(typeof name); // string

// let isStudent = true;
// console.log(typeof isStudent); // boolean

// let skills = ["JS", "HTML", 1, 2, 3, {}];
// console.log(typeof skills); // object

// let user = { city: "Bhopal" };
// console.log(typeof user); // object

// let x = null;
// console.log(typeof x); // object

// let y;
// console.log(typeof y); // undefined

// let z = Symbol("id");
// console.log(typeof z); // symbol
