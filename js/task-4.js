const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {};
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  userData.email = email.trim();
  userData.password = password.trim();
  console.log(userData);

  form.reset();
});
