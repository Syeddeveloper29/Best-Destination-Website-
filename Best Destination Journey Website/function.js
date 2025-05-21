burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
right = document.querySelector('.right')

burger.addEventListener('click', () => {
    right.classList.toggle('v-resp');
    navbar.classList.toggle('h-resp');
})