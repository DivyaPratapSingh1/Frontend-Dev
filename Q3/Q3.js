// Q3 - Multi-step form with validation
const steps = Array.from(document.querySelectorAll('.step'));
let current = 0;
const backBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const summary = document.getElementById('summary');

function showStep(idx){
  steps.forEach((s,i)=> s.classList.toggle('active', i===idx));
  backBtn.style.display = idx===0 ? 'none' : '';
  nextBtn.style.display = idx===steps.length-1 ? 'none' : '';
  submitBtn.style.display = idx===steps.length-1 ? '' : 'none';
}
function validateStep(idx){
  if(idx===0){
    const v = document.getElementById('name').value.trim();
    document.getElementById('err-name').textContent = v ? '' : 'Name is required';
    return !!v;
  }
  if(idx===1){
    const v = document.getElementById('email').value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    document.getElementById('err-email').textContent = ok ? '' : 'Valid email required';
    return ok;
  }
  if(idx===2){
    const v = document.getElementById('password').value;
    const ok = v.length >= 6;
    document.getElementById('err-password').textContent = ok ? '' : 'Password min 6 chars';
    return ok;
  }
  return true;
}

nextBtn.addEventListener('click', () => {
  if(validateStep(current)){
    current++; showStep(current);
  }
});
backBtn.addEventListener('click', () => { current = Math.max(0, current-1); showStep(current); });
document.getElementById('multiForm').addEventListener('submit', (e) => {
  e.preventDefault();
  // final validation
  if(!validateStep(2)) return;
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };
  summary.textContent = 'Summary:\n' + JSON.stringify(data, null, 2);
});
showStep(0);