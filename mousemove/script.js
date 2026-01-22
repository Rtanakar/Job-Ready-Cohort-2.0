const main = document.querySelector("main");
const img = document.querySelector("img");

main.addEventListener("mousemove", (e) => {
  img.style.top = `${e.y}px`;
  img.style.left = `${e.x}px`;
});

img.addEventListener("dblclick", () => {
  main.style.backgroundColor = "orange";
});
