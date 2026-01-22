const card = document.querySelector(".card");
const img = document.querySelector("img");
const h1 = document.querySelector("h1 span");

img.addEventListener("mouseenter", () => {
  h1.textContent = "Bhad me jao sab log🤬🤬🤬";
});

img.addEventListener("mouseleave", () => {
  h1.textContent = "how are you?";
});
