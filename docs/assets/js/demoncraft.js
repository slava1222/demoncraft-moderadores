/* Guía de DemonCraft: pequeños añadidos (botón de copiar la dirección del servidor). */
(function () {
  function copiar(texto, boton) {
    var hecho = function () {
      var antes = boton.textContent;
      boton.textContent = "¡Copiado!";
      boton.classList.add("copiado");
      setTimeout(function () {
        boton.textContent = antes;
        boton.classList.remove("copiado");
      }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(hecho, function () {});
    } else {
      var area = document.createElement("textarea");
      area.value = texto;
      document.body.appendChild(area);
      area.select();
      try { document.execCommand("copy"); hecho(); } catch (e) { /* nada */ }
      document.body.removeChild(area);
    }
  }

  function enganchar() {
    document.querySelectorAll("[data-copiar]").forEach(function (boton) {
      if (boton.dataset.enganchado) return;
      boton.dataset.enganchado = "1";
      boton.addEventListener("click", function () {
        copiar(boton.getAttribute("data-copiar"), boton);
      });
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(enganchar);
  } else {
    document.addEventListener("DOMContentLoaded", enganchar);
  }
})();
