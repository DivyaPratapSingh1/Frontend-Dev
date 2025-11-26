// Q2 - Live Character Counter
const ta = document.getElementById('ta');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('reset');
const MAX = 100;

ta.addEventListener('keydown', (e) => {
  const remaining = MAX - ta.value.length;
  if(remaining <= 0 && 
     // allow navigation keys but prevent character input
     !(e.key === 'Backspace' || e.key === 'Delete' || e.key.startsWith('Arrow') || e.ctrlKey || e.metaKey)
    ){
    e.preventDefault();
  }
});

ta.addEventListener('input', () => updateCounter());
function updateCounter(){
  const rem = MAX - ta.value.length;
  counter.textContent = rem;
  counter.className = '';
  if(rem <= 20 && rem > 0) counter.classList.add('yellow');
  if(rem <= 0) counter.classList.add('red');
}
resetBtn.addEventListener('click', () => {
  ta.value = '';
  updateCounter();
});
updateCounter();