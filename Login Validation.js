function loginValidate(){
  let u=document.getElementById("username").value;
  let p=document.getElementById("password").value;

  let errors=[];

  if(u.length<5) errors.push("Username min 5 chars");
  if(p.length<8) errors.push("Password min 8 chars");
  if(!/[A-Z]/.test(p)) errors.push("Need uppercase");
  if(!/[a-z]/.test(p)) errors.push("Need lowercase");
  if(!/\d/.test(p)) errors.push("Need number");
  if(!/[^A-Za-z0-9]/.test(p)) errors.push("Need special char");

  document.getElementById("errors").innerHTML=errors.join("<br>");

  if(errors.length===0) alert("Success");
}
