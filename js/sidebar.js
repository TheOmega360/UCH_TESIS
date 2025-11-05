// Sidebar toggle logic (used by index and pages)
function setupSidebarToggles(){
  const toggle = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');
  if(toggle && sidebar){
    toggle.addEventListener('click', ()=> sidebar.classList.toggle('collapsed'));
  }
  // Mobile behavior
  document.addEventListener('click', (e)=>{
    const sb = document.getElementById('sidebar');
    if(window.innerWidth <= 768 && sb && !sb.contains(e.target) && !e.target.closest('#toggleSidebar')){
      sb.classList.remove('open');
    }
  });
}
document.addEventListener('DOMContentLoaded', setupSidebarToggles);
