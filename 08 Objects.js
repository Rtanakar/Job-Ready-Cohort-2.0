// Objects
// 🧠 What is an Object?
// Objects in JavaScript are like real-world records – a collection of key-value pairs.
// They help us store structured data (like a student, a product, or a user profile).

// *******************************************************************************************************************************************
res// kisi ak person ki details lene ko object kahte hai

// // Create Object
// const obj = {
//   name: "Shivam Mishra",
//   age: 24,
//   khana: "Sabji Roti",
// };
// const obj = new Object();


// // Access Object
// obj.khana;
// obj["age"];
// console.log(obj.name);

// // Convert
// const aa = "name";
// console.log(obj[aa]);

// *******************************************************************************************************************************************
// 🔑 Key-Value Structure
// Keys are always strings (even if you write them as numbers or identifiers)
// Values can be anything – string, number, array, object, function, etc

// const obj = {
//   name: "Shivam Mishra", // name is key and value is "Shivam Mishra"
// };

// *******************************************************************************************************************************************
// 📍 Dot vs Bracket Notation
// Use dot notation for fixed key names
// Use bracket notation for dynamic or multi-word keys

// const obj = {
//   name: "Shivam Mishra",
//   age: 24,
//   khana: "Sabji Roti",
// };
// obj.age; // dot notation
// obj["name"]; // bracket notation

// *******************************************************************************************************************************************
// 🏗️ Nesting and Deep Access

// // Nesting
// const obj = {
//   name: "Ratnakar Mishra",
//   address: {
//     city: "Chitrakoot",
//     pincode: 210204,
//     location: {
//       lan: 1.34,
//       lat: 4.55,
//     },
//   },
// };

// // Deep Access
// obj.address.location.lan;

// *******************************************************************************************************************************************
// ✂️ Object Destructuring
// You can extract values directly:
// const obj = {
//   name: "Ratnakar Mishra",
//   address: {
//     city: "Chitrakoot",
//     pincode: 210204,
//     location: {
//       lan: 1.34,
//       lat: 4.55,
//     },
//   },
// };

// const { lan, lat } = obj.address.location; // Object Destructuring
// console.log(lan);
// console.log(lat);

// *******************************************************************************************************************************************
// 🔁 Looping Through Objects
// for-in loop
// const obj = {
//   name: "Shivam Mishra",
//   age: 23,
//   city: "chitrakoot",
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// *******************************************************************************************************************************************
// Object.keys(), Object.values(), Object.entries()
// const obj = {
//   name: "Shivam Mishra",
//   email: "test@gmail.com",
//   city: "chitrakoot",
// };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// *******************************************************************************************************************************************
// 📦 Copying Objects

// Shallow Copy (one level deep)
// spread
// const obj = {
//   name: "Shivam Mishra",
//   email: "test@gmail.com",
//   city: "chitrakoot",
// };
// const obj2 = { ...obj };
// console.log(obj2);

// Object Assigned
// const obj = {
//   name: "Shivam Mishra",
//   email: "test@gmail.com",
//   city: "chitrakoot",
// };
// const obj2 = Object.assign({}, obj);
// console.log(obj2);

// Deep Copy (nested levels)
// jab hamara ak object nested object banta hai aur hap use copy karte hai chahe ve spread operator ke throw kyon na ho to ye jo top level values hoti hai sirf ye real copy hoti hai hamare ander ke nested object wapis se reference pass karne lagte hai to ye kharab tarika hota hai agar hamara nested object hai to. iske liye hame karna padta hai deep clone
// const obj = {
//   name: "Ratnakar Mishra",
//   address: {
//     city: "Chitrakoot",
//     pincode: 210204,
//     location: {
//       lan: 1.34,
//       lat: 4.55,
//     },
//   },
// };

// const obj2 = JSON.parse(JSON.stringify(obj));
// obj.address.city = "Banda";
// console.log(obj2);
// console.log(obj);

// This is wrong way to nested object clone(copy) ❌
// const obj2 = { ...obj };
// obj2.address.city = "Banda";
// console.log(obj);
// console.log(obj2);
// console.log(obj);

// ❗ Note: JSON-based copy works only for plain data (no functions, undefined, etc.)

// *******************************************************************************************************************************************
// ❓ Optional Chaining
// Avoids errors if a nested property is undefined:
// const obj = {
//   name: "Ratnakar Mishra",
//   address: {
//     city: "Chitrakoot",
//     pincode: 210204,
//     location: {
//       lan: 1.34,
//       lat: 4.55,
//     },
//   },
// };
// console.log(obj?.addresss?.city);

