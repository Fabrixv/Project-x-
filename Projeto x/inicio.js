/* --------------------- Overlay Produtos --------------------- */
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const titulo = document.getElementById("tituloProduto");
const descricao = document.getElementById("descricaoProduto");

// Dados dos produtos
const produtos = {
  1: { titulo: "Discord Nitro", descricao: "Versão premium do Discord com emojis animados, melhor qualidade de vídeo e uploads maiores." },
  2: { titulo: "Discord Nitro Basic", descricao: "Plano básico com alguns benefícios exclusivos para personalização." },
  3: { titulo: "Discord Boost", descricao: "Aumente o nível do servidor e desbloqueie recursos extras." }
};

// Abrir overlay
document.querySelectorAll(".produto").forEach(produto => {
  produto.addEventListener("click", () => {
    const id = produto.dataset.produto;
    titulo.textContent = produtos[id].titulo;
    descricao.textContent = produtos[id].descricao;
    overlay.style.display = "flex";
  });
});

// Fechar overlay
closeBtn.addEventListener("click", () => overlay.style.display = "none");
overlay.addEventListener("click", e => { if (e.target === overlay) overlay.style.display = "none"; });

/* --------------------- Scroll Header --------------------- */
let lastScrollTop = 0;
const header = document.getElementById("superior");

window.addEventListener("scroll", () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    // Descendo: esconde header
    header.style.top = "-5vw";
  } else {
    // Subindo: mostra header
    header.style.top = "0";
  }
  lastScrollTop = st <= 0 ? 0 : st; // Para evitar negativos
});
/* --------------------- Sistema de Menu --------------------- */
const menuBtn = document.getElementById("menuBtn");
const menuLateral = document.getElementById("menuLateral");

// Toggle menu
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // impede que o clique suba e feche
  menuLateral.classList.toggle("aberto");
});

// Fecha menu clicando fora
window.addEventListener("click", (e) => {
  if (!menuLateral.contains(e.target) && e.target !== menuBtn) {
    menuLateral.classList.remove("aberto");
  }
});
