window.onload = function () {
  console.log("Página cargada, esperando 3 segundos...");

  setTimeout(() => {
    document.getElementById("mensaje").textContent =
      "✅ Ejecutado tras 3 segundos de delay.";
  }, 3000);
};
