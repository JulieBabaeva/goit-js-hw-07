const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const elementsOfForm = event.currentTarget.elements;
  const email = elementsOfForm.email;
  const password = elementsOfForm.password;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // виправлено зауваження - дадано перевірку чи введено пароль
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    const data = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(data);
    event.currentTarget.reset();
  }
});
