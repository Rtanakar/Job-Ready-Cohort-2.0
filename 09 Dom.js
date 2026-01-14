// dom manipulation
// html se element select karna
// text badalna
// html badalna
// css badalna
// attribute
// event listeners

// *******************************************************************************************************************************************
// Selecting Elements
// kisi bhi element ko select karna from html se
// normal se select karna hai to querySelector('h1') bracket ke ander ham tag ka name likhe sakte hai jo tag hame chahiye aur isme ham direct . lagakar class ko access kar sakte hai aur # lagakar id ko access kar sakte hai // ye ek prakar se all in one hai
// let hello = document.querySelector("h1");
// let helloAll = document.querySelectorAll("h1"); // ye sabhi ko ek sath select karta hai
// console.dir(helloAll);

// agar id se select karna hai to getElemetById('abcd')
// let abcd = document.getElementById("abcd");
// console.log(abcd);

// // agar class se select karna hai to getElemectsByClassName('efgh')
// let efgh = document.getElementsByClassName("efgh");
// console.log(efgh);

// *******************************************************************************************************************************************
// Text/content access: innerText, textContent, innerHTML

// const h1 = document.querySelector("h1");
// // Ye text badalta hai html ke content me
// // h1.textContent = "Yes JS";

// // ye bhi text badalta hai html ke content me
// // h1.innerText = "ok js";

// // ye content ke ander html ko badalta hai
// h1.innerHTML = '<i>js</>'
// console.dir(h1);

// *******************************************************************************************************************************************
// Attribute manipulation: getAttribute, setAttribute, removeAttribute
// attribute tag me extra property hoti hai // jais <a> tag ke ander href ak attribute hai <a href=""></a>
// const a = document.querySelector("a");
// set attribute set karta hai // ye pahle me name aur dusare me value leta hai pahli kisme set karna hai aur dusari kya set karna hai
// a.setAttribute("href", "http://google.com");
// a.href = "http://google.com";
// console.dir(a);

// const img = document.querySelector("img");
// img.setAttribute(
//   "src",
//   "https://ik.imagekit.io/sheryians/profile_dp/0f02edb00c7a4ecb1b7506002_EwzSDIO0D"
// );

// setAttribute
// set attribute hame value lakar deti hai
// const a = document.querySelector("a");
// console.log(a.getAttribute("href"));

// removeAttribute
// remove attribute value ko hata deti hai
// const a = document.querySelector("a");
// console.log(a.removeAttribute("href"));

// *******************************************************************************************************************************************
// Dynamic DOM manipulation: createElement, appendChild, removeChild, prepend

// createElement ---> Element ko create karna jaise h1, p, a, img anyone ect...
// create element
// append element ko last me add karta hai
// prepend element ko pahle add karte hai
// const h1 = document.createElement("h1");
// h1.textContent = "shivam mishra ratnakar";
// document.querySelector("body").appendChild(h1);

// // removeChild hata deta hai element ko
// document.querySelector("body").removeChild(h1);
// console.log(h1);

// createElement, appendChild, removeChild
// const h2 = document.createElement("h2");
// h2.textContent = "h2 ka hai jyada nahi";
// document.querySelector("body").appendChild(h2);
// // remove child sirf vahi element ko hataye ga jise hame hatana hai
// document.querySelector("body").removeChild(h2);
// // // remove sabhi element ko hata deta hai
// // document.querySelector("body").remove(h2);

// *******************************************************************************************************************************************
// Style updates via .style and classList(add, remove, toggle)
// js ke trow css badalna
// const h1 = document.querySelector("h1");
// h1.style.color = "red";
// // h1.style.backgroundColor = "red";
// h1.style.fontFamily = "Gilroy";
// console.dir(h1);

// const h1 = document.querySelector("h1");
// h1.classList = "hulu";
// h1.classList.remove("hulu");
// h1.classList.toggle("hulu"); // ye ulta perform karta hai agar class lagi hai to hata deta hai aur agar class nahi lagi hai to laga deta hai

