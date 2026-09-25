// Mensaje en consola
console.log("Clínica Veterinaria Benji - página cargada correctamente");

// Muestra un aviso al enviar el formulario de cita
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    alert("¡Gracias! Tu cita fue registrada. Te contactaremos pronto.");
    formulario.reset();
});// TODO: (opcional) tu JavaScript. Basta con una instrucción.
