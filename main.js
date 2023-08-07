import "nes.css/css/nes.min.css";

document.addEventListener("DOMContentLoaded", () => {
  const email = {
    email: "",
    subject: "",
    message: "",
  };

  console.log(email);

  //Select interface elements
  const inputEmail = document.querySelector("#email_field");
  const inputSubject = document.querySelector("#text");
  const inputMessage = document.querySelector("#textarea_field");
  const labelEmail = document.querySelector("#label-email");
  const labelInfo = document.querySelectorAll(".label-info");
  const [subject, message] = labelInfo;

  const alertError = document.createElement("span");
  alertError.className = "error-label";
  alertError.textContent = "No Valido";

  // asign event listeners
  inputEmail.addEventListener("blur", validateEmail);

  inputSubject.addEventListener("blur", validarSubject);

  inputMessage.addEventListener("blur", validarMessage);

  function validateEmail(e) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inputValue = e.target.value;

    if (!regex.test(inputValue)) {
      showError(labelEmail, alertError);
      inputEmail.classList.add("input-error");
      inputEmail.classList.remove("input-success");
    } else {
      alertError.remove();
      inputEmail.classList.remove("input-error");
      inputEmail.classList.add("input-success");
    }

    //agregando el valor al objeto email
    email[e.target.name] = inputValue.trim().toLowerCase();
    checkEmail();
  }

  function validarSubject(e) {
    if (e.target.value.trim() === "") {
      showError(subject, alertError);
      inputSubject.classList.add("input-error");
      inputSubject.classList.remove("input-success");
    } else {
      alertError.remove();
      inputSubject.classList.remove("input-error");
      inputSubject.classList.add("input-success");
    }

    //agregando el valor al objeto email
    email[e.target.name] = e.target.value.trim().toLowerCase();
    checkEmail();
  }

  function validarMessage(e) {
    if (e.target.value.trim() === "") {
      showError(message, alertError);
      inputMessage.classList.add("input-error");
      inputMessage.classList.remove("input-success");
    } else {
      alertError.remove();
      inputMessage.classList.remove("input-error");
      inputMessage.classList.add("input-success");
    }
    email[e.target.name] = e.target.value.trim().toLowerCase();
    checkEmail();
  }

  function showError(container, message) {
    container.appendChild(message);
  }

  function checkEmail() {
    console.log(Object.values(email).includes(""));
  }
});
