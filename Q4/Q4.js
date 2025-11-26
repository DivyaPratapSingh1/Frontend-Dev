// Q4 - Theme switcher using setAttribute and custom data-theme
document.querySelectorAll('button[data-theme]').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    const t = btn.getAttribute('data-theme');
    document.body.setAttribute('data-theme', t);
    // Save current theme as custom attribute
    document.body.setAttribute('data-theme-current', t);
  });
});