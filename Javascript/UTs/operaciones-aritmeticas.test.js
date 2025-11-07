const { sumar, restar, dividir } = require("./operaciones-aritmeticas.js");

test("Debe sumar dos números correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("Debe restar dos números correctamente", () => {
  expect(restar(2, 3)).toBe(-1);
  expect(restar(10, 7)).toBe(3);
});

test("Debe lanzar un error al dividir entre cero", () => {
  try {
    dividir(10, 0);
  } catch (e) {
    expect(e.message).toBe("No se puede dividir entre cero :(");
  }
});
