// *******************************************************************************************************************************************
// The this keyword
// ✅Teach:
// this in global scope, function, method, event handler, class
// Arrow functions and lexical this
// Manual binding: bind, call, apply

// *******************************************************************************************************************************************
// this
// this keyword special keyword hai, kyuki jaise ki baaki saare keyword ki value ya unka nature same rehta hai this ki value ya nature badal jaata hai is baat se ki aap usey kaha youse kar rahe ho

// *******************************************************************************************************************************************
// global scope
// global scope me this ki value window hoti hai
// window hai pradhan mantri - supreme
// console.log(this);

// *******************************************************************************************************************************************
// function
// function me bhi this ki value window hoti hai
// function abcd() {
//   console.log(this);
// }
// abcd();

// *******************************************************************************************************************************************
// method
// method ke ander this ki value object hoti hai
// ak aisa function jo ki object ke ander ho use ham method kahte hai.
// isme this keyword pure object ki ki value ko deta hai name ki value chahiye to name ki value dega ya age ki value chahiye to age ki value dega
// arrow function hamesa this ki value apne parent se lete hai
// const obj = {
//   name: "ram",
//   age: 0,
//   sayHello: function () {
//     console.log(this.name);
//   },
// };
// obj.sayHello();

// *******************************************************************************************************************************************
// event handler
// event handler me hamesa jis par event listener laga hota hai wahi this keyword hota hai
// yanha par h1 para laga hai event listener to h1 hi this ki value hai
// document.querySelector("h1").addEventListener("click", function () {
//   console.log((this.style.color = "red"));
// });

// *******************************************************************************************************************************************
// class
// class ander this ki value blank object hoti hai jab aap use new keyword ke sath call karte ho
// class Abce {
//   constructor() {
//     console.log("hey");
//     this.a = 12;
//   }
// }
// let val = new Abce();
// console.log(val);

// *******************************************************************************************************************************************
// global - window
// console.log(this);

// **********************************************
// function - window
// function abcd() {
//   console.log(this);
// }

// **********************************************
// es5 normal function inside object - object
// const efhg = {
//   name: "van",
//   age: 44,
//   oooo: function () {
//     console.log(this);
//   },
// };

// **********************************************
// es6 arrow function inside object - window
// const ijkl = {
//   name: "van",
//   age: 44,
//   oooo: () => {
//     console.log(this);
//   },
// };

// **********************************************
// es6 arrow function inside es5 function - object
// const lklk = {
//   name: "van",
//   age: 44,
//   oooo: function () {
//     let aaa = () => {
//       console.log(this);
//     };
//     aaa();
//   },
// };

// **********************************************
// event handler - element
// document.querySelector("h1").addEventListener("click", function () {
//   console.log(this);
// });

// **********************************************
// class - blank object
// class Mmm {
//   constructor() {
//     this.age = 55;
//   }
// }
// const mm = new Mmm();
// console.log(mm);

// *******************************************************************************************************************************************
// Arrow functions and lexical this
// Arrow functions hamesa this ki value apne perent se lete hai
// agar ham function ki jagah arrow function de de to arrow function ka parent ak global obj hoga jo ki hame widow dega isliy hame function ke ander hi arrow function dena chahiye
// const obh = {
//   age: 24,
//   name: "SITAJI",
//   sayHola: function () {
//     let defg = () => {
//       console.log(this.age);
//     };
//     defg();
//   },
// };
// obh.sayHola();

// *******************************************************************************************************************************************
// Manual binding: bind, call, apply
// call
// fnc chalata hai and this ki value set karta hai
// ham b function me b.call(a) b ko call kar diya a object se to a ki value b me ham le sakte hai call manual se
// hamesa function hi call hota hai matlab // b.call(a) is tarah se
// let a = {
//   name: "HANUMANJI",
//   age: 0,
// };
// function b() {
//   console.log(this.name);
// }
// b.call(a);

