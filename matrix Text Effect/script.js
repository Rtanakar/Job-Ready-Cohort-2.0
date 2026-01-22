const p = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = p.textContent;

let iteration = 0;

function randomText() {
  const str = text
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;
      }
      return characters.split("")[
        Math.floor(Math.random() * characters.length)
      ];
    })
    .join("");

  p.textContent = str;

  iteration += 0.25;
}

p.addEventListener("mouseenter", () => {
  setInterval(randomText, 30);
});
