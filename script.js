// Cotizador simple: 25 Bs por kilogramo
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cotizadorForm");
    const resultado = document.getElementById("resultadoCotizacion");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const origen = document.getElementById("origen").value;
        const destino = document.getElementById("destino").value;
        const peso = parseFloat(document.getElementById("peso").value);

        if (!origen || !destino || isNaN(peso) || peso <= 0) {
            resultado.className = "alert alert-warning mt-3";
            resultado.textContent =
                "Por favor, completa todos los campos con datos válidos.";
            resultado.classList.remove("d-none");
            return;
        }

        const tarifaPorKg = 25; // Bs
        const costo = peso * tarifaPorKg;

        resultado.className = "alert alert-success mt-3";
        resultado.innerHTML = `
      <strong>Cotización referencial:</strong><br>
      Origen: <strong>${origen}</strong> &mdash; Destino: <strong>${destino}</strong><br>
      Peso: <strong>${peso.toFixed(2)} kg</strong><br>
      Costo estimado: <strong>${costo.toFixed(2)} Bs</strong>
      <br><small class="text-muted">
      Monto expresado en bolivianos (BOB). El precio final puede variar según volumen y condiciones del envío.
      </small>
    `;
        resultado.classList.remove("d-none");
    });
});