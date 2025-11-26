function validateLogin() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  const userReg = /^.{5,}$/;
  const passReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (!userReg.test(u)) return alert("Username must be at least 5 chars");
  if (!passReg.test(p)) return alert("Password must contain uppercase, lowercase, number & special char");
  alert("Login Successful!");
}