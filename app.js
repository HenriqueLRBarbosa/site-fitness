const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e)=> {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollReealOption = {
    distance: "50px",
    origin: "bottom",
    duration:1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollReealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollReealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
    ...scrollReealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
    ...scrollReealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about__image img", {
    ...scrollReealOption,
    origin: "left",
});
ScrollReveal().reveal(".about__content .secyion__header", {
    ...scrollReealOption,
    delay: 500,
});
ScrollReveal().reveal(".about__content p ", {
    ...scrollReealOption,
    delay: 1000,
    interval: 500,
});
ScrollReveal().reveal(".about__btn", {
    ...scrollReealOption,
    delay: 2000,
});

ScrollReveal().reveal(".blog__card", {
    duration: 1000,
    interval: 500,
});
ScrollReveal().reveal(".blog__btn", {
    ...scrollReealOption,
    delay: 2000,
});

ScrollReveal().reveal(".contact__image img", {
    ...scrollReealOption,
});