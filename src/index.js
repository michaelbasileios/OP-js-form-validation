import "./styles.css";

const form = document.querySelector("form");
const formInputs = document.querySelectorAll(".form-input");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");

formInputs.forEach((inputElement) => {
  inputElement.addEventListener("input", (e) => {});
});
// email.addEventListener("input", (e) => {
//   if (email.validity.valid) {
//     emailError.textContent = ""
//   }
// });
