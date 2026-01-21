// const http = require("node:http");
// const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   // 1. Downloading file (Bad way)
//   // fs.readFile("./sample.txt", "utf-8", (err, data) => {
//   //   if (err) {
//   //     console.log(`Data Not Found ${err}`);
//   //     res.end();
//   //   } else {
//   //     res.end(data);
//   //   }
//   // });

//   // 2. Downloading file (Good Way)
//   const readStream = fs.createReadStream("./sample.txt", "utf-8");
//   readStream.on("data", (chunk) => {
//     res.write(chunk);
//   });

//   readStream.on("end", () => {
//     res.end();
//   });

//   // copy file from sample2.txt ---> output.txt (bad approach and good approach)
// });

// server.listen(3000, () => {
//   console.log("Server is ready to use HTTP Server...");
// });

const { Readable, Writable } = require("node:stream");

const readableStream = new Readable({
  highWaterMark: 2,
  read() {},
});

readableStream.on("data", (chunk) => {
  // console.log(chunk);
  writeableStream.write(chunk);
});
readableStream.push("Hello, my name is Ratnakar Mishra");

const writeableStream = new Writable({
  write(chunk) {
    console.log(chunk.toString());
  },
});
