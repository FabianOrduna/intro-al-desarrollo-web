function cambiarColor(elemento) {
  elemento.style.backgroundColor = "tomato";
  elemento.textContent = "😎 ¡Hola!";
}

function restaurarColor(elemento) {
  elemento.style.backgroundColor = "";
  elemento.textContent = "Pasa el mouse";
}
