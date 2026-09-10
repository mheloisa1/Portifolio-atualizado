/* ========================================
   1. EFEITO DE DIGITAÇÃO NO HERO
   Escreve o cargo letra por letra, como se estivesse sendo digitado
======================================== */
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

digitar();

/* ========================================
   2. BOTÃO "VER MAIS" NA SEÇÃO SOBRE
   (no arquivo original havia DOIS addEventListener no mesmo botão,
   então cada clique disparava as duas funções ao mesmo tempo —
   por isso o texto se comportava de forma estranha. Aqui ficou
   uma única função controlando tudo.)
======================================== */
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

/* ========================================
   3. MENU MOBILE (hambúrguer)
======================================== */
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", function () {
    const aberto = navLinks.classList.toggle("aberto");
    navToggle.setAttribute("aria-expanded", aberto ? "true" : "false");
});

// Fecha o menu automaticamente ao clicar em um link (útil no celular)
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("aberto");
        navToggle.setAttribute("aria-expanded", "false");
    });
});