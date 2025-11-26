function bookTicket() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let seats = document.getElementById("seats").value;

  const nameReg = /^[A-Za-z ]+$/;
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const seatReg = /^([1-9]|10)$/;

  if (!nameReg.test(name)) return alert("Invalid name");
  if (!emailReg.test(email)) return alert("Invalid email");
  if (!seatReg.test(seats)) return alert("Seats must be 1–10 only");

  const booking = { name, email, seats };
  document.getElementById("output").innerText = JSON.stringify(booking, null, 2);
}