// *******************************************************************************************************************************************
// 🧪 Practice Zone
// Q.1 - What is the DOM? How does it represent the HTML structure?
// ans - Document Object Modal, ye tree jaisa structure hota hai html likhi jane wali har ak chij // it is the represent complete structure as a tree and everything is a node.

// Q.2 - Name the types of nodes in the DOM tree.
// ans - Document Node, Element Node, Text Node, Comment Node, DocumentType Node, DocumentFragment Node

// Q.3 - Whta's the difference between an element node and a text node?
// ans - 1. <p> is a element node and Lorem ipsum dolor sit amet. is a text node.
// 2. element node html tag hota hai aur text node actual me content hota hai.
// 3. element node ka children ho sakta hai par text node ka koi bhi children nahi ho sakta hai.
// <p>Lorem ipsum dolor sit amet.</p>

// Q.4 - Inspect the following HTML in the browser and identify each node.
// <div>
//   hello <span>world</span>
// </div>

// Q.5 - What is the difference between getElementById and querySelector?
// ans - getElementById hamse sirf id mangta hai aur querySelector hamara multiporpose hai besically ham id, class, tag sabhi ko select kar sakte hai even ham isme attribute select kar sakte hai.
// document.getElementById("apple");
// document.querySelector("#apple");

// Q.6 - What does getElementsByClassName return? Is it an array?
// ans - getElementsByClassName is actualy returns htmlCollection. list which is besically which looks very very similar to array but its not array general.

// Q.7 - Use querySelectorAll to select all buttons with class ".buy-now"
// const btn = document.querySelectorAll(".buy-now");
// console.log(btn);

// Q.8 - What's the difference between innerText, textContent, and innerHTML?
// ans - innerText and textContent hamare text ke content ko badalte hai aur innerHTML tag ko badalte hai.

// Task 1: Select the heading of a page by ID and change its text to "Welcome to Sheryians!".
// const heading = document.querySelector("#heading");
// heading.textContent = "Welcome to Sheryians!";

// Task 2: Select all <li> elements and print their text using a loop.
// const li = document.querySelectorAll("li");
// li.forEach((val) => {
//   console.log(val.textContent);
// });

// Task 3: Select a paragraph and replace its content with:
// <b>Updated</b> by JavaScript
// const p = document.querySelector("p");
// p.innerHTML = "<b>Updated</b> by JavaScript";

// Task 4: How do you get the src of an image using JavaScript?
// const img = document.querySelector("img");
// console.log(img.getAttribute("src"));
// console.log(img.src);

// Task 5: Select a link and update its href to point to https://google.com
// const a = document.querySelector("a");
// a.href = "https://google.com";

// Task 6: Add a title attribute to a div dynamically.
// const div = document.querySelector("div");
// div.setAttribute("title", "hey");

// Task 7: Remove the disabled attribute from a button.
// const btn = document.querySelector("button");
// btn.removeAttribute("disabled");

// What does createElement() do? What's returned?
// createElement() hame ak element create kar ke deta hai jo bhi ham pass kar denge // jaise h1 pass karenge to hame h1 create kar ke dega // return karta hai html node/html element
// const h1 = document.createElement("h1");
// console.log(h1);

// What's the difference between appenChild() and prepend()
// appendchild() hamesa last me element ko add karta hai aur prepend hamesa suru me element ko add karta hai

// Can you remove an element using removeChild()?
// const div = document.querySelector("div");
// div.removeChild("div");

// Create a new list item <li>New Task</li> and add it to the end of a <ul>.
// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// li.textContent = "New Task";
// ul.appendChild(li);
// // document.querySelector("ul").appendChild(li);

// Create a new image element with a placeholder source and add it at the top of a div.
// const img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://ik.imagekit.io/sheryians/profile_dp/0f02edb00c7a4ecb1b7506002_EwzSDIO0D"
// );
// document.querySelector("div").prepend(img);

