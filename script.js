const emailField = document.getElementById("email");
emailField.addEventListener("input", () => {
  if (emailField.validity.typeMismatch) {
    emailField.setCustomValidity("Not a valid email");
    emailField.reportValidity();
    emailField.classList.add("invalid");
  } else {
    emailField.setCustomValidity("");
    emailField.classList.remove("invalid");
  }
});

const countryField = document.getElementById("country");
countryField.addEventListener("input", () => {
  if (countryField.validity.patternMismatch) {
    countryField.setCustomValidity("Must be two uppercase letters");
    countryField.reportValidity();
    countryField.classList.add("invalid");
  }
  if (countryField.validity.tooShort) {
    countryField.setCustomValidity("Must be only two character long");
    countryField.reportValidity();
    countryField.classList.add("invalid");
  } else {
    countryField.setCustomValidity("");
    countryField.classList.remove("invalid");
  }
});

const zipcodeField = document.getElementById("zipcode");
zipcodeField.addEventListener("input", () => {
  if (zipcodeField.validity.patternMismatch) {
    zipcodeField.setCustomValidity("Not a valid zipcode");
    zipcodeField.reportValidity();
    zipcodeField.classList.add("invalid");
  } else {
    zipcodeField.setCustomValidity("");
    zipcodeField.classList.remove("invalid");
  }
});

const passwordField = document.getElementById("password");
passwordField.addEventListener("input", () => {
  if (passwordField.validity.tooShort) {
    passwordField.setCustomValidity("Must be at least 8 characters long");
    passwordField.reportValidity();
    passwordField.classList.add("invalid");
  } else {
    passwordField.setCustomValidity("");
    passwordField.classList.remove("invalid");
  }
});

const confirmPasswordField = document.getElementById("confirmPassword");
confirmPasswordField.addEventListener("input", () => {
  if (confirmPasswordField.value !== passwordField.value) {
    confirmPasswordField.setCustomValidity("The passwords are not the same");
    confirmPasswordField.reportValidity();
    confirmPasswordField.classList.add("invalid");
  } else {
    confirmPasswordField.setCustomValidity("");
    confirmPasswordField.classList.remove("invalid");
  }
});

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.getElementsByTagName("form")[0].checkValidity()) {
    alert("Great Success!");
  } else {
    alert("Great Failure!");
  }
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {});
