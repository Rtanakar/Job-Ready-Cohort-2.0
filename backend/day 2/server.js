// package.json ---> javascript ka code kaun kaun se package par nirbhar karta hai wo sare yanhi par hote hai
// node_modules ---> kisi bhi package ko jo ham install karte hai uska pura code node_modules folder me ata hai

// What is server ---> server ak machine hai jiske pass khud ki operating system hai, khud ak processer hai, khud ki ak ram ys storage hai
// server ak aise machine jise program kia gaya hai jo user jo bhi request karega use uska ak proper response de sake
// jaise amazon me ham agar headphone search karenge (request karenge) to we hame headphone hi response karega aur kuch bhi nahi yahi hota hai server programe machine

const expess = require("express");

const app = expess(); // server create kar chuka hai

app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

app.listen(3000); // server ko start karta hai
