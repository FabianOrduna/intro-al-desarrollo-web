function mostrarImagen(id) {
  // Ocultar todas las imágenes (agregar d-none)
  document.querySelectorAll("img").forEach((img) => {
    img.classList.add("d-none");
  });

  // Mostrar solo la seleccionada (quitar d-none)
  const seleccionada = document.getElementById(id);
  if (seleccionada) {
    seleccionada.classList.remove("d-none");
  }
}

function limpiarImagen() {
  document.querySelectorAll("img").forEach((img) => {
    img.classList.add("d-none");
  });
}
