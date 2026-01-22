const menuBtn = document.getElementById("menuBtn");
const menuPainel = document.getElementById("menuPainel");

menuBtn.addEventListener("click", () => {
    menuPainel.classList.toggle("ativo");
});
// Close the menu when clicking outside of it
document.addEventListener("click", (event) => {
    if (!menuPainel.contains(event.target) && event.target !== menuBtn) {
        menuPainel.classList.remove("ativo");
    }
});