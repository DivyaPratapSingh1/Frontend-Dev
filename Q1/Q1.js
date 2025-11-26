// Q1 - Dynamic Product List Manager
const input = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('productList');

function createListItem(name){
  const li = document.createElement('li');
  li.innerHTML = `<span class="label">${escapeHtml(name)}</span>
    <input class="edit-input" style="display:none"/>
    <button class="edit btn">Edit</button>
    <button class="delete btn">Delete</button>`;
  return li;
}
function escapeHtml(s){ return s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

addBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if(!val) return;
  list.appendChild(createListItem(val));
  input.value = '';
});

// Event delegation on parent UL
list.addEventListener('click', (e) => {
  const target = e.target;
  const li = target.closest('li');
  if(!li) return;
  if(target.classList.contains('delete')){
    li.remove();
  } else if(target.classList.contains('edit')){
    enterEditMode(li);
  }
});

function enterEditMode(li){
  const label = li.querySelector('.label');
  const editInput = li.querySelector('.edit-input');
  label.style.display = 'none';
  editInput.style.display = '';
  editInput.value = label.textContent;
  editInput.focus();

  // Save on blur (clicking outside) or Enter
  const save = () => {
    label.textContent = editInput.value.trim() || 'Untitled';
    label.style.display = '';
    editInput.style.display = 'none';
    editInput.removeEventListener('blur', save);
    editInput.removeEventListener('keydown', onKey);
  };
  const onKey = (ev) => {
    if(ev.key === 'Enter') { save(); }
    if(ev.key === 'Escape') { editInput.value = label.textContent; save(); }
  };
  editInput.addEventListener('blur', save);
  editInput.addEventListener('keydown', onKey);
}

// click outside to auto-save handled by blur on input (works naturally)
