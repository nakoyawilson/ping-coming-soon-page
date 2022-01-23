const notifyForm = document.querySelector("form");
const inputField = document.querySelector("#email");

notifyForm.addEventListener("submit", (e) => {
  const emailInput = inputField.value;
  const errorMessage = document.querySelector(".error-message");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput === "" || emailInput === null) {
    errorMessage.style.display = "block";
    inputField.classList.add("error-border");
    errorMessage.innerHTML =
      "Whoops! It looks like you forgot to add your email";
    inputField.setAttribute("aria-invalid", "true");
    inputField.setAttribute("aria-describedBy", "error");
  } else if (!emailInput.match(emailRegex)) {
    errorMessage.style.display = "block";
    inputField.classList.add("error-border");
    errorMessage.innerHTML = "Please provide a valid email address";
    inputField.setAttribute("aria-invalid", "true");
    inputField.setAttribute("aria-describedBy", "error");
  } else {
    errorMessage.style.display = "none";
    inputField.classList.remove("error-border");
    inputField.removeAttribute("aria-invalid");
    inputField.removeAttribute("aria-describedBy");
    inputField.value = "";
  }
  e.preventDefault();
});
