const menuToggle = document.querySelector('.toggle');
const showCase = document.querySelector('.showcase');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    showCase.classList.toggle('active');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});