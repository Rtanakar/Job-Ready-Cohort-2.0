// *******************************************************************************************************************************************
// Promises: resolve, reject, then, catch
// async/await syntax, error handling with try-catch
// Chaining async operations

// *******************************************************************************************************************************************
// Promises: resolve, reject, then, catch
// ap ak promise banate ho jo ki do states me se ak state me ja sakta hai aur vo ya to resolve hoga ya to reject hoga ab vo kya hoga ye to samay(awadhi) batayega par hame dono ke liye code likhna padta hai

// promises -> ek kaam jaake karo
// pending state
// hojaayega -> resolved
// nahi hoga -> reject

// hume naya promise banane me resolve aur reject milta hai // agar chije resolve ho jayegi to ve then me chali jayegi aur agar chije reject ho jayegi to ve catch me chalijagi
// const prs = new Promise((res, rej) => {
//   // logic go to meta and get data
//   // if data aya -> resolve -> then // data aya to resolve ho jayegi // aur then me chali jayegi
//   // else data nahi aya -> reject -> catch // data nahi aya to reject ho jayegi // aur catch me chali jayegi
// });
// prs
//   .then(() => {
//     // if data aya -> resolve
//   })
//   .catch(() => {
//     // else data nahi aya -> reject
//   });

// const pr = new Promise(function (res, rej) {
//   setTimeout(() => {
//     const rn = Math.floor(Math.random() * 10);
//     if (rn > 5) {
//       res("Resolve this " + rn);
//     } else {
//       rej("Rejected this " + rn);
//     }
//   }, 3000);
// });

// pr.then((val) => {
//   console.log(val);
// }).catch((val) => {
//   console.log(val);
// });

// ************************************************************
// Api call with promises
// https://dummyjson.com/users

// fetch -> fetch se kisi bhi url par ja sakte hai // agar ham without async/await ka use kar ke fetch ko likhte hai to hame 2 then likhte hai pahla api ko object me convert karne ke liye dosara actual result ke liye
// fetch ka data readable nahi hota
// use json banake readable karte hai
// aur last me iske bad jo data milta hai vo readable hota hai
// fetch("https://dummyjson.com/users")
//   .then((notReadableData) => {
//     // yanha par jab data ayega tab .json() lagane se data object me badal jata hai aur readable ho jata hai aur return karne se vo agle then me jakar data de deta hai
//     return notReadableData.json();
//   })
//   .then((asliData) => {
//     console.log(asliData.users[0]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// *******************************************************************************************************************************************
// ## async / await

// - `async` makes a function return a Promise.

async function getUser() {
  const raw = await fetch("https://dummyjson.com/users");
  const data = raw.json();
  return data;
}

getUser()

// ```js
// async function example() {
//   return "Hello";
// }

// example().then(console.log); // Hello
// ```

// - `await` pauses execution until the Promise resolves. You can use `await` only inside `async` functions.

// *******************************************************************************************************************************************
// #  Day 61 – **Promises, async/await, and fetch**

// ## Promises

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

// States:

// - `pending`
// - `fulfilled`
// - `rejected`

// ### Basic syntax

// ```js
// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Operation Successful!");
//   } else {
//     reject("Operation Failed!");
//   }
// });
// ```

// ### Consuming Promises (.then / .catch)

// ```js
// myPromise
//   .then(result => {
//     console.log(result); // Operation Successful!
//   })
//   .catch(error => {
//     console.error(error);
//   });
// ```

// ### Example: Promise with setTimeout

// ```js
// function waitForMe() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("2 seconds completed!");
//     }, 2000);
//   });
// }

// waitForMe().then(msg => console.log(msg));
// ```

// ## async / await

// - `async` makes a function return a Promise.

// ```js
// async function example() {
//   return "Hello";
// }

// example().then(console.log); // Hello
// ```

// - `await` pauses execution until the Promise resolves. You can use `await` only inside `async` functions.

// ### Example: Using await with a Promise

// ```js
// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Done waiting!"), ms);
//   });
// }

// async function run() {
//   console.log("Waiting...");
//   const result = await delay(2000);
//   console.log(result);
// }

// run();
// ```

// ## fetch

// `fetch()` is a built-in browser API that returns a Promise and is used to make HTTP requests (GET, POST, PUT, DELETE).

// ### Basic usage

// ```js
// fetch(url, options)
//   .then(response => /* ... */)
//   .catch(error => /* ... */);
// ```

// ### Example: Fetch API with async/await

// ```js
// async function getUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error occurred:", error);
//   }
// }

// getUser();
// ```

// ### Example: Fetch API with Promises

// ```js
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error:", error));
// ```

// ### Example: fetch wrapped in a callback

// ```js
// function fetchData(url, callback) {
//   fetch(url)
//     .then(response => response.json())
//     .then(data => callback(null, data))   // success callback
//     .catch(error => callback(error, null)); // error callback
// }

// // usage
// fetchData("https://jsonplaceholder.typicode.com/posts/1", (err, data) => {
//   if (err) {
//     console.error("Error:", err);
//     return;
//   }

//   console.log("Data:", data);
// });
// ```

// ## Why use Promises?

// - To avoid callback hell
// - Cleaner async code
// - Better error handling
// - Easy chaining

// Displaying Day 61 Async / await.md.
