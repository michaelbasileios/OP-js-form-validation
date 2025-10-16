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

function validateCountry() {
  const errorSpan = countrySelect.nextElementSibling;

  if (!countrySelect.value) {
    errorSpan.textContent = "Please select a country";
    return false;
  } else {
    errorSpan.textContent = "";
    return true;
  }
}

function validateZipCode() {
  const errorSpan = zipInput.nextElementSibling;
  const zipRegex = /^\d{5}(-\d{4})?$/;

  if (!zipInput.value.trim()) {
    errorSpan.textContent = "Please enter a zip code";
    return false;
  } else if (!zipRegex.test(zipInput.value)) {
    errorSpan.textContent = "Please enter a valid zip code";
    return false;
  } else {
    errorSpan.textContent = "";
    return true;
  }
}

//Input event listeners
emailInput.addEventListener("input", validateEmail);
countrySelect.addEventListener("change", validateCountry);
zipInput.addEventListener("input", validateZipCode);
