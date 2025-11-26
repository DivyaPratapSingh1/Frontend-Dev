// Q8 - Custom dropdown without <select>
// Show/hide options
const ddBtn = document.getElementById('ddBtn');
const opts = document.getElementById('opts');
const dd = document.getElementById('dd');

ddBtn.addEventListener('click', (e)=> {
  e.stopPropagation();
  opts.style.display = opts.style.display === 'block' ? 'none' : 'block';
});

// clicking an option updates button text
opts.addEventListener('click', (e)=> {
  const o = e.target.closest('[data-val]');
  if(!o) return;
  ddBtn.textContent = o.textContent;
  opts.style.display = 'none';
});

// capture phase listener to close when clicking outside
document.addEventListener('click', (e)=> {
  // this runs during capture because we set useCapture below
}, true);

// add actual closer using capturing phase
document.addEventListener('click', (e)=> {
  // if click is outside dropdown, hide options
  if(!dd.contains(e.target)) opts.style.display = 'none';
}, true);