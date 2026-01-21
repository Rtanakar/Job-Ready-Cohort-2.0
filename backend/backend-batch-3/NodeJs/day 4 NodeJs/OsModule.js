const os = require("node:os");

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.cpus().length);
// console.log((os.freemem() / 1024 / 1024 / 1024).toFixed(2));
// console.log((os.totalmem() / 1024 / 1024 / 1024).toFixed(2))
// console.log(os.type());
console.log(os.uptime() / 60 / 60);
console.log(os.userInfo());
