document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const dni = document.getElementById('dni').value.trim();
  const password = document.getElementById('password').value.trim();

  if(dni === "75555611" && password === "123456"){
    const user = {
      dni: "75555611",
      nombres: "Sebastian",
      apellido_paterno: "Castillo",
      apellido_materno: "Camac",
      profesion: "Estadístico"
    };
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = "index.html";
  } else {
    alert("DNI o contraseña incorrectos");
  }
});
