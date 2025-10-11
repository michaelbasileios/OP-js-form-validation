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
    return false;
  } else if (!emailRegex.test(emailInput.value)) {
    errorSpan.textContent = "Please enter a valid email address";
    return false;
  } else {
    errorSpan.textContent = "";
    return true;
  }
}

//Input event listeners
emailInput.addEventListener("input", validateEmail);
