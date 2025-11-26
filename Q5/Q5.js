// Q5 - Image gallery with modal preview
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeBtn');

gallery.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if(!img) return;
  modalImg.src = img.src.replace('/400/300','/800/600');
  modal.classList.add('open');
});

// clicking outside modal closes it
modal.addEventListener('click', () => modal.classList.remove('open'));

// stop propagation for clicks inside box so it doesn't close
modal.querySelector('.box').addEventListener('click', (ev) => ev.stopPropagation());

closeBtn.addEventListener('click', () => modal.classList.remove('open'));