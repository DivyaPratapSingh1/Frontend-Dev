// Q6 - Real-time table filter
const search = document.getElementById('search');
const tbody = document.querySelector('#tbl tbody');
const nores = document.getElementById('nores');

search.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase();
  let any = false;
  Array.from(tbody.rows).forEach(row=>{
    const text = (row.cells[0].textContent + ' ' + row.cells[1].textContent).toLowerCase();
    const match = text.includes(q);
    row.style.display = match ? '' : 'none';
    if(match) any = true;
  });
  nores.style.display = any ? 'none' : '';
});