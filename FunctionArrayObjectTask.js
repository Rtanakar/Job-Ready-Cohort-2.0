// Level 1 - Basic Function, Array & Object Code Tasks (Easy)
// 1. Write a function `sayHello()` that prints `"Hello JavaScript"`.
// function sayHello() {
//   console.log("Hello JavaScript");
// }
// sayHello();

// 2. Create a function `add(a,b)` that returns their sum and log the result.
// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 3));

// 3. Write a function with a default parameter `name = "Guest"` that prints `"Hi<name>"`.
// function yourName(name = "Guest") {
//   console.log(`Hi ${name}`);
// }
// yourName();
// // yourName("Shiva");

// 4. Use rest parameters to make a function that adds unlimited numbers.
// function unlimitedNum(...unlNum) {
//   // let sum = 0;
//   // unlNum.forEach((val) => {
//   //   sum += val;
//   // });
//   // console.log(sum);

//   const ans = unlNum.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
//   console.log(ans);
// }
// unlimitedNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 5. Create an IIFE that prints `"I run instantly!"`.
// (function () {
//   console.log("I run instantly!");
// })();

// 6. Make a nested function where the inner one prints a variable from the outer one.
// function outer() {
//   let a = 5;
//   return function inner() {
//     console.log(a);
//   };
// }
// outer()();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.
// const fruits = ["apple", "mango", "banana", "grapes", "pineapple"];
// fruits.push("orange");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// 8. Use a `for` loop to print all elements of an array.
// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 9. Create an object `person` with keys `name`, `age`, and `city`, and print each key's value.
// const obj = {
//   name: "person",
//   age: 5,
//   city: "Noida",
// };

// for (let key in obj) {
//   console.log(obj[key]);
// }

// Object.entries(obj).forEach((val) => {
//   return console.log(`${val[0]} : ${val[1]}`);
// });

// 10. Use `setTimeout()` to log `"Time's up!"` after 2 seconds.
// setTimeout(() => {
//   console.log("Time's up!");
// }, 2000);

// Level 2 - Functional Thinking & Logic Tasks (Intermediate)
// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.
// function runTwice(fn) {
//   fn();
//   fn();
// }
// runTwice(function () {
//   console.log("hof");
// });

// 2. Create one pure function that always returns the same output for a given input, and one impure function using a glabal variable.
// let input = 0;
// function pure(val) {
//   console.log(val);
// }
// pure(4);

// function impure(a) {
//   input++;
//   console.log(a + input);
// }
// impure(2);
// impure(2);

// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
// function objD({ name, age }) {
//   console.log(name, age);
// }
// objD({ name: "shiva", age: 5 });

// 4. Demonstrate the difference between normal functinal and arrow function when used as object methods (the `this` issue).
// const obj = {
//   name: "shivam",
//   age: 0,
//   fn: function () {
//     console.log(this);
//     let arfn = () => {
//       console.log(this);
//     };
//     arfn();
//   },
// };
// obj.fn();

// 5. Given an array of numbers, use `map()` to create a new array where each number i squared.
// const arr = [1, 2, 3, 4, 5];
// arr.map((i) => console.log(i * i));

// 6. Use `filter()` to get only even numbers from array.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const ans = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(arr);
// console.log(ans);

// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.
// const arr = [1000, 2000, 3000];
// const ans = arr.reduce((acc, val) => {
//   return acc + val;
// }, 0);
// console.log(ans);

// 8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
// const arr = ["ram", "shyam", "hanuman", "radhaJI", "shiva"];
// const ans = arr.some((val) => {
//   // return val > val[3];
//   return val.length > 3;
// });
// console.log(ans);

// const ans1 = arr.every((val) => {
//   return val > val[3];
// });
// console.log(ans1);

// 9. Create an object `user` and test the behavior of `Object.freeze()` and `Object.seal()` by adding/changing keys.
// const user = {
//   name: "Man",
//   age: 1,
//   city: "Boston",
// };

// const a = Object.freeze(user); // Object.freeze me ham na hi ham value jod payenge aur na hi ham value update kar payenge
// user.city = "ohio";
// console.log(a);
// const b = Object.seal(user); // Object.seal me ham value ko jod nahi sakte hai par hum value ko update kar sakte hai
// user.city = "ohio";
// console.log(b);

// 10. Create a nested object (`user -> address -> city`) and access the city name inside it.
// const user = {
//   name: "R",
//   address: {
//     city: "Boston",
//   },
// };

// const { city } = user.address; // this is Destructuring method
// console.log(city);

// const cityName = user.address.city; // this is normal method
// console.log(cityName);
