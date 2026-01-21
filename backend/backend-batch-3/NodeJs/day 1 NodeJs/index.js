const fs = require("node:fs");

const data = fs.readFileSync("./notes.md", "utf-8");
console.log(data);

console.log("hello world");