// apply
// wahi karta hai jo call karta hai and arguments mein pahli value this ki and doosri value array hoti hai
// apply me ham ak se jyada parameter bhej sakte hai aur ak sath call kar sakte hai sabhi ko // ak se jyada bhejna hai to [] ka use karo
// let a = {
//   name: "HANUMANJI",
//   age: 0,
// };
// function b(e, f, g) {
//   console.log(this.name, e, f, g);
// }
// b.apply(a, [1, 2, 3]);

// bind
// wahi karta hai jo call karta hai and aapko naya fnc deta hai
// ye ak naya function bana deta hai
// let a = {
//   name: "HANUMANJI",
//   age: 0,
// };
// function b(e, f, g) {
//   console.log(this, e, f, g);
// }
// let fnc = b.bind(a, 1, 2, 3);
// fnc();

// *******************************************************************************************************************************************
// ⚠️ Confusions
// Why arrow functions "lose" this for methods
// this inside event listeners

// *******************************************************************************************************************************************
// 🧠 Mindset:
// this doesn't lie - the call site defines its behavior

// *******************************************************************************************************************************************
// 🧪 Practice Zone
// Create custom logger object with multiple method styles
// Use bind() to fix incorrect context

// *******************************************************************************************************************************************
// #  Day 57 – Advance JS 2

// call apply bind -> ek function mein this ki value window hoti hai, agar aap chaahte ho ki wo value window naa ho par koi aur object ho tab aap use kr sakte ho call apply bind ko

// ---

// ## 1. `this` Keyword
// **Definition:**
// `this` refers to the current object depending on *how* the function is called.

// ---

// ###  Example: Basic `this`

// ```js
// const obj = {
//   name: "Anubhav",
//   show() {
//     console.log(this.name);
//   }
// };

// obj.show();
// ```

// ---

// ## 2. `call()`
// Calls a function with a specific `this` value.

// ```js
// function hello() {
//   console.log(`Hello ${this.name}`);
// }

// hello.call({ name: "Anubhav" });
// ```

// ---

// ## 3. `apply()`
// Same as `call()`, but arguments are passed as an array.

// ```js
// function sum(a, b) {
//   console.log(this.name, a + b);
// }

// sum.apply({ name: "Total:" }, [10, 20]);
// ```

// ---

// ## 4. `bind()`
// Returns a new function with fixed `this`.

// ```js
// function welcome() {
//   console.log("Welcome", this.user);
// }

// const newFn = welcome.bind({ user: "Anubhav" });
// newFn();
// ```

// ---

// #  Deep Notes on `this` Behavior

// ---

// ##  1. Global Scope → `this = window`
// ```js
// console.log(this);  // window (in browser)
// ```

// ---

// ##  2. Normal Function → `this = window` (non–strict mode)
// ```js
// function show() {
//   console.log(this);
// }
// show();  // window
// ```

// ---

// ##  3. ES5 Function Inside Object → `this = object`
// ```js
// const obj = {
//   name: "Anubhav",
//   getName: function () {
//     console.log(this);  // obj
//   }
// };

// obj.getName();
// ```

// ---

// ##  4. ES6 Arrow Function Inside Object → `this = window`
// Arrow functions **do not bind** `this`.

// ```js
// const obj = {
//   name: "Anubhav",
//   show: () => {
//     console.log(this);  // window
//   }
// };

// obj.show();
// ```

// ---

// ##  5. ES5 Function inside ES5 Function → `this = window`
// Nested functions lose the outer `this`.

// ```js
// const obj = {
//   name: "Anubhav",
//   outer() {
//     function inner() {
//       console.log(this);  // window
//     }
//     inner();
//   }
// };

// obj.outer();
// ```

// ---

// ##  Solution → Use Arrow Function

// ---

// ##  6. Arrow Function inside ES5 Function → `this = object`
// Arrow function copies `this` from outer function.

// ```js
// const obj = {
//   name: "Anubhav",
//   outer() {
//     const inner = () => {
//       console.log(this);  // obj
//     };
//     inner();
//   }
// };

// obj.outer();
// ```

// Displaying Day 57 - Advance js 2.md.
