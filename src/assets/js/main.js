const menuBtn = document.getElementById("menu-btn");
const menuBar = document.getElementById('menuBar');

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menu-active");
    menuBar.classList.toggle("show");
});
