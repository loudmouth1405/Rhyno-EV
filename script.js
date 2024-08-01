const carouselInner = document.querySelector('.carousel-inner');
const carouselDots = document.querySelector('.carousel-dots');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100; 
    carouselInner.style.transform = `translateX(${offset}%)`;


    const dots = document.querySelectorAll('.carousel-dots button');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}


items.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
    carouselDots.appendChild(dot);
});


function fadeTransition() {
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('fade-in');
            item.classList.remove('fade-out');
        } else {
            item.classList.add('fade-out');
            item.classList.remove('fade-in');
        }
    });
}

function autoRotate() {
    fadeTransition();

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
        fadeTransition();
    }, 1000); 
}


setInterval(autoRotate, 5000); 


updateCarousel();
fadeTransition();


const words = ['Elegance', 'Minimalism', 'Comfort'];
const dynamicWordElement = document.querySelector('.dynamic-word');
let currentWordIndex = 0;

function changeDynamicWord() {
    const nextWordIndex = (currentWordIndex + 1) % words.length;

    dynamicWordElement.classList.add('fade-out');

    setTimeout(() => {
        dynamicWordElement.textContent = words[nextWordIndex];
        dynamicWordElement.classList.remove('fade-out');
        dynamicWordElement.classList.add('fade-in');

        setTimeout(() => {
            dynamicWordElement.classList.remove('fade-in');
        }, 500); 
    }, 500); 

    currentWordIndex = nextWordIndex;
}

setInterval(changeDynamicWord, 3000);


dynamicWordElement.textContent = words[currentWordIndex];


document.addEventListener("DOMContentLoaded", () => {
    const aboutUsLink = document.querySelector('a[href="#about-us"]');
    const contactUsLink = document.querySelector('a[href="#contact-us"]');

    if (aboutUsLink) {
        aboutUsLink.addEventListener("click", () => {
            document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
        });
    }

    if (contactUsLink) {
        contactUsLink.addEventListener("click", () => {
            document.getElementById("contact-us").scrollIntoView({ behavior: "smooth" });
        });
    }
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

