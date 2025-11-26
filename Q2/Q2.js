function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");

  const nameReg = /^[A-Za-z ]+$/;
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneReg = /^[0-9]{10}$/;
  const passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/;

  validateField(name, nameReg, "Name must contain only alphabets");
  validateField(email, emailReg, "Invalid email format");
  validateField(phone, phoneReg, "Phone must be 10 digits");
  validateField(password, passReg, "Password must contain uppercase, number & special character");
}
function validateField(field, regex, msg) {
  if (!regex.test(field.value)) {
    field.style.border = "2px solid red";
    field.nextElementSibling.innerText = msg;
  } else {
    field.style.border = "2px solid green";
    field.nextElementSibling.innerText = "";
  }
}