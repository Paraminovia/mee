function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado al portapapeles: ' + texto);
    }, function(err) {
        alert('Error al copiar el texto: ' + err);
    });
}

const nav = document.querySelector("#nav");
const entrar = document.querySelector("#entrar");
const cerrar = document.querySelector("#cerrar");

entrar.addEventListener("click", () =>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})