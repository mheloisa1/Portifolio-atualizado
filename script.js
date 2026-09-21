const textoDigitado = document.getElementById("typed-text");
const frase = "Desenvolvedora Front-end";
let indice = 0;

function digitar() {
    if (indice <= frase.length) {
        textoDigitado.textContent = frase.slice(0, indice);
        indice++;
        setTimeout(digitar, 80);
    }
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    textoDigitado.textContent = frase;
} else {
    digitar();
}


const botaoVerMais = document.getElementById("btn-ver-mais");
const conteudoExtra = document.getElementById("conteudo-extra");
let mostrandoMais = false;

botaoVerMais.addEventListener("click", function () {
    if (!mostrandoMais) {
        const novoParagrafo = document.createElement("p");
        novoParagrafo.textContent =
            "Estou em processo de aprendizado e desenvolvimento profissional.";
        conteudoExtra.appendChild(novoParagrafo);

        botaoVerMais.querySelector("span").textContent = "Ver menos";
        botaoVerMais.setAttribute("aria-expanded", "true");
        mostrandoMais = true;
    } else {
        conteudoExtra.innerHTML = "";
        botaoVerMais.querySelector("span").textContent = "Ver mais";
        botaoVerMais.setAttribute("aria-expanded", "false");
        mostrandoMais = false;
    }
});


const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", function () {
    const aberto = navLinks.classList.toggle("aberto");
    navToggle.setAttribute("aria-expanded", aberto ? "true" : "false");
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("aberto");
        navToggle.setAttribute("aria-expanded", "false");
    });
});