// Select the first item in a list and delete it from the DOM.
// const li = document.querySelector("li");
// const ul = document.querySelector("ul");
// ul.removeChild(li);
// // document.querySelector("ul").removeChild(li);

// Add a highlight class to every item in a list.
// const li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach((val) => {
//   val.classList.add("highlight");
// });

// Toggle a class active on a button when clicked (Hint: Use classList.toggle()).
// const btnn = document.querySelector("button");
// btnn.classList.toggle("btn");

// Set the font size of all <p> Elements to 18px usin .style.
// const p = document.querySelectorAll("p");
// p.forEach((val) => {
//   val.style.fontSize = "18px";
// });

// *******************************************************************************************************************************************
// ⚠️ Common Confusions
// Difference between innerText vs textContent vs innerHTML
// Live HTMLCollection vs static NodeList

// *******************************************************************************************************************************************
// # Day 42 -  Dom - Introduction
// # Day – DOM (Document Object Model)

// The **DOM** is a structured representation of an HTML document. With JavaScript, we can select elements, change HTML, change CSS, and add interactivity using event listeners.

// ---

// ## 1. Selection of Elements in the DOM

// DOM selection means choosing HTML elements so we can manipulate them.
// JavaScript provides multiple ways to select elements:

// ### **(a) document.getElementById() – Select by ID**

// Returns the element with the given ID.

// ```js
// const title = document.getElementById("heading");
// ```

// ### **(b) document.getElementsByClassName() – Select by Class**

// Returns an HTMLCollection (array-like list).

// ```js
// const boxes = document.getElementsByClassName("box");
// ```

// ### **(c) document.getElementsByTagName() – Select by Tag Name**

// Returns all elements of a specific tag.

// ```js
// const allDivs = document.getElementsByTagName("div");
// ```

// ### **(d) document.querySelector() – Select First Match**

// Works like CSS selectors.

// ```js
// const firstPara = document.querySelector("p");
// ```

// ### **(e) document.querySelectorAll() – Select All Matches**

// Returns a NodeList (supports forEach).

// ```js
// const allParas = document.querySelectorAll("p");
// ```

// ### **Example**

// ```js
// const heading = document.getElementById("mainTitle");
// console.log(heading);
// ```

// 💡 **Key Point:** Use `querySelector` & `querySelectorAll` for modern, flexible selection.

// ---

// ## 2. Changing HTML Content

// We can change what is written inside an element.

// ### **innerText — Changes text only**

// ```js
// msg.innerText = "Hello World";
// ```

// ### **innerHTML — Replaces content with HTML**

// ```js
// msg.innerHTML = "<b>Hello World</b>";
// ```

// ### **textContent — Shows all text (even hidden)**

// ```js
// console.log(msg.textContent);
// ```

// 💡 **Key Point:** Use `innerHTML` carefully — it can insert HTML (and sometimes harmful code).

// ---

// ## 3. Changing CSS with JavaScript

// We can directly modify styles using `.style`.

// ```js
// const btn = document.getElementById("btn");

// btn.style.backgroundColor = "black";
// btn.style.color = "white";
// btn.style.padding = "10px";
// ```

// 💡 **Key Point:** For large styling changes, prefer adding/removing classes instead of many `.style` properties.

// ---

// ## 4. Event Listeners

// Event listeners allow your webpage to become interactive.

// ### **Basic Example**

// ```js
// const button = document.getElementById("clickMe");

// button.addEventListener("click", function () {
//     console.log("Button Clicked");
// });
// ```

// ### **Common Events**

// * click
// * mouseover
// * mouseout
// * keyup
// * keydown
// * submit
// * change

// 💡 **Key Point:** Events help you respond to user actions (clicks, typing, form submission).

// ---

// ## 📌 Task: Create a Counter (Only Description)

// Using DOM + event listeners, create a counter with:

