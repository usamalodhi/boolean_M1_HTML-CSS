"use strict";

// variables
const form = document.getElementById("form");
const names = document.getElementById("names");
const email = document.getElementById("email");
let success = false;

const message = document.getElementById("message");
const submit = document.getElementById("submit");
// return element object by id property that matches the specified string

form.addEventListener("submit", (e) => {
  // call function validateInputs and return success
  success = validateInputs();

  // prevent button's default behaviour only if success = fale
  if (success === false) e.preventDefault();
});

//error message displayed on form
function setErrorFor(input, message) {
  const formRender = input.parentElement;
  const small = formRender.querySelector("small");
  formRender.className = "form-render error";
  small.innerText = message;
}

//indicate sucessful inputs
function setSuccessFor(input) {
  const formRender = input.parentElement;
  formRender.className = "form-render success";
}

//check if email is email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//validate inputs
function validateInputs() {
  let success_ = false;

  // remove whitespaces
  const namesValue = names.value.trim();
  const emailValue = email.value.trim();

  // name
  if (namesValue === "test") {
    setErrorFor(names, "this has worked");
  }
  if (namesValue !== "") {
    setSuccessFor(names, "this has worked too");
  }

  //   //email
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  }
  if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  }
  if (isEmail(emailValue)) {
    setSuccessFor(email);
  }

  // services
  const services = document.getElementById("services");
  const servicesValue = services.options[services.selectedIndex].value;

  if (servicesValue === "") {
    setErrorFor(services, "select service");
  }
  if (servicesValue !== "") {
    setSuccessFor(services);
  }

  //  budget
  const budget = document.getElementById("budget");
  const budgetValue = budget.options[budget.selectedIndex].value;

  if (budgetValue === "") {
    setErrorFor(budget, "select budget");
  }
  if (budgetValue !== "") {
    setSuccessFor(budget);
  }

  //fulfill validation
  if (
    namesValue !== "" &&
    isEmail(emailValue) &&
    servicesValue !== "" &&
    budgetValue !== ""
  ) {
    success_ = true;
  }
  return success_;
}
