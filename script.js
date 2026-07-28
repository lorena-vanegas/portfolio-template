
const menu = document.querySelector("nav");
const boton = document.querySelector(".menu-toggle");

boton.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});