console.log("This is a Top Level Scope");

setTimeout(() => {
  console.log("This is time scope");
}, 0);

setImmediate(() => console.log("This is setImmediate"));

console.log("This is Second Top Level Scope");
