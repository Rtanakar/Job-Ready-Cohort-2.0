// Arrays

// 🧠 What is an Array?
// An array is like a row of boxes, where each box holds a value and has an index (0, 1, 2…).
// Arrays help you store multiple values in a single variable — numbers, strings, or even
// objects/functions

// *******************************************************************************************************************************************
// ak se jyada members rakhne ki jagah ko array kahte hai
// array me hum kai value ak sath rakh sakte hai kisi bhi tarah ki
// const marks = [10, 20, 30, 40, 50];
// console.log(marks[0]);

// create array
// const arr = new Array(); // old method
// const arr = []; // most used method

// access array
// const arr = ["ram", "shyam", "hanumanJi", "sitaji"];
// console.log(arr[3]); // arr[3] are access in array

// modify array
// const arr = [1, 2, 3, 4];
// arr[2] = 209; // arr[2] = 207 are modify in array
// console.log(arr);

// 🏗️ Creating & Accessing Arrays
// Indexing starts from 0
// You can access, update, or overwrite values by index

// let marks = [90, 85, 78];
// console.log(marks[1]); // 85
// marks[2] = 80; // Update index 2

// *******************************************************************************************************************************************
// ⚙️ Common Array Methods
// methods means jo . ke baad jaise push aur () lagane pe jo hota hai wo methods hota hai
// 🧱 Modifiers (Change original array)

// *******************************************************************************************************************************************
// push
// push method array ke last me add karta hai value
// const arr = [1, 2, 3, 4, 5];
// arr.push(699);
// console.log(arr);

// *******************************************************************************************************************************************
// pop
// pop method array ki last value ko hata deta hai yani delete kar deta hai
// const arr = [1, 2, 3, 4, 5];
// arr.pop();
// console.log(arr);

// *******************************************************************************************************************************************
// shift
// shift method array ke shuru ki value ko hata deta hai
// const arr = [1, 2, 3, 4, 5];
// arr.shift();
// console.log(arr);

// *******************************************************************************************************************************************
// unshift
// unshift method array ke suru me value ko add karta hai
// const arr = [1, 2, 3, 4, 5];
// arr.unshift(9);
// console.log(arr);

// *******************************************************************************************************************************************
// splice
// splice method array ke bich se value ko hata deta hai // isme do property di jati hai pahli kaunse index se value hatani hai aur dusra kitni value hatani hai
// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1);
// console.log(arr);

// *******************************************************************************************************************************************
// slice
// slice method array ko change nahi karta humko ak naya return copy deta hai array ki // isme do property hoti hai pahli index janha se hatani hai aur dusri kanha tak hatani hai. janha tak hatani hai uske ak value pahle tak hatata hai // ye original array ko change nahi karta hai
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(0, 3);
// console.log(newArr);
// console.log(arr);

// *******************************************************************************************************************************************
// reverse
// reverse method main array ko reverse kar deta hai // yani jo array aap banayenge usko // ye koi copy nahi banata hai // simple reverse kar deta hai
// const arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

// *******************************************************************************************************************************************
// sort
// sort method array ko badhate kram (ascending order) me ya ghatate kram (descending order) me sort karta hai // isme hume arr.sort(ak function milta hai (jisme hame parameter dena hota hai jo do value hoti hai) { iske bad hame return karna badta hai return ke bad ham agar a - b karenge to badhate kram me sort hoga // aur agar b - a karenge to ghatate kram me sort hoga})
// const arr = [44, 3, 2, 6, 5];
// const sr = arr.sort(function (a, b) {
//   return b - a;
// });
// console.log(sr);

// *******************************************************************************************************************************************
// forEach
// isko ham array me use karta hai // aur ye array me looping ke liye best hota hai
// forEach array ke har ak ke liye function chalega aur bar bar val me ak value ayegi fir iske bad under me likha hua code ak bar chalega har ak ke liye
// har ak ke liye function ko chalao array me
// const arr = [2, 1, 5, 3, 4];
// arr.forEach(function (val) {
//   console.log(val + 5);
// });

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 1; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// *******************************************************************************************************************************************
// map
// map sirf tab use karna hai jab aapko ek naya array banana hai pichhle array ke data ke basis par

// map dikhte hi saath, man me ek blank array bana liya karo

// map me ham function pass karte hai aur usme ak parameter yani value ko dalte hai aur fir return karte hai // niche ham dekh sakte hai ki hamne return 9 kia hai to original arr ke data ke basis par original data me 5 value hai to 5 ke bases par yah hame 9 ko 5 baar return kare ga // agar hamne value pass nahi kia to undefiend dega
// const arr = [2, 1, 5, 3, 4];
// const newArr = arr.map(function (val) {
//   return 9;
// });
// console.log(newArr);

