// package.json ---> javascript ka code kaun kaun se package par nirbhar karta hai wo sare yanhi par hote hai
// node_modules ---> kisi bhi package ko jo ham install karte hai uska pura code node_modules folder me ata hai

// What is server ---> server ak machine hai jiske pass khud ki operating system hai, khud ak processer hai, khud ki ak ram ys storage hai
// server ak aise machine jise program kia gaya hai jo user jo bhi request karega use uska ak proper response de sake
// jaise amazon me ham agar headphone search karenge (request karenge) to we hame headphone hi response karega aur kuch bhi nahi yahi hota hai server programe machine

// server create karna
const express = require("express");
const app = express(); // server create kar chuka hai
app.listen(); // server ko start karta hai



// SSR - backend se html create hoke ana use server side rendering kahte hai
// CRS - backend se json data ata hai to use client side rendering kahte hai