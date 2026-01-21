const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// 1. on -> listen
emitter.on("ON_LLM_CALL", () => {
  console.log("Hello Emitter is Calling...");
});

// 2. emit -> call
emitter.emit("ON_LLM_CALL");
