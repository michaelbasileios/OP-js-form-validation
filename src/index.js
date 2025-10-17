import "./styles.css";

const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const countrySelect = document.querySelector("#country");
const zipInput = document.querySelector("#zip-code");
const passwordInput = document.querySelector("#password");
const confirmPwdInput = document.querySelector("#password-confirmation");

function validateEmail() {
  const errorSpan = emailInput.nextElementSibling;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailInput.value.trim()) {
    errorSpan.textContent = "Please enter an email address";
    emailInput.setAttribute("aria-invalid", "true");
    return false;
  } else if (!emailRegex.test(emailInput.value)) {
    errorSpan.textContent = "Please enter a valid email address";
    emailInput.setAttribute("aria-invalid", "true");
    return false;
  } else {
    errorSpan.textContent = "";
    emailInput.removeAttribute("aria-invalid");
    return true;
  }
}

function validateCountry() {
  const errorSpan = countrySelect.nextElementSibling;

  if (!countrySelect.value) {
    errorSpan.textContent = "Please select a country";
    countrySelect.setAttribute("aria-invalid", "true");
    return false;
  } else {
    errorSpan.textContent = "";
    countrySelect.removeAttribute("aria-invalid");
    return true;
  }
}

function validateZipCode() {
  const errorSpan = zipInput.nextElementSibling;
  const zipRegex = /^\d{5}(-\d{4})?$/;

  if (!zipInput.value.trim()) {
    errorSpan.textContent = "Please enter a zip code";
    zipInput.setAttribute("aria-invalid", "true");
    return false;
  } else if (!zipRegex.test(zipInput.value)) {
    errorSpan.textContent = "Please enter a valid zip code";
    zipInput.setAttribute("aria-invalid", "true");
    return false;
  } else {
    errorSpan.textContent = "";
    zipInput.removeAttribute("aria-invalid");
    return true;
  }
}

function validatePassword() {
  const errorSpan = passwordInput.nextElementSibling;

  if (!passwordInput.value) {
    errorSpan.textContent = "Password is required";
    passwordInput.setAttribute("aria-invalid", "true");
    return false;
  } else if (passwordInput.value.length < 8) {
    errorSpan.textContent = "Password must be at least 8 characters";
    passwordInput.setAttribute("aria-invalid", "true");
    return false;
  } else {
    errorSpan.textContent = "";
    passwordInput.removeAttribute("aria-invalid");
    return true;
  }
}

function validatePwdConfirm() {
  const errorSpan = confirmPwdInput.nextElementSibling;

  if (!confirmPwdInput.value) {
    errorSpan.textContent = "Please confirm your password";
    confirmPwdInput.setAttribute("aria-invalid", "true");
    return false;
  } else if (confirmPwdInput.value !== passwordInput.value) {
    errorSpan.textContent = "Passwords do not match";
    confirmPwdInput.setAttribute("aria-invalid", "true");
    return false;
  } else {
    errorSpan.textContent = "";
    confirmPwdInput.removeAttribute("aria-invalid");
    return true;
  }
}

//Input event listeners
emailInput.addEventListener("input", validateEmail);
countrySelect.addEventListener("change", validateCountry);
zipInput.addEventListener("input", validateZipCode);
passwordInput.addEventListener("input", validatePassword);
confirmPwdInput.addEventListener("input", validatePwdConfirm);
//Validate confirmation if main password changes
passwordInput.addEventListener("input", () => {
  if (confirmPwdInput.value) {
    validatePwdConfirm();
  }
});

//Form submission

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValid = validateEmail();
  const countryValid = validateCountry();
  const zipValid = validateZipCode();
  const pwdValid = validatePassword();
  const confirmPwdValid = validatePwdConfirm();

  if (emailValid && countryValid && zipValid && pwdValid && confirmPwdValid) {
    alert("Form submitted!");
  } else {
    const firstError = form.querySelector("input:invalid, select:invalid");
    if (firstError) {
      firstError.focus();
    }
  }
});
