// Este archivo contiene funciones de operaciones aritméticas básicas
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre cero :(");
  }
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

// también hay una función única para seleccionar una operación
function operar(a, b, operacion) {
  switch (operacion) {
    case "sumar":
      return sumar(a, b);
    case "restar":
      return restar(a, b);
    case "multiplicar":
      return multiplicar(a, b);
    case "dividir":
      return dividir(a, b);
    case "modulo":
      return modulo(a, b);
    default:
      throw new Error("Operación no válida");
  }
}

module.exports = { sumar, restar, multiplicar, dividir, modulo, operar };
