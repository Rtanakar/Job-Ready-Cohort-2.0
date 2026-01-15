// Browser mein page par koi bhi harkat karo event raise ho jaayega
// kuchh screen par ho aur aapko reaction dena ho to us waqt aapko event handle karna aana chahiye

// *******************************************************************************************************************************************
// event matlab hota hai koi action hua
// event listener ka matlab hai aapne koi action ka reaction diya

// *******************************************************************************************************************************************
// Event binding: addEventListener
// select the paragraph first
// const p = document.querySelector("p");

// // and then paragraph me add karo event ka listener
// // p.addEventListener("click", () => {
// //   p.style.color = "orange";
// // });

// const dblclick = () => {
//   p.style.color = "red";
// };

// p.addEventListener("dblclick", dblclick);

// // Event binding: removeEventListener
// p.removeEventListener("dblclick", dblclick);

// *******************************************************************************************************************************************
// Common events: click, input, change, submit, mouseover, keyup
// *************************************************************
// click
// const p = document.querySelector("p");
// p.addEventListener("click", () => {
//   p.style.color = "red";
// });

// *************************************************************
// input
// const inp = document.querySelector("input");
// // inp pe kabhi bhi input hua to function chalega function chalne ke bad us input ki sari details dets me ayegi (jo bhi aap name denge dets ki jagah bat ak hi hai) // dets ke ander data name ki filed agar nall nahi hai to null ke alawa vo sabhi filed add ho jaye jo null nahi hai
// inp.addEventListener("input", (dets) => {
//   // agar data null nahi hai to data add karo
//   if (dets.data !== null) {
//     console.log(dets.data);
//   }
// });

// *************************************************************
// change
// change event tab chalta hai jab aapka koi input select ya textarea mein koi change hojaaye
// const h1 = document.querySelector("#device");
// const sel = document.querySelector("select");

// sel.addEventListener("change", (dets) => {
//   h1.textContent = `You device selected is ${dets.target.value}`;
// });

// *************************************************************
// keydown
// const h1 = document.querySelector("h1");
// window.addEventListener("keydown", (dets) => {
//   if (dets.key === " ") return (h1.textContent = "space");
//   h1.textContent = dets.key;
// });

// *************************************************************
// const btn = document.querySelector("#btn");
// const fileInp = document.querySelector("#fileInp");
// // Hamne yanha fileInp (input) ko btn (div) me click kara diya // click hamare div par hua tha aur hamne transfer karva diya fileInp ke uper click kara ke
// btn.addEventListener("click", () => {
//   fileInp.click();
// });

// fileInp.addEventListener("change", (dets) => {
//   // console.log(dets.target.files[0].name);
//   const file = dets.target.files[0];
//   if (file) {
//     btn.textContent = file.name;
//   }
// });

// *************************************************************
// const main = document.querySelector("#main");
// const form = document.querySelector("form");
// const inp = document.querySelectorAll("input");

// form.addEventListener("submit", (dets) => {
//   dets.preventDefault();

//   const card = document.createElement("div");
//   card.classList.add("card");

//   const proPic = document.createElement("div");
//   proPic.classList.add("profile-pic");

//   const img = document.createElement("img");
//   img.setAttribute("src", inp[0].value);

//   const name = document.createElement("h4");
//   name.textContent = inp[1].value;

//   const occupation = document.createElement("h5");
//   occupation.textContent = inp[2].value;

//   const info = document.createElement("p");
//   info.textContent = inp[3].value;

//   proPic.appendChild(img);
//   card.appendChild(proPic);
//   card.appendChild(name);
//   card.appendChild(occupation);
//   card.appendChild(info);

//   main.appendChild(card);

//   inp.forEach((inp) => {
//     if (inp.type !== "submit") {
//       inp.value = "";
//     }
//   });
// });

// *************************************************************
// const box = document.querySelector(".box");
// box.addEventListener("mouseover", () => {
//   box.style.backgroundColor = "orange";
// });

// box.addEventListener("mouseout", () => {
//   box.style.backgroundColor = "red";
// });

// *************************************************************
// const box = document.querySelector(".box");

// window.addEventListener("mousemove", (dets) => {
//   // console.log(dets.clientX, dets.clientY);
//   box.style.top = dets.clientY + "px";
//   box.style.left = dets.clientX + "px";
// });

// *******************************************************************************************************************************************
// Event Object: target, type, preventDefault
// *************************************************************

// *******************************************************************************************************************************************
// Event bubbling and capturing
// *************************************************************
// Event bubbling
// jispe event aayega agar uspar listener nahi hua to hamara event uske parent par listener dhundega aur aisa krte krte upar ki taraf move karega
// const ul = document.querySelector("ul");

// ul.addEventListener("click", (dets) => {
//   // console.log(dets);
//   // dets.target.style.textDecoration = "line-through";
//   dets.target.classList.toggle("lt");
// });

// *************************************************************
// capturing
// jab bhi aap click karte ho ya koi bhi event raise karte ho to aapka jo event flow do phases mein chalta hai:

