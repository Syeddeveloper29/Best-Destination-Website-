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


const input = document.getElementById('first-input');

const handleHomeText = () => {
    if(window.innerWidth <= 370){
        input.placeholder = `Ex: place, resturent, automobile`;
    }else{
        input.placeholder = `Ex: place, resturent, food, automobile`;
    }
}

window.addEventListener('load', handleHomeText);
window.addEventListener('resize', handleHomeText);