// simples toggle do menu em mobile
document.getElementById('nav-toggle')?.addEventListener('click', function(){
  const list = document.getElementById('nav-list');
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', String(!expanded));
  if(list) list.style.display = expanded ? 'none' : 'flex';
});
