// for navbar
const navbar = document.querySelector('#navbar');
const burger = document.querySelector('.burger');
const icon = document.querySelector('.fa-bars');

burger.addEventListener('click', () => {
    const isOpen = navbar.classList.contains('responsive');
    if (!isOpen) {
        navbar.classList.add('responsive');
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        navbar.classList.remove('responsive');
        setTimeout(() => {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }, 400);
    }
});
// for navbar



// for home text
const input = document.getElementById('first-input');

const handleHomeText = () => {
    if (window.innerWidth <= 370) {
        input.placeholder = `Ex: place, resturent, automobile`;
    } else {
        input.placeholder = `Ex: place, resturent, food, automobile`;
    }
}
window.addEventListener('load', handleHomeText);
window.addEventListener('resize', handleHomeText);
// for home text



// for listing
const listingHeading = document.getElementById('listing-second-heading');

const changeListingHeading = () => {
    if (window.innerWidth <= 376) {
        listingHeading.textContent = `Categories`;
    } else {
        listingHeading.textContent = `Listing Categories`;
    }
}
window.addEventListener('load', changeListingHeading);
window.addEventListener('resize', changeListingHeading);
// for listing



// for client section
const clientSlider = document.querySelector('.client-container');

let clientScrollAmount = 0;


// Clone first and last slides
const clientSlidesClone = () => {
    const clientSlides = Array.from(clientSlider.children);

    const firstClone = clientSlides[0].cloneNode(true);
    const lastClone = clientSlides[clientSlides.length - 1].cloneNode(true);

    clientSlider.appendChild(firstClone);
    clientSlider.insertBefore(lastClone, clientSlides[0]);
}

// calculate scroll amount based on card width + gap
const setClientScrollAmountByCardWidth = () => {
    const clientContainer = document.querySelector('.client-container');
    const clientCard = document.querySelector('.client-main-box');

    if (clientCard && clientContainer) {
        const firstCard = clientCard.offsetWidth;

        const containerStyle = window.getComputedStyle(clientContainer);

        const gap = parseFloat(containerStyle.gap || '0');

        clientScrollAmount = firstCard + gap;
    }
}

const highlightCenterSlide = () => {
    const cards = document.querySelectorAll('.client-main-box');
    const cardContainer = clientSlider.scrollLeft + clientSlider.clientWidth / 2;

    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach(card => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardContainer - cardCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = card;
        }
    });

    cards.forEach(card => card.classList.remove('active'));
    if (closestCard) {
        closestCard.classList.add('active');
    }
};

// auto sliding logic
let clientSlideShow;

const startClientSlideShow = () => {
    clientSlideShow = setInterval(() => {
        if (clientSlider.scrollLeft >= clientSlider.scrollWidth - clientSlider.clientWidth) {
            clientSlider.classList.add('no-smooth');
            clientSlider.scrollLeft = clientScrollAmount / 2;
            clientSlider.classList.remove('no-smooth');
        } else {
            clientSlider.scrollBy({ left: clientScrollAmount, behavior: 'smooth' });
        }
        setTimeout(highlightCenterSlide, 500);
    }, 3000);
}

const stopClientSlideShow = () => {
    clearInterval(clientSlideShow);
}

// add event listeners
// recalculate scroll amount on resize
window.addEventListener('resize', setClientScrollAmountByCardWidth);

// on page load
window.addEventListener('load', () => {
    clientSlidesClone();
    setClientScrollAmountByCardWidth();
    // scroll to actual first item (after the last clone)
    clientSlider.scrollLeft = clientSlider.children[1].offsetLeft;
    highlightCenterSlide();
    startClientSlideShow();
});

// pause auto scroll on hover
clientSlider.addEventListener('mouseenter', stopClientSlideShow);
clientSlider.addEventListener('mouseleave', startClientSlideShow);
clientSlider.addEventListener('scroll', () => {
    requestAnimationFrame(highlightCenterSlide);
});


const opacityInLowerDevice = () => {
    const cardBoxes = document.querySelectorAll('.client-main-box');
    if (window.innerWidth <= 322) {
        cardBoxes.forEach(cardBox => cardBox.style.opacity = `1`);
    }
}

window.addEventListener('load', opacityInLowerDevice);
window.addEventListener('resize', opacityInLowerDevice);
// for client section



// for scroll to top
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 400) {
        scrollToTopButton.style.display = `block`;
    } else {
        scrollToTopButton.style.display = `none`;
    }

    scrollToTopButton.addEventListener('click', () => {
        scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// for scroll to top