// phase 1: event top level element se neeche ki taraf aayega
// phase 2: event raised element se parent ki taraf jaayega
// aur phale pahse 1 hoti hai

// hamesa pahse 1 hi pahle hoti hai par vo by default off rahti hai, agar ham usey on kar dein to pahle phase 1 ka answer milega

// pahle capture phase chalta hai

// const btn = document.querySelector("button");
// const a = document.querySelector(".a");
// const b = document.querySelector(".b");
// const c = document.querySelector(".c");
// // capturing
// btn.addEventListener(
//   "click",
//   () => {
//     console.log("Button");
//   },
//   true
// );

// a.addEventListener(
//   "click",
//   () => {
//     console.log("a click");
//   },
//   true
// );

// b.addEventListener("click", () => {
//   console.log("b click");
// });

// c.addEventListener(
//   "click",
//   () => {
//     console.log("c click");
//   },
//   true
// );

// bubbling
// btn.addEventListener("click", () => {
//   console.log("Button");
// });

// a.addEventListener("click", () => {
//   console.log("a click");
// });

// b.addEventListener("click", () => {
//   console.log("b click");
// });

// c.addEventListener("click", () => {
//   console.log("c click");
// });

// *******************************************************************************************************************************************
// Event delegation
// *************************************************************

// *******************************************************************************************************************************************
// 🧪 Practice Zone
// Live character counter
// const inp = document.querySelector("input");
// const span = document.querySelector("span");

// inp.addEventListener("input", () => {
//   let left = 20 - inp.value.length; // 20 se minus kar dia total input ko
//   span.textContent = left; // left ko span me save kar liya

//   if (left < 0) {
//     span.style.color = "red"; // 0 se kam hua to ye chalega
//   } else {
//     span.style.color = "black"; // 0 se jada hua to ye chalega
//   }
// });

// Delegated event handler on todo list

// *******************************************************************************************************************************************
// ⚠️ Common Confusions
// event.target vs event.currentTarget
// Capturing phase vs bubbling phase

// *******************************************************************************************************************************************
// # What is an Event Listener?

// An event listener is a JavaScript mechanism that waits for a specific event to occur on an element (user action or browser action) and then executes a callback function.

// Syntax:

// ```javascript
// element.addEventListener("eventName", callbackFunction);
// ```

// ## Mouse Events

// ### click

// Triggered when an element is clicked.

// Use case: Buttons, links, actions.

// ```javascript
// button.addEventListener("click", () => {
//   console.log("Button clicked");
// });
// ```

// ### dblclick

// Triggered on double click.

// ```javascript
// box.addEventListener("dblclick", () => {
//   console.log("Double clicked");
// });
// ```

// ### mousedown

// Triggered when mouse button is pressed.

// ```javascript
// box.addEventListener("mousedown", () => {
//   console.log("Mouse button pressed");
// });
// ```

// ### mouseup

// Triggered when mouse button is released.

// ```javascript
// box.addEventListener("mouseup", () => {
//   console.log("Mouse button released");
// });
// ```

// ### mouseenter

// Triggered when mouse enters an element (does NOT bubble).

// ```javascript
// box.addEventListener("mouseenter", () => {
//   box.style.background = "blue";
// });
// ```

// ### mouseleave

// Triggered when mouse leaves an element.

// ```javascript
// box.addEventListener("mouseleave", () => {
//   box.style.background = "red";
// });
// ```

// ### mouseover

// Triggered when mouse enters an element or its child (bubbles).

// ```javascript
// box.addEventListener("mouseover", () => {
//   console.log("Mouse over");
// });
// ```

// ### mousemove

// Triggered when mouse moves.

// ```javascript
// document.addEventListener("mousemove", (e) => {
//   console.log(e.clientX, e.clientY);
// });
// ```

// ## Keyboard Events

// ### keydown

// Triggered when a key is pressed.

// ```javascript
// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });
// ```

// ### keyup

// Triggered when a key is released.

// ```javascript
// document.addEventListener("keyup", (e) => {
//   console.log("Key released:", e.key);
// });
// ```
// Displaying Day 48 Different Event Listners.md.

// ***********************************************************************************************************************
// const h1 = document.querySelector("h1");

// const music = new Audio("./piano.mp3");

// // h1.addEventListener("click", () => {
// //   music.play();
// // });

// // h1.addEventListener("dblclick", () => {
// //   music.pause();
// // });

// document.body.addEventListener("keydown", (e) => {
//   if (e.key === " ") {
//     music.play();
//   }
//   if (e.key === "m") {
//     music.pause();
//   }
// });

// ***********************************************************************************************************************
const allBtn = document.querySelectorAll("button");

allBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    // if (elem.textContent === "Add Friend") {
    //   elem.textContent = "Remove Friend";
    // } else {
    //   elem.textContent = "Add Friend";
    // }
    elem.textContent === "Add Friend"
      ? (elem.textContent = "Remove Friend")
      : (elem.textContent = "Add Friend");
  });
});
