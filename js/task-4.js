const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {};
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  userData.email = email;
  userData.password = password;
  console.log(userData);

  form.reset();
});
