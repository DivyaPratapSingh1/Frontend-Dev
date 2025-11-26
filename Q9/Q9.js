// Q9 - Form submit blocker with live errors
const form = document.getElementById('f');
const nameI = document.getElementById('name');
const emailI = document.getElementById('email');
const passI = document.getElementById('password');
const eName = document.getElementById('e-name');
const eEmail = document.getElementById('e-email');
const ePass = document.getElementById('e-pass');
const msg = document.getElementById('msg');

function validate(){
  let ok = true;
  if(!nameI.value.trim()){ eName.textContent = 'Name is required'; ok=false; } else eName.textContent='';
  if(!emailI.value.includes('@')){ eEmail.textContent = 'Valid email required'; ok=false; } else eEmail.textContent='';
  if(passI.value.length < 6){ ePass.textContent = 'Password min 6 chars'; ok=false; } else ePass.textContent='';
  return ok;
}

form.addEventListener('submit', (e)=> {
  if(!validate()){
    e.preventDefault();
    msg.textContent = '';
  } else {
    e.preventDefault(); // still prevent actual navigation for demo
    msg.textContent = 'Form Submitted Successfully';
  }
});

// live removal of errors
[nameI,emailI,passI].forEach(inp => inp.addEventListener('input', validate));