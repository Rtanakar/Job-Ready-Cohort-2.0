const h1 = document.querySelector("h1");
const body = document.body;

body.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    return (h1.textContent = "space");
  }
  h1.textContent = e.key;
  console.log(e);
});
