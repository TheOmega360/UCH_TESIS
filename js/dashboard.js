// Comprobar usuario logueado
const user = JSON.parse(localStorage.getItem('user'));
if(!user) window.location.href = "/plataforma_samay/login.html";

// Mostrar datos
document.getElementById('userName').textContent = `${user.nombres} ${user.apellido_paterno}`;
document.getElementById('profesion').textContent = user.profesion;
document.getElementById('userInitial').textContent = user.nombres.charAt(0).toUpperCase();

// Cerrar sesión
document.getElementById('logout').addEventListener('click', ()=>{
  localStorage.removeItem('user');
  window.location.href = "/plataforma_samay/login.html";
});

// Sidebar colapsable
document.getElementById('toggleSidebar').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.toggle('collapsed');
});