// *******************************************************************************************************************************************
// 🧠 Computed Properties
// You can use variables as keys:
// const role = "admin";
// const obj = {
//   name: "Ratnakar Mishra",
//   address: {
//     city: "Chitrakoot",
//     pincode: 210204,
//     location: {
//       lan: 1.34,
//       lat: 4.55,
//     },
//   },
//   [role]: "Ratnakar Mishra",
// };
// console.log(obj);

// *******************************************************************************************************************************************
// 🧪 Practice Zone
// Create an object for a student with name, age, and isEnrolled.
// const student = {
//   name: "Shivam Mishra",
//   age: 13,
//   isEnrolled: true,
// };

// Can an object key be a number or boolean? Try this
// const obj = {
//   true: "yes",
//   42: "answer",
// };
// console.log(obj[42]); // answer is "yes"
// console.log(obj[true]); // answer is "answer"

// Access the value of "first-name" from this object.
// const user = {
//   "first-name": "Ratnakar",
// };
// console.log(user["first-name"]); // answer is "Ratnakar"

// Given a dynamic key let key = 'age', how will you access user[key]?
// const key = "age";
// const user = {
//   age: 12,
// };
// console.log(user[key]); // answer is 12

// From the object below, print the latitude.
// const locations = {
//   city: "Chitrakoot",
//   coordinates: {
//     lang: 3.33,
//     lat: 4.43,
//   },
// };
// console.log(locations.coordinates.lang);

// What will happen if coordinates is missing? How can you prevent errors?
// const locations = {
//   city: "Chitrakoot",
//   coordinates: {
//     lang: 3.33,
//     lat: 4.43,
//   },
// };
// console.log(locations?.coordinates?.lang);

// Destructure the city and lat from the location object above.
// const locations = {
//   city: "Chitrakoot",
//   coordinates: {
//     lang: 3.33,
//     lat: 4.43,
//   },
// };

// const { lat } = locations.coordinates;
// const { city } = locations;
// console.log(lat);
// console.log(city);

// Destructure the key "first-name" as a variable called firstName.
// const user = {
//   "first-name": "Shivam",
// };

// const { "first-name": firstName } = user;
// console.log(firstName);

// User for-in to log all keys in this object.
// const course = {
//   title: "JavaScript Tutorial",
//   duration: "1 Week",
// };

// for (let key in course) {
//   console.log(key);
// }

// Use object.entries() to print all key-value pairs as.
// title: JavaScript
// duration: 4 weeks
// const course = {
//   title: "JavaScript Tutorial",
//   duration: "1 Week",
// };

// console.log(Object.entries(course));

// Object.entries(course).forEach((val) => {
//   return console.log(val[0] + ": " + val[1]);
// });

// copy this object into spread operator
// const original = { a: 1, b: 2 };
// const newOriginal = { ...original };
// console.log(newOriginal);

// console.log(original);

// What is problem with this?
// ye nested object hai to ye puri tarah se copy nahi karega // ye nested wala object copy nahi karega uski reference copy karega to ham jab bhi original ko copy karenge aur fir usme change karenge to wah sabhi me change hoga jo nested wala part hai // isliye hame deep copy karni hogi nested ke liye
// const obj1 = { info: { score: 80 } };
// const clone = { ...obj1 };
// clone.info.score = 100;
// console.log(obj1.info.score);

// Deep clone the obj1 safely.
// JSON.parse(JSON.stringify()) karne se hame pure object aur nested object ki copy mil jayegi jisse hame copy me change karne par original par change nahi hoga
// const obj1 = { info: { score: 80 } };
// const clone = JSON.parse(JSON.stringify(obj1));
// clone.info.score = 100;
// console.log(clone.info.score); // 100
// console.log(obj1.info.score); // 80

// Rewrite this safely using opthional chaining.
// const person = {};
// console.log(person?.profile?.name);

// Use a variable to dynamically assign a property
// const key = "role";

// const user = {
//   name: "Ram",
//   [key]: "admin",
// };

// console.log(user);
// *******************************************************************************************************************************************
// ⚠️ Common Confusions
// Shallow copy copies only the first level
// for-in includes inherited keys (be cautious!)
// delete obj.key removes the property
// Spread ≠ deep copy