// jab bhi aapko aisa koi case dikh jaaye jaha par ek array se naya array banega aur wo naya array kuchh values ko rakhega tab map lagega

// *******************************************************************************************************************************************
// filter
// filter bhi map ki tarah ak naya array deta hai 
// bas yah wahi value deta hai jo true hai agar value false hai to value nahi dega
// const arr = [5, 6, 2, 7, 1];
// const newArr = arr.filter(function (val) {
//   if (val > 4) return true;
// });
// console.log(newArr);

// const arr = ["a", "n", "a", "b", "s", "r", "a"];
// const newArr = arr.filter((val) => {
//   if (val === "a") {
//     console.log(val);
//   }
// });

// *******************************************************************************************************************************************
// reduce
// reduce method array ko ak single value deta hai // jo ki accumulator me hoti hai // isme do parameter hote hai pahli accumulator jo value ko yad rakhta hai yani save karta hai aur dusari value jo value ak ak karke array se aati hai aur fir accumulator me chali jati hai
// const arr = [1, 2, 3, 4, 5, 6];
// const ans = arr.reduce(function (accumulator, val) {
//   return accumulator + val;
// }, 0);
// console.log(ans);

// *******************************************************************************************************************************************
// find
// find method array me se first value ko find kar ke deta hai according hamare condition (ko satisfied karega) ke hisab se return karta hai
// const arr = [1, 3, 2, 1, 5];

// // jaise ki hamne yanha ak array object banaya hai jisme ham id aur key rakhe hai id sabki alag hai par 1 id ki aur 3 id ki key 1 hai to ham find method ka use karke ke hame 1 key lana hai to hame id 1 ki key 1 mili hai na ki id 3 ki key 1 // ye hamesa jo hame lana hai vo ye sabse pahli di hue value match ke adhar par dega
// const obj = [
//   { id: 1, key: 1 },
//   { id: 2, key: 2 },
//   { id: 3, key: 1 },
// ];
// const va = obj.find(function (val) {
//   return val.key === 1;
// });
// console.log(va);

// *******************************************************************************************************************************************
// some
// ye true false me result deta hai
// some method array me codition  agar kisi ak pe bhi true karti hai to vo hame true dega nahi to false dega agar condition match nahi karti hai to
// const arr = [10, 20, 85, 90, 33];
// const any = arr.some(function (val) {
//   return val > 85;
// });
// console.log(any);

// *******************************************************************************************************************************************
// every
// every method array me agar sabhi condition pass karegi to true dega aur agar ak bhi condition fail karegi to false dega // yani isme puri condition true honi hi chahiye
// const arr = [10, 20, 85, 90, 33];
// const any = arr.every(function (val) {
//   return val > 85;
// });
// console.log(any);

// *******************************************************************************************************************************************
// ✂️ Destructuring & Spread

// ***********************************
// Destructuring
// destructuring me ham value ko variable me save karke use kar sakte hai // isme hame alag alag karke save nahi karna hota hai
// const arr = [1, 2, 3, 4, 5];
// const [a, b] = arr;
// console.log(a, b);

// ***********************************
// Spread
// spread me ham array ko bekher kar ak naya array banate hai aur naya array me jo bhi change karenge vo purane array me change nahi hoga sirf new array me change hoga
// ye original ko change nahi karta hai agar ham spread se copy kar le original array ko // isliye ye sabse best hota hai use ke liye
// const arr = [1, 2, 3, 4, 5];
// const newArr = [...arr];
// newArr.pop();
// console.log(arr); // [1, 2, 3, 4, 5] // isme change nahi hua ye jyon ka tyon hai
// console.log(newArr); // [1, 2, 3, 4] // sirf isime change hua hai jisme ham change kiye hai

// *******************************************************************************************************************************************
// indexOf
// indexOf hame arr me di hui value ka index batata hai
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(4));

// *******************************************************************************************************************************************
// join

// *******************************************************************************************************************************************
// toString

// *******************************************************************************************************************************************
// ⚠️ Common Confusions
// splice changes original array, slice does not
// splice original arrray ko change kar deta hai.
// slice new array return karega aur usme wo value chun kar ayenge jo value humko chahiye.

// forEach vs map : map returns a new array
// sort() converts values to strings unless compareFn is provided:

// *******************************************************************************************************************************************
// 🧪 Practice Zone
