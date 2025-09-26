// Función para obtener el valor de los inputs
function obtenerNumero(id) {
  const valor = document.getElementById(id).value;
  return parseFloat(valor) || 0; // si está vacío, toma 0
}

// Función que maneja las operaciones
function calcular(event, operacion) {
  event.preventDefault(); // Evita que se recargue la página

  const a = obtenerNumero("num1");
  const b = obtenerNumero("num2");
  let resultado = 0;

  switch (operacion) {
    case "sumar":
      resultado = a + b;
      break;
    case "restar":
      resultado = a - b;
      break;
    case "multiplicar":
      resultado = a * b;
      break;
    case "dividir":
      if (b !== 0) {
        resultado = a / b;
      } else {
        resultado = "Error: división entre 0";
      }
      break;
  }

  document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
