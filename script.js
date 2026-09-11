// ===== Menu mobile =====
const navToggle = document.getElementById("nav-toggle");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", aberto);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== Efeito de digitação no papel/cargo =====
const typedEl = document.getElementById("typed");
const frases = ["Desenvolvedora Front-end", "Apaixonada por interfaces", "Sempre buscando aprender"];
const reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduzMovimento) {
  typedEl.textContent = frases[0];
} else {
  let fraseAtual = 0;
  let letraAtual = 0;
  let apagando = false;

  function digitar() {
    const texto = frases[fraseAtual];

    if (!apagando) {
      letraAtual++;
      typedEl.textContent = texto.slice(0, letraAtual);
      if (letraAtual === texto.length) {
        apagando = true;
        setTimeout(digitar, 1800);
        return;
      }
    } else {
      letraAtual--;
      typedEl.textContent = texto.slice(0, letraAtual);
      if (letraAtual === 0) {
        apagando = false;
        fraseAtual = (fraseAtual + 1) % frases.length;
      }
    }

    setTimeout(digitar, apagando ? 35 : 65);
  }

  digitar();
}

// ===== Botão "Ver mais" sobre mim =====
const botaoVerMais = document.getElementById("btn-ver-mais");
const conteudoExtra = document.getElementById("conteudo-extra");
let mostrandoMais = false;

botaoVerMais.addEventListener("click", () => {
  if (!mostrandoMais) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent =
      "Eu sou a Heloisa, tenho 21 anos e sou desenvolvedora front-end apaixonada por tecnologia e design. Gosto de transformar ideias em telas que fazem sentido — e que funcionam de verdade, não só no papel.";
    conteudoExtra.appendChild(paragrafo);
    botaoVerMais.textContent = "Ver menos";
    botaoVerMais.setAttribute("aria-expanded", "true");
    mostrandoMais = true;
  } else {
    conteudoExtra.innerHTML = "";
    botaoVerMais.textContent = "Ver mais";
    botaoVerMais.setAttribute("aria-expanded", "false");
    mostrandoMais = false;
  }
});

// ===== Revelar cards de projeto ao rolar =====
const cards = document.querySelectorAll(".projeto-card");

const cardObserver = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada, i) => {
      if (entrada.isIntersecting) {
        setTimeout(() => entrada.target.classList.add("in-view"), i * 60);
        cardObserver.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach((card) => cardObserver.observe(card));

// ===== Preencher barras de habilidade ao rolar =====
const barras = document.querySelectorAll(".skill-fill");

const barraObserver = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("filled");
        barraObserver.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.5 }
);

barras.forEach((barra) => barraObserver.observe(barra));
