// Main script for index and general pages
document.addEventListener('DOMContentLoaded', ()=>{
  const user = JSON.parse(localStorage.getItem('user')||'null');
  if(!user && location.pathname.endsWith('index.html')){
    window.location.href = 'login.html';
    return;
  }
  if(user){
    const nameEl = document.getElementById('userName');
    const profEl = document.getElementById('userProfesion');
    const bienvenida = document.getElementById('bienvenida');
    const profesion = document.getElementById('profesion');
    if(nameEl) nameEl.textContent = `${user.nombres} ${user.apellido_paterno}`;
    if(profEl) profEl.textContent = user.profesion || '';
    if(bienvenida) bienvenida.textContent = `Bienvenido, ${user.nombres}`;
    if(profesion) profesion.textContent = `Profesión: ${user.profesion}`;
    const av = document.querySelector('.avatar');
    if(av) av.textContent = user.nombres ? user.nombres.charAt(0) : 'U';
  }

  // metric: number of records stored locally
  const metricCount = document.getElementById('metricCount');
  if(metricCount){
    const at = JSON.parse(localStorage.getItem('atenciones')||'[]');
    metricCount.textContent = at.length;
  }

  // logout button (works across pages)
  const logout = document.getElementById('logout');
  if(logout) logout.addEventListener('click', ()=>{
    localStorage.removeItem('user');
    window.location.href = '/login.html';
  });
});
