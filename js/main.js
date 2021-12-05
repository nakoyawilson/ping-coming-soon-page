const submitButton = document.querySelector(".notify");
const inputField = document.querySelector("#email");

submitButton.addEventListener("click", (e) => {
  const emailInput = inputField.value;
  const errorMessage = document.querySelector(".error-message");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput === "" || emailInput === null) {
    errorMessage.style.display = "block";
    inputField.style.borderColor = "hsl(354, 100%, 66%)";
    errorMessage.innerHTML =
      "Whoops! It looks like you forgot to add your email";
  } else if (!emailInput.match(emailRegex)) {
    errorMessage.innerHTML = "Please provide a valid email address";
  } else {
    errorMessage.style.display = "none";
    inputField.style.borderColor = "hsl(223, 100%, 88%)";
  }
  e.preventDefault();
});
