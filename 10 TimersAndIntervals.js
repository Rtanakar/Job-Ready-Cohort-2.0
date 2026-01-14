// 🧱Timers and Intervals
// ✅Teach:
// setTimeout, clearTimeout
// setInterval, clearInterval
// Real use: delaying UI actions, auto-refresh

// *******************************************************************************************************************************************
// setTimeout 5000s (jo bhi aap yanha second denge) me ak bar chalta hai
// let set = setTimeout(() => {
//   console.log("codex");
// }, 5000);
// clearTimeout(set);

// // setInterval har 5000s (jo bhi aap yanha second denge) me chalega
// let sei = setInterval(() => {
//   console.log("Codr");
// }, 5000);
// clearInterval(sei);
// *******************************************************************************************************************************************
// ⚠️ Common Confusions
// setInterval vs setTimeout recursion

// *******************************************************************************************************************************************
// 🧪 Practice Zone
// Countdown time
// Auto-hide alert banner after 3s

// const main = document.querySelector("main");
// const btn = document.querySelector("button");
// const h1 = document.querySelector("h1");

// const user = "Namaste, I'm Shivam Mishra";
// btn.addEventListener("click", () => {
//   h1.textContent = "changing user...";
//   setTimeout(() => {
//     h1.textContent = user;
//   }, 2000);
// });

// let a = 0;
// let b = setInterval(() => {
//   a++;
//   console.log(a);
// }, 50);

// setTimeout(() => {
//   clearInterval(b);
// }, 5000);

// *******************************************************************************************************************************************
const btn = document.querySelector("button");
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");
const h2 = document.querySelector("h2");
let download = 0;
btn.addEventListener("click", () => {
  console.log("click");
  const random = Math.floor(Math.random() * 10);
  let int = setInterval(() => {
    if (download < 100) {
      download++;
      inner.style.width = `${download}%`;
      h2.textContent = `${download}%`;
      h2.style.color = "green";
    }
  }, random * 30);

  setTimeout(() => {
    clearInterval(int);
    h2.textContent = "Download Successfully🚀🎉";
    h2.style.color = "orange";
    btn.style.opacity = 0.5;
    btn.style.pointerEvents = "none";
    console.log(`downloaded in ${random} second`);
  }, random * 3000);

});

// *******************************************************************************************************************************************
// # 📘 Day 45 - More on DOM

// ## 🔹 **Synchronous JavaScript**
// Synchronous code executes **line-by-line**.
// Each task must finish **before the next one starts** — this blocks the single JS thread.

// ###  Simple Example
// ```js
// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");
// ```

// ### 📤 Output
// ```
// Step 1
// Step 2
// Step 3
// ```

// 👉 JavaScript executes everything **in order**, without skipping.

// ---

// ## 🔹 **Asynchronous JavaScript**
// Asynchronous code allows JS to **start a task and continue running** without waiting for it to finish.

// ### ⭐ Key Features
// - Non-blocking
// - Uses **Event Loop**, **Callback Queue**, **Microtask Queue**
// - Does not freeze UI

// ### 🧠 Why Async?
// Real apps need time-consuming tasks like:
// - fetching data
// - waiting for timers
// - reading files
// - animations
// - user interactions

// If JS waited synchronously → **UI freezes**
// So JS uses **asynchronous programming**.

// ### Simple Example
// ```js
// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 2000);

// console.log("third");
// ```

// ---

// ## ⏰ **setTimeout()**
// `setTimeout()` schedules code to run **after a delay**, without stopping execution.

// ### Important Points
// - Does *not* pause JavaScript
// - Uses browser Web APIs
// - Executes later

// ### Example
// ```js
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("C");
// ```

// ---

// ## 🔁 **setInterval()**
// `setInterval()` repeatedly executes code after every given interval.

// ### Features
// - Runs again & again
// - Asynchronous
// - Must be manually stopped

// ### Basic Example
// ```js
// setInterval(() => {
//   console.log("Hello every 1 second");
// }, 1000);
// ```

// ⏳ Keeps running forever unless stopped using `clearInterval()`.

// ---

// ## 🛑 **clearInterval()**
// Used to **stop a running interval**.
// You must pass the interval ID returned by `setInterval()`.

// ### Example: Stop Interval After 5 Seconds
// ```js
// let count = 1;

// const id = setInterval(() => {
//   console.log("Count:", count);
//   count++;
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("Interval stopped!");
// }, 5000);
// ```

// ### 🟦 Output
// ```
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Interval stopped!
// ```
