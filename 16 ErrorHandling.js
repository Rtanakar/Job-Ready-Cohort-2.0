// # Day 62 – Error Handling
// *******************************************************************************************************************************************
// ## Introduction to Error Handling

// Error handling allows JavaScript applications to detect, manage, and recover from unexpected issues during execution.
// Error Handling -> error handling hoti hai problem (error) ko sahi tarike se handle karna

// ### Why it's important:

// - Prevents app crashes
// - Helps debug issues faster
// - Ensures smooth user experience
// - Makes code more predictable and stable

// ### Basic flow:

// 1. Code executes
// 2. If an error occurs, control jumps to the nearest `catch` block

// ### Simple example:

// ```js
// console.log("Start");

// try {
//   let result = x + 5;   // x is not defined → error
// } catch (error) {
//   console.log("Error occurred:", error.message);
// }

// console.log("End");
// ```

// *******************************************************************************************************************************************
// ## Common Types of Errors in JavaScript

// ### Syntax Errors
// These occur before code executes — due to invalid JavaScript syntax.
// syntax error -> aapne code me likhte waqt galti kardi ise kahte hai syntax error

// jaise let ki jagah likh jaye leet ya kuch bhi to wo syntax error hoti hai
// leet a = 15; ---> let a = 15; // let hota hai leet nahi // ak prakar se format me galti

// ```js
// // Missing closing bracket → SyntaxError
// if (true {
//     console.log("Hello");
// }
// ```

// ***********************************************************
// ### Runtime Errors
// Errors occurring while the code is running.
// runtime error ---> code likhte waqt error nahi hai code chalte waqt error hai // jaise function me hamne koi galti ki to (agar galti ki tab) vo error tab tak show nahi hoga jab tak ki function na chal jaye isi ko kahte hai runtime error jo chalte waqt error de
// function demo() {
//   console.log(a);  // ReferenceError: a is not defined
// }
// demo();
// ```

// ***********************************************************
// ### Logical Errors
// Code runs without crashing but produces incorrect output.
// logical errors ---> aapke code ko kuch karna chahiye tha par wo kar kuch aur raha hai // jaise ki function me hame a * b karna hai aur hamne a + b kar diya to ye logical errors hota hai

// // Intent: multiply numbers
// function multiply(a, b) {
//   return a + b;   // Wrong logic → logical error
// }

// console.log(multiply(5, 3)); // 8 instead of 15
// ```

// *******************************************************************************************************************************************
// ## Understanding the Error Object

// The JavaScript `Error` object contains metadata about the failure.
// try-cath ---> try-catch hame code crash hone se bachata hai agar code me error aya to uske bad wala code chal sakta hai // agar try-catch ko use nahi karenge to code me error ane par agala code nahi chalega isse bachane ke liye ham ---> try-catch ka use karte hai

// ### Properties:

// - `message` – description of the error
// - `name` – error type: `ReferenceError`, `TypeError`, `SyntaxError`, etc.
// - `stack` – stack trace (where the error occurred)

// ### Example:

// ```js
// try {
//   let obj = undefined;
//   obj.name; // TypeError
// } catch (err) {
//   console.log("Name:", err.name);
//   console.log("Message:", err.message);
//   console.log("Stack:", err.stack);
// }
// ```

// *******************************************************************************************************************************************
// ## Handling Exceptions: try-catch and try-catch-finally

// ### Basic try-catch
// try-cath ---> try-catch hame code crash hone se bachata hai agar code me error aya to uske bad wala code chal sakta hai // agar try-catch ko use nahi karenge to code me error ane par agala code nahi chalega isse bachane ke liye ham ---> try-catch ka use karte hai // aur agar error aya to wo catch me chala jayega
// ```js
// try {
//   let num = 10 / 0;
//   console.log(num);
// } catch (error) {
//   console.log("Something went wrong!");
// }
// ```

// ### Detailed catch

// ```js
// try {
//   JSON.parse("{ bad json }");
// } catch (error) {
//   console.log("Error:", error.message);
// }
// ```

// ### Using finally

// `finally` executes whether an error occurs or not.

// ```js
// try {
//   console.log("Opening file...");
//   throw new Error("File corrupted");
// } catch (error) {
//   console.log("Error:", error.message);
// } finally {
//   console.log("Closing file...");
// }
// ```

// **Output:**

// ```
// Opening file...
// Error: File corrupted
// Closing file...
// ```

// *******************************************************************************************************************************************
// ## How to Throw Errors in JavaScript

// You can create custom errors using `throw`.

// ### Throwing a simple error
// throw new Error("this is error");
// javascript error banane ke liye ya show karne ke liye ham trow new Error() ka use karte hai

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 0));
// } catch (error) {
//   console.log(error.message);
// }
// ```

// ### Throwing custom error types
// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// function registerUser(age) {
//   if (age < 18) {
//     throw new ValidationError("User must be 18+");
//   }
//   return "User registered";
// }

// try {
//   registerUser(15);
// } catch (err) {
//   console.log(err.name);    // ValidationError
//   console.log(err.message); // User must be 18+
// }

// *******************************************************************************************************************************************
// 🧪 Practice Zone

// # Day 63 — Project Scenarios

// API example (OpenWeatherMap):

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

// ---

// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).
// const apiKey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

// without async await use fetch to api
//  function whether(city) {
//   try {
//      fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//     )
//       .then((raw) => raw.json())
//       .then((val) => console.log(val));
//   } catch (err) {
//     console.error(err);
//   }
// }

// with async await use fetch to api
// async function getWheather(city) {
//   try {
//     const raw = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//     );

//     if (!raw.ok) {
//       throw new Error("City not found or something went wrong!");
//     }

//     const realData = await raw.json();
//     const kelvin = realData.main.temp;
//     const celsius = (kelvin - 273.15).toFixed(2);
//     console.log(realData);
//     const wheatherCondition = realData.weather[0].description;
//     // console.log(wheatherCondition);
//     if (celsius > 35) {
//       console.log(
//         `You city temperature is ${celsius}°C and your city wheather condition is 🔥🥵${wheatherCondition}`
//       );
//     } else if (celsius < 10) {
//       console.log(
//         `You city temperature is ${celsius}°C and your city wheather condition is ❄️🥶${wheatherCondition}`
//       );
//     } else {
//       console.log(
//         `You city temperature is ${celsius}°C and your city wheather condition is 🌞${wheatherCondition}`
//       );
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

// getWheather("Beijing");

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.

// ---

// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

// ---

// Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.

const users = [
  "ram@mail.com",
  "shyam@mail.com",
  "hanuma@mail.com",
  "redhey@mail.com",
];

function sendEmail(email) {
  return new Promise((res, rej) => {
    let time = Math.floor(Math.random() * 5);

    setTimeout(() => {
      let probability = Math.floor(Math.random() * 10);
      if (probability <= 5) res("Email successfully Sent.");
      else rej("Email not sent..");
    }, time * 1000);
  });
}

async function sendEmails(userList) {
  let allResponse = userList.map((email) => {
    return sendEmail(email)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  });

  let ans = await Promise.all(allResponse);
  ans.forEach((val) => {
    console.log(val);
  });
}

sendEmails(users);