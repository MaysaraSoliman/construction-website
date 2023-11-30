// Header Scroll
const header = document.querySelector("header");

const headerChangeColor = function () {
    window.scrollY > 50
        ? header.classList.add("scroll")
        : header.classList.remove("scroll");
};
window.addEventListener("scroll", headerChangeColor);

// Back To Top
const backToTopBtn = document.querySelector("#back-to-top");

const scrollToTopAddActiveClass = function () {
    window.scrollY > 200
        ? backToTopBtn.classList.add("active")
        : backToTopBtn.classList.remove("active");
};
window.addEventListener("scroll", scrollToTopAddActiveClass);


backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
