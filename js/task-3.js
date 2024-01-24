const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  let textInput = event.currentTarget.value.trim();
  if (textInput === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = textInput;
  }
});
