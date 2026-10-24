const figura = document.getElementById("figura");
const caracter = document.getElementById("caracter");
const altura = document.getElementById("altura");
const base = document.getElementById("base");
const campoBase = document.getElementById("campoBase");
const resultado = document.getElementById("resultado");

function actualizarCampos() {
    campoBase.hidden = figura.value === "triangulo";
}

figura.addEventListener("change", actualizarCampos);
actualizarCampos();

document.getElementById("mostrar").addEventListener("click", function (e) {
    e.preventDefault();

    const c = caracter.value;
    const h = parseInt(altura.value);
    const b = parseInt(base.value);
    let dibujo = "";

    if (!c || !h || h <= 0 || (figura.value === "rectangulo" && (!b || b <= 0))) {
        resultado.textContent = "Ingresa datos válidos.";
        return;
    }

    if (figura.value === "triangulo") {
        for (let i = 1; i <= h; i++) {
            dibujo += c.repeat(i) + "\n";
        }
    } else {
        for (let i = 0; i < h; i++) {
            dibujo += c.repeat(b) + "\n";
        }
    }

    resultado.textContent = dibujo;
});
