// Control Flow
// Conditionals

// Programming me kai bar aisa phase ata hai jaha par apko decide karna padta hai ki kya karen, option A chose kare ya option B chose karen
// agar barish ho rahi hai to print karo hello nahito print karo bye-bye
// if else else-if ternary switch-case

// user password do -> password agar sahi hai to accepted nahi to error

// *******************************************************************************************************************************************
// 🚦 What is Control Flow?
// Control flow decides which code runs, when it runs, and how many times it runs.
// It's like decision-making + direction in your JavaScript program.
// If operators are the verbs, control flow is the traffic signal.

// *******************************************************************************************************************************************
// 🧱 if, else if, else

// if (condition) {
//   // runs if condition is true
// } else if (anotherCondition) {
//   // runs if first was false, second is true
// } else {
//   // runs if none are true
// }

// ✅ Example:
// let marks = 91;
// if (marks >= 90) {
//  console.log("A");
// } else if (marks >= 75) {
//  console.log("B");
// } else {
//  console.log("C");
// }

// *******************************************************************************************************************************************
// 🌀 switch-case
// Great for checking one variable against many values.
// switch (value) {
//  case value1:
//  // code
//  break;
//  case value2:
//  // code
//  break;
//  default:
//  // fallback
// }

// ✅ Example:
// let fruit = "apple";
// switch (fruit) {
//  case "banana":
//  console.log("Yellow");
//  break;
//  case "apple":
//  console.log("Red");
//  break;
//  default:
//  console.log("Unknown");
// }

// *******************************************************************************************************************************************
// 🔁 Early Return Pattern
// Used in functions to exit early if some condition fails

// function checkAge(age) {
//   if (age < 18) return "Denied";
//   return "Allowed";
// }

// This avoids deep nesting and makes logic cleaner.

// *******************************************************************************************************************************************
// *******************************************************************************************************************************************
// Loops
// (JavaScript – Learn Everything Series by Sheryians Coding School)
// 🔄 Why Loops?
// Loops help us repeat code without rewriting it.
// If a task needs to be done multiple times (e.g., printing 1–10, going through an array, or
// checking each character in a string), loops are the backbone.

// chijo ko repeat karna hi loop hota hai

// repeat karne ko loop kahte hai
// 1 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8 9

// kaha se jana hai -> kaha tak jana hai -> kaise jana hai
// for

// kaha se jana hai -> kab rukna hai -> kaise jana hai
// while

// 1 - 40 for
// 20 - 30 for
// tab tak chalna jab tak ki hello na aajaye - while
// laal color ka ped na mil jaye- while
// bhaalu mile jab jiske upar hirad baitha hai - while

// straightforward loops -> naa hi value badalti hai na hi printing badalti hai
// dynamic loop -> value badal sakti hai and printing bhi badal sakti hai

// *******************************************************************************************************************************************
// 🔁 for Loop
// for
// for (start; end; change) {}

//  1 - 100
// for (i = 1; i < 101; i++) {
//   // i = 1; means kaha se start karna hai // i < 101; means kaha tak jana hai // i++ means change kya karna hai
//   console.log(i);
// }

// 1 - 50
// for (let i = 1; i < 51; i++) {
//   console.log(i);
// }

// 30 - 10
// for (let i = 30; i > 9; i--) {
//   console.log(i);
// }

// 121 - 12
// for (let i = 121; i > 11; i--) {
//   console.log(i);
// }

// 12 - 1
// this is continue method
// for (let i = 12; i > 0; i--) {
//   if (i === 5 || i === 7) {
//     continue;
//   }
//   console.log(i);
// }

// by pass method
// for (let i = 12; i > 0; i--) {
//   if (i === 5 || i === 7) {
//   } else console.log(i);
// }

// this is !not method
// for (let i = 12; i > 0; i--) {
//   if (i !== 5 && i !== 7) {
//     console.log(i);
//   }
// }

// Start from i = 0
// Run till i < 5
// Increase i each time

// *******************************************************************************************************************************************
// 🔁 while Loop

// start;
// while (end) {
//   // code
//   change;
// }

// let a = 1; // start
// while (a < 32) {
//   // end
//   // a = 1; means kaha se start karna hai // a < 32; means kaha rukna hai // code // i++ means change kya karna hai
//   console.log(i); // code

//   i++; // change
// }

// *******************************************************************************************************************************************
// 🔁 do-while Loop

// Runs at least once, even if condition is false

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 20);

// *******************************************************************************************************************************************
// ⛔ break and continue
// // break : Exit loop completely
// for (let i = 1; i < 201; i++) {
//   console.log(i);
//   if (i === 32) {
//     break; // exit loop completely after 32
//   }
// }

// continue : Skip current iteration and move to next
// for (i = 1; i < 201; i++) {
//   if (i === 32) {
//     continue;
//   }
//   console.log(i); // Skips 32
// }

// for (let i = 1; i < 21; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// *******************************************************************************************************************************************
// ⚠️ Common Confusions
// while and do-while work best when number of iterations is unknown

// *******************************************************************************************************************************************
// 🧠 Mindset
// Loops = data processor.
// Use the right loop for the job:
// for = best for numbers/indexes
// while = for unpredictable conditions

// *******************************************************************************************************************************************
// Assignments

// Level 1 - Pure Beginner Practice
// 1. Print numbers from 1 to 10
// Loop from 1 to 10 and print each number.
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 2. Print only even numbers from 1 to 20
// Use a loop and condition to print only even ones.
// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 3. Print numbers from 10 to 1
// Reverse loop with a decrement.
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// 4. Print the word "Yes" 5 times
// Repeat using a loop.
// for (let i = 1; i < 6; i++) {
//   console.log("Yes");
//   console.log(`${i} "Yes"`);
// }

