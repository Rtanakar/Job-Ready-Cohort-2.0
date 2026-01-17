// *******************************************************************************************************************************************
// 🧱Callbacks, Promises, and Async/Await
// ✅Teach:
// Synchronous vs asynchronous JS
// Callbacks pattern and callback hell

// *******************************************************************************************************************************************
// JS -> JavaScript single threaded language hai
// ak kam ak bar me kar peyegi // is process ko ham kahte hai synchronous approach // isi ko solve karne ke liye js me asynchronous hai jo multiple kam kar sakta hai aur code rukega nahi ak process ke liye

// *******************************************************************************************************************************************
// - Introduction to Asynchrony in JavaScript. -> Asynchrony js me ak kam jo time legi use side me chalana aur main code ko turant execute karna hi Asynchrony hai
// - Introduction to `callbacks` and Problems in Callbacks
// callbacks -> ek function jo turant nahi chalega ye chalega tab jab aapko koi kam complete hoga
// - Understanding `promises` - `pending`, `resolved`, `rejected`
// - How to prevent callback hell using `async` & `await`.
// - `setInterval` & `setTimeout` in JavaScript

// *******************************************************************************************************************************************
// Async/Await
// koi bhi code js mein line by line chalega aur ye natural pattern bhi hota hai ki code line by line chale, but kabhi kabaar aise cases aate hai life mein jaha par aapka code wait krta hai and utni der mein agla code chal jaata hai
// console.log("line 1");
// console.log("line 2");
// setTimeout(() => {
//   console.log("line 3");
// }, 2000);
// console.log("line 4");

// ******************************
// Synchronous vs asynchronous JS
// aisa code jo line by line chale vo hota hai sync code
// aisa code jo jab chalne ke liye ready ho jaaye tab chale wo hai async code

// Callbacks pattern
// callbacks --> ek function ko agar aap ek aur function bhej de rahe ho parameter mein, to wo parameter waala fnc kehlaata hai callback
// ek function jo turant nahi chalega ye chalega tab jab aapko koi kam complete hoga // callback vo function bhi hota hai jo ham kisi aur function me pass karte hai
// function shivaSeDetailsLaao(adress, cb) {
//   console.log("fetching data...");
//   setTimeout(() => {
//     cb({ lat: 2343, lon: 4544 });
//   }, 3000);
// }

// shivaSeDetailsLaao("delhi 1Bhk floor 2", function (details) {
//   console.log(details);
// });

// function instagramSeDataLao(username, cb) {
//   // yanha par username wala logic lagega jisse ki ham username se data le aye

//   console.log("fetching data...");
//   setTimeout(() => {
//     cb({ id: 1, username: "shivam@002", age: 24 });
//   }, 4000);
// }

// instagramSeDataLao("shivam@002", function (data) {
//   console.log(data);
// });

// shivaSeDetailsLaao(address, cb);
// dukaanKoDhondho(details, cb);
// samaanLelo(samanList, cb);
// gharAaJao(adress, cb);

// function kuckderbarchalunga(fnc) {
//   setTimeout(fnc, Math.floor(Math.random() * 20) * 1000);
// }
// kuckderbarchalunga(function () {
//   console.log("hey");
// });

// ******************************
// callback hell
// function abcd(fun1) {
//   fun1(function (fun3) {
//     fun3(function (fun5) {
//       fun5();
//     });
//   });
// }

// abcd(function (fun2) {
//   fun2(function (fun4) {
//     fun4(function () {
//       console.log("huy huy");
//     });
//   });
// });

// function profilelekarAao(username, cb) {
//   console.log("fetching profile data...");
//   setTimeout(() => {
//     cb({ __id: 123456, username, age: 26, email: "huihui@gmail.com" });
//   }, 3000);
// }

// function saarePostLekarAao(id, cb) {
//   console.log("fetching all posts...");
//   setTimeout(() => {
//     cb({ __id: id, posts: ["hey", "hello", "good morning"] });
//   }, 3000);
// }

// function savePostsAll(id, cb) {
//   console.log("fetching saved posts...");
//   setTimeout(() => {
//     cb({ __id: id, saved: [1, 2, 354, 5, 64, 6, 7] });
//   }, 3000);
// }

// profilelekarAao("Harsh", function (data) {
//   console.log(data);
//   saarePostLekarAao(data.__id, function (posts) {
//     console.log(posts);
//     savePostsAll(posts.__id, function (saved) {
//       console.log(saved);
//     });
//   });
// });