// *******************************************************************************************************************************************

// * Increase button
// * Decrease button
// * Reset button

// The counter value should update on the screen.

// const increaseBtn = document.createElement("button");
// const decreaseBtn = document.createElement("button");
// const resetBtn = document.createElement("button");
// const div = document.createElement("div");
// let h1 = document.createElement("h1");

// div.style.width = "500px";
// div.style.height = "200px";
// div.style.backgroundColor = "#8f8383";
// document.querySelector("body").appendChild(div);

// h1.style.color = "white";
// h1.style.margin = "80px";
// h1.textContent = 0;
// div.appendChild(h1);

// let a = 0;

// increaseBtn.classList = "increaseBtn";
// decreaseBtn.classList = "decreaseBtn";
// resetBtn.classList = "resetBtn";

// increaseBtn.textContent = "Increase +";
// decreaseBtn.textContent = "Decrease -";
// resetBtn.textContent = "Reset";

// div.appendChild(increaseBtn);
// div.appendChild(decreaseBtn);
// div.appendChild(resetBtn);

// increaseBtn.addEventListener("click", () => {
//   a++;
//   h1.textContent = a;
// });

// decreaseBtn.addEventListener("click", () => {
//   if (a > 0) {
//     a--;
//     h1.textContent = a;
//   }
// });

// resetBtn.addEventListener("click", () => {
//   a = 0;
//   h1.textContent = a;
// });

// *******************************************************************************************************************************************
// create a div and inside div create a h1 text
// const div = document.createElement("div");
// const h1 = document.createElement("h1");
// const button = document.createElement("button");
// const button2 = document.createElement("button");
// div.style.width = "300px";
// div.style.height = "300px";
// div.style.backgroundColor = "orange";

// h1.textContent = "hello";
// h1.style.color = "red";
// h1.style.fontSize = "3rem";
// document.querySelector("body").appendChild(div);
// div.appendChild(h1);

// button.textContent = "click here";
// button.style.color = "green";
// button.style.padding = "10px 15px";
// button.style.borderRadius = "5px";
// button.style.border = "none";
// button.style.margin = "10px 20px";
// div.appendChild(button);

// button2.textContent = "double click here";
// button2.style.color = "green";
// button2.style.padding = "10px 15px";
// button2.style.borderRadius = "5px";
// button2.style.border = "none";
// button2.style.margin = "10px 20px";
// div.appendChild(button2);

// h1.addEventListener("click", () => {
//   console.log("hi, Full Stack developer");
// });

// button.addEventListener("click", () => {
//   h1.textContent = "Software Engineer";
// });

// button2.addEventListener("dblclick", () => {
//   h1.textContent = "hello";
//   h1.style.color = "blue";
//   console.log("dbl click");
// });

// *******************************************************************************************************************************************
// const box = document.querySelector(".box");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   let c1 = Math.floor(Math.random() * 256);
//   let c2 = Math.floor(Math.random() * 256);
//   let c3 = Math.floor(Math.random() * 256);

//   box.style.scale = 0.95;
//   box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
//   box.textContent = `rgb(${c1},${c2},${c3})`;
//   box.style.fontSize = "3rem";
// });

// *******************************************************************************************************************************************

// const btn = document.querySelector("button");

// const arr = ["ram", "shyam", "hanuman", "garuna", "arjun", "bhim"];

// btn.addEventListener("click", () => {
//   const a = Math.floor(Math.random() * arr.length);
//   console.log(arr[a]);
// });

// *******************************************************************************************************************************************
// const btn = document.querySelector("button");
// const h1 = document.querySelector("h1");
// const h2 = document.querySelector("h2");
// const h3 = document.querySelector("h3");
// const h4 = document.querySelector("h4");
// const box = document.querySelector(".box");
// const main = document.querySelector(".main");

