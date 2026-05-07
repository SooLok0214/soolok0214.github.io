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