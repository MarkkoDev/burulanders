function valida(f) {
    
    var ok = true;
    const email = document.getElementById('email');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const telefono = document.getElementById('telefono');


    if (email.value === "") {
        alert("Debe completar el campo Email.");
        email.focus();
        return false;
      }
      if (nombre.value === "") {
        alert("Debe completar el campo Nombre.");
        email.focus();
        return false;
      }
      if (apellido.value === "") {
        alert("Debe completar el campo Apellido.");
        email.focus();
        return false;
      }
      if (telefono.value === "") {
        alert("Debe completar el campo Telefono de Contacto.");
        email.focus();
        return false;
      }


return true;
  }