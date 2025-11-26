function validateForm(){
  let name=document.getElementById("name");
  let email=document.getElementById("email");
  let phone=document.getElementById("phone");
  let pass=document.getElementById("password");

  let nameOk=/^[A-Za-z ]+$/.test(name.value);
  let emailOk=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value);
  let phoneOk=/^\d{10}$/.test(phone.value);
  let passOk=/(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/.test(pass.value);

  name.style.border=nameOk?"2px solid green":"2px solid red";
  email.style.border=emailOk?"2px solid green":"2px solid red";
  phone.style.border=phoneOk?"2px solid green":"2px solid red";
  pass.style.border=passOk?"2px solid green":"2px solid red";

  if(!(nameOk&&emailOk&&phoneOk&&passOk)) return false;
  alert("Success");
  return true;
}