// const team = [
//   {
//     name: "MI",
//     primary: "blue",
//     secondary: "gold",
//     fullName: "Mumbai Indians",
//     captain: "Hardik Pandya",
//     trophy: 5,
//   },
//   {
//     name: "RCB",
//     primary: "red",
//     secondary: "yellow",
//     fullName: "Royal Challengers Bengaluru",
//     captain: "Jitesh Sharma",
//     trophy: 1,
//   },
//   {
//     name: "DC",
//     primary: "black",
//     secondary: "red",
//     fullName: "Delhi Capitals",
//     captain: "Axar Patel",
//     trophy: 0,
//   },
//   {
//     name: "LSG",
//     primary: "orange",
//     secondary: "teal",
//     fullName: "Lucknow Super Giants",
//     captain: "Rishabh Pant",
//     trophy: 0,
//   },
// ];

// btn.addEventListener("click", () => {
//   const winner = team[Math.floor(Math.random() * team.length)];
//   h1.textContent = winner.name;
//   h1.style.fontSize = "2rem";
//   h2.textContent = `Team Full Name: ${winner.fullName}`;
//   h2.style.fontSize = "1.3rem";
//   h2.style.fontWeight = "600";
//   h3.textContent = `Team Captain: ${winner.captain}`;
//   h4.textContent = `Total trophy Win: ${winner.trophy}`;
//   box.style.backgroundColor = `${winner.primary}`;
//   main.style.backgroundColor = `${winner.secondary}`;
//   console.log(winner.name);
// });

// *******************************************************************************************************************************************
// const btn = document.querySelector("button");
// const btn2 = document.querySelector(".btn2");
// const main = document.querySelector("main");

// btn.addEventListener("click", () => {
//   const h1 = document.createElement("h1");
//   h1.textContent = "Hey🚀";
//   h1.style.color = "red";
//   main.appendChild(h1);
//   console.log("hey");
// });

// *******************************************************************************************************************************************
// const main = document.querySelector("main");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   const div = document.createElement("div");
//   const x = Math.floor(Math.random() * 100);
//   const y = Math.floor(Math.random() * 100);
//   // const colors = ["red", "pink", "orange", "teal", "white", "amber", "yellow"];
//   // const color = colors[Math.floor(Math.random() * colors.length)];
//   const c1 = Math.floor(Math.random() * 256);
//   const c2 = Math.floor(Math.random() * 256);
//   const c3 = Math.floor(Math.random() * 256);
//   const rotate = Math.floor(Math.random() * 360);
//   const borderRadius = Math.floor(Math.random() * 100);

//   div.style.width = "100px";
//   div.style.height = "100px";
//   // div.style.backgroundColor = `${color}`;
//   div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
//   div.style.position = "absolute";
//   div.style.left = `${x}%`;
//   div.style.top = `${y}%`;
//   div.style.rotate = `${rotate}deg`;
//   div.style.borderRadius = `${borderRadius}px`;

//   main.appendChild(div);
// });

// *******************************************************************************************************************************************
const btn = document.querySelector("button");
const main = document.querySelector("main");

const arr = [
  "hi' everyone",
  "How are you?",
  "Hope fully you are well",
  "I'm Shivam Mishra",
];

btn.addEventListener("click", () => {
  const h1 = document.createElement("h1");
  const arrRandom = arr[Math.floor(Math.random() * arr.length)];
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  const rotate = Math.floor(Math.random() * 360);
  const c1 = Math.floor(Math.random() * 256);
  const c2 = Math.floor(Math.random() * 256);
  const c3 = Math.floor(Math.random() * 256);
  const scl = Math.floor(Math.random() * 3);

  h1.textContent = arrRandom;
  h1.style.color = `rgb(${c1},${c2},${c3})`;
  h1.style.position = "absolute";
  h1.style.top = `${y}%`;
  h1.style.left = `${x}%`;
  h1.style.rotate = `${rotate}deg`;
  h1.style.scale = scl;
  main.appendChild(h1);
  console.log(h1);
});
