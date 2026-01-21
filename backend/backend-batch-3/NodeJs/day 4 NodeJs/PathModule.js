const path = require("node:path");
const fs = require("node:fs");
// console.log(__filename);
// console.log(__dirname);

// custom path
// fs.mkdir("data", () => {
// });
// fs.mkdir("sutdents", () => {});
// fs.appendFile("data.json", "sutdents", () => {});
const filename = path.join(__dirname, "data", "students", "data.json");
// console.log(path.parse(filename));
// console.log(path.resolve(filename));
console.log(path.extname(filename));
console.log(path.basename(filename));
console.log(path.dirname(filename));

// const foldername = fs.mkdir(filename, { recursive: true }, (e) => {
//   console.log(e);
// });

// fs.appendFile("data.json", foldername, (e) => {
//   console.log(e);
// });
// fs.appendFile(filename, "data");
// fs.writeFile(())
// console.log(filename);