// *******************************************************************************************************************************************
// ⚠️ Confusion:
// async function always return promises
// Mixing async/await with then/catch

// *******************************************************************************************************************************************
// 🧠 Mindset:
// Async isn't magic - it's just structured waiting

// *******************************************************************************************************************************************
// 🧪 Practice Zone
// Build delay simulator using setTimeout + Promises
// Fetch multiple users and log them sequentially

// # Day 60 — Exercises
// ---
// ## Exercise 1 — Very Easy (Warming up)
// **Task (Hindi):** Ek function banao `afterDelay`
// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

// function afterDelay(time, cb) {
//   console.log("2 second baad ek kaam karna hai");
//   setTimeout(() => {
//     cb("Callback Executed");
//   }, time);
// }

// afterDelay(2000, function (data) {
//   console.log(data);
// });

// ---

// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

// function getUser(username, cb) {
//   console.log("getting a details...");
//   setTimeout(() => {
//     cb({ id: 1, username: "shivam" });
//   }, 1000);
// }

// function getUserPosts(userId, cb) {
//   console.log("getting a all posts...");
//   setTimeout(() => {
//     cb(["hello", "hi", "i", "am"]);
//   }, 2000);
// }

// getUser("shivam", function (data) {
//   getUserPosts(data.id, function (posts) {
//     console.log(data.username, posts);
//   });
// });

// function instagrameSeUniqueNumberLao(username, cb) {
//   setTimeout(() => {
//     cb({ uniqueNum: 1, name: "shivam" });
//   }, 1000);
// }

// function metaPeJaoImagesLekarAao(uniqueNum, cb) {
//   setTimeout(() => {
//     cb(["img1", "img2", "img3", "img4"]);
//   }, 3000);
// }

// instagrameSeUniqueNumberLao("shivam", function (data) {
//   metaPeJaoImagesLekarAao(data.uniqueNum, function (images) {
//     console.log(data.uniqueNum, images);
//   });
// });

// ---

// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai

// ---

function loginUser(username, cb) {
  console.log("login user....");
  setTimeout(() => {
    cb({ userId: 1, name: "shivam" });
  }, 1000);
}

function fetchPermissions(userId, cb) {
  console.log("fetching persmissions....");
  setTimeout(() => {
    cb(["read", "write", "delete"]);
  }, 1000);
}

function loadDashboard(permissions, cb) {
  console.log("loading dashboard....");
  setTimeout(() => {
    cb();
  }, 1000);
}

loginUser("shivam", function (data) {
  fetchPermissions(data.userId, function (permissions) {
    loadDashboard(permissions, function () {
      console.log("✅Dashboard loaded");
    });
  });
});

// ### Notes
// - Practice in plain JavaScript using `setTimeout` and callbacks to understand the flow before converting to Promises/async–await.
// Displaying Day 60 Question Sheet.md.

// *******************************************************************************************************************************************
// ## Day 59 notes
// ##  Synchronous JavaScript
// JavaScript is **single-threaded**, meaning it executes code **line-by-line**.
// The next line runs **only after** the previous line finishes.

// ### **Example**
// ```js
// console.log("A");
// console.log("B");
// console.log("C");
// ```

// ### **Output**
// ```
// A
// B
// C
// ```

// Everything runs in order.

// ---

// ##  Asynchronous JavaScript
// Some tasks take time → JS offloads them to browser APIs
// (e.g., **setTimeout, fetch, DOM events**).
// These tasks **do not block** the main thread.

// ### **Example**
// ```js
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("C");
// ```

// ### **Output order**
// ```
// A
// C
// B   ← (printed after 2 seconds)
// ```

// ---

// ##  Callbacks
// A **callback** is a function passed as an argument to another function.

// ### **Example**
// ```js
// function greet(name, cb) {
//   console.log("Hello " + name);
//   cb();
// }

// greet("Anubhav", () => {
//   console.log("Welcome!");
// });
// ```

// ---

// ##  Callback Hell
// Callback hell happens when callbacks become **nested, messy, and unreadable**.

// ###  Example: Callback Hell (Pyramid of Doom)
// ```js
// getData(function(data1) {
//   getMoreData(data1, function(data2) {
//     getMoreMoreData(data2, function(data3) {
//       getFinalData(data3, function(result) {
//         console.log(result);
//       });
//     });
//   });
// });
// ```

// Looks like a **pyramid of doom**
// Too many nested levels → hard to read, debug, and maintain.

// Displaying Day 59 - async_js_notes.md.
