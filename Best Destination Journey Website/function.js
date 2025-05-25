const navbar = document.querySelector('#navbar')
const burger = document.querySelector('.burger')
const icon = document.querySelector('.fa-bars');

burger.addEventListener('click', () => {
    const isOpen = navbar.classList.contains('responsive');
    if(!isOpen){
        navbar.classList.add('responsive');
        icon.classList.replace('fa-bars', 'fa-xmark');
    }else{
        navbar.classList.remove('responsive');
        setTimeout( ()=>{
            icon.classList.replace('fa-xmark', 'fa-bars');
        }, 400);
    }
});