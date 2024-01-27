const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const colorValueSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorBtn.addEventListener("click", (event) => {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorValueSpan.textContent = newColor;
});
