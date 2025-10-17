window.onload = function () {
  console.log("Página cargada, esperando 3 segundos...");

  const ejecuta = () => {
    document.getElementById("mensaje").textContent =
      "✅ Ejecutado tras 3 segundos de delay.";
  };

  setTimeout(ejecuta, 3000);

  console.log("Antes de los 3 segundos...");
};
