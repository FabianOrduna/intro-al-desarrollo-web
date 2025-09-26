function guardarNombre() {
  const nombre = document.getElementById("nombre").value;
  localStorage.setItem("nombreGuardado", nombre);

  if (nombre) {
    document.getElementById("resultado").textContent =
      "Nombre guardado en localStorage";
  } else {
    {
      document.getElementById("resultado").textContent =
        "Por favor, ingresa un nombre";
    }
  }
}

function mostrarNombre() {
  const nombre = localStorage.getItem("nombreGuardado");
  if (nombre) {
    document.getElementById("resultado").textContent = "Hola, " + nombre;
  } else {
    document.getElementById("resultado").textContent =
      "No hay ningún nombre guardado";
  }
}

function borrarNombre() {
  localStorage.removeItem("nombreGuardado");
  document.getElementById("resultado").textContent =
    "Nombre eliminado de localStorage";
}
