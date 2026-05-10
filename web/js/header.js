const openBtn = document.getElementById('openBurger');
const closeBtn = document.getElementById('closeBurger');
const menuOverlay = document.querySelector('.burger-menu-static');
openBtn.addEventListener('click', () => {
    menuOverlay.classList.add('burger-active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('burger-active');
    document.body.style.overflow = 'auto';
});

const headings = document.querySelectorAll(".underline-animate");

headings.forEach((h2) => {
    const underline = h2.querySelector(".underline");
    h2.addEventListener("mouseenter", () => {
        gsap.to(underline, {
            width: "100%",
            backgroundColor: "var(--color-secondary-green)",
            duration: 0.2
        });
    });
    h2.addEventListener("mouseleave", () => {
        gsap.to(underline, {
            width: 0,
            duration: 0.2
        });
    });
});