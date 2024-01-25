const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divOfBoxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let widthBox = 30;
  let heightBox = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newColor = getRandomHexColor();
    divOfBoxes.insertAdjacentHTML(
      "beforeend",
      `<div class="create-box" style="width: ${widthBox}px; height: ${heightBox}px; background-color: ${newColor}"></div>`
    );
    widthBox += 10;
    heightBox += 10;
  }
}

function destroyBoxes() {
  divOfBoxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  if (inputNumber.value < 1 || inputNumber.value > 100) {
    return;
  }
  destroyBoxes();
  createBoxes(inputNumber.value);
  inputNumber.value = "";
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