// 5. Print whether numbers from 1 to 10 are even or odd
// For each number, check: even -> "Even", else -> "Odd"
// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} -> "Even"`);
//   } else {
//     console.log(`${i} -> "Odd"`);
//   }
// }

// 6. Ask user for a number and say if it's positive negative
// Use Promt() and a conditional.
// const input = prompt("Enter your number:");

// if (input === null) {
//   console.error("You cancelled");
// } else {
//   const num = Number(input.trim());

//   if (!input.trim()) {
//     console.error("You did not enter any number");
//   } else if (isNaN(num)) {
//     console.error("You did not enter a valid number");
//   } else {
//     console.log(num >= 0 ? "Positive +" : "Negative -");
//   }
// }

// 7. Ask User's age and check if eligible to vote
// If age >= 18 -> "Eligible", else -> "Not eligible"
// let age = prompt("Enter Your Age: ");
// if (age === null) {
//   console.error("You cancelled");
// } else {
//   const num = Number(age.trim());
//   if (!age.trim()) {
//     console.error("You did not enter any number");
//   } else if (isNaN(num)) {
//     console.error("You did not enter a valid number");
//   } else {
//     if (age < 0) {
//       console.log("Please Enter the Positive Number");
//     } else if (age >= 18 && age <= 150) {
//       console.log("Eligible");
//     } else {
//       console.log("Not Eligible");
//     }
//   }
// }

// 8. Print multiplication table of 5
// Use loop to print 5 * 1 to 5 * 10.
// let p = prompt("Enter Your Number");
// for (let i = 1; i < 11; i++) {
//   console.log(`${p} * ${i} = ${p * i}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
// let count = 0;
// for (let i = 1; i < 16; i++) {
//   if (i > 8) {
//     count++;
//     // ++count;
//     console.log(i);
//   }
// }
// console.log(`Total Count is: ${count}`);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
// let correctPassword = "shivam@mishra@2023";
// let password = prompt();
// if (password === null) {
//   console.error("You cancelled");
// } else {
//   if (password.trim() === "") {
//     console.error("Please, write something");
//   } else if (correctPassword === password) {
//     console.log("User Access the Account🎉");
//   } else {
//     console.log("Password not Match Corrent Password");
//   }
// }

// if (correctPassword === password) {
//   console.log("User Password is correct🔥🎉");
// }

// Level: 2 – Slightly Tougher but Logical
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
// let attempts = 0;
// let oldPassword = "shivam@2023";
// let password = prompt();
// attempts++;

// while (attempts < 3 && password !== oldPassword) {
//   password = prompt();
//   attempts++;
// }

// if (attempts === 3 && password !== oldPassword) {
//   console.error("Account Locked");
// } else {
//   console.log("Access Admin Panel");
// }

// while (password !== oldPassword) {
//   if (attempts === 3) {
//     console.log("Account Locked");
//     break;
//   }
//   password = prompt();
//   if (password === oldPassword) console.log("Password Matched");
//   attempts++;
// }

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
// let askWords = prompt("Enter Your Word");
// let count = 0; // count ki value by default 0 hai

// // jab tak askWords ke barabar nahi hai stop tab tak under ka code chalao
// while (askWords !== "stop") {
//   // agar askwords barabar ho jaye yes ke to
//   if (askWords === "yes") {
//     count++; // count karte jao keval yes ko
//   }
//   askWords = prompt(); // tab tak puchte raho word ko jab tak askWords stop ke barabar na ho jaye
// }
// console.log(`Total times of yes count: ${count}`); // print kar do count ko

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.
// for (let i = 1; i < 51; i++) {
//   if (i % 7 === 0) {
//     console.log(`${i} Divisible by 7`);
//   }
// }

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.
// let sum = 0;
// for (let i = 1; i < 31; i++) {
//   if (i % 2 === 1) {
//     sum += i;
//   }
// }
// console.log(`The Sum of Odd Numbers is: ${sum}`);

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// let num = +prompt();
// // hame ese jab tak chalte rahra hai jab tak num ko 2 se divide karu aur reminder 0 na aye tab tak ye loop chalega agar reminder 0 a gaya to ye loop band ho jayega
// while (num % 2 !== 0) {
//   num = +prompt(); // tab tak puchate rahena hai jab tab 0 na aye // agar 0 a gaya to ye puchna band kar dega // kyunki hamne num ko 2 se divide karne par 0 na aye isliye puchega ye
// }

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// let start = prompt();
// let end = prompt();
// if (start > end) console.error("Start can not be bigger than end");
// for (let i = start; i <= end; i++) {
//   console.log(i);
// }

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
// let counter = 0;
// for (let i = 1; i < 21; i++) {
//   if (counter === 3) break;
//   if (i % 2 !== 0) {
//     console.log(i);
//     counter++;
//   }
// }

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.
// let counter = 0;
// for (let i = 1; i < 6; i++) {
//   let p = +prompt();
//   if (p >= 0) counter++;
// }
// console.log(counter);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”
// let balance = 1000;
// let counter = 0;
// let flag = false;

// while (balance > 0 && counter !== 3) {
//   let withdraw = +prompt("Please me Your withdraw amount");
//   counter++;
//   if (withdraw <= balance) balance -= withdraw;
//   else {
//     flag = true;
//     break;
//   }
// }

// if (flag === true) {
//   console.log("Insufficient Balance");
// }

// console.log(`Your Balance is: ${balance}`);
