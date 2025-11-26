function bookMovie(){
  let name=document.getElementById("name").value.trim();
  let email=document.getElementById("email").value.trim();
  let seats=parseInt(document.getElementById("seats").value);

  if(!/^[A-Za-z ]+$/.test(name)) return alert("Invalid Name");
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return alert("Invalid Email");
  if(!(seats>=1 && seats<=10)) return alert("Seats 1-10");

  let ticket={name,email,seats};
  document.getElementById("ticket").innerText=JSON.stringify(ticket);
}
