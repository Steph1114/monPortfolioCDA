let i = 0;
let j = 0;
let txtUn = "Bienvenue sur le portfolio de";
let textNom = "Stephan Celestin R.";
let speed = 150;
let slideIndex = 0;

//Get the hand pointer
let pointerMain = document.querySelector(".pointer-main>img");

function typeWriterBienvenue() {
    if (i < txtUn.length) {
        document.querySelector(".welcome>h2").innerHTML += txtUn.charAt(i);
        i++;
        setTimeout(typeWriterBienvenue, 100);
    }
}


function typeWriterNom() {
    if (j < textNom.length) {
        document.querySelector(".mon-nom").innerHTML += textNom.charAt(j);
        j++;
        setTimeout(typeWriterNom, speed);
    }
}

//When the page is being loaded
document.addEventListener('DOMContentLoaded', function() {
    typeWriterBienvenue();
    typeWriterNom();
});


// When the user scrolls down 1000px from the top of the document, show the hand pointer
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        pointerMain.style.display = "block";
    } else {
        pointerMain.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    typeWriterBienvenue();
    typeWriterNom();
}

//Slideshow

let slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

    let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

    let index = 0,
        time = 5000; //Image slide every 5secondes
    slides[index].classList.add('active');

    setInterval(() => {
        slides[index].classList.remove('active');

        index++;
        if (index === slides.length) index = 0;

        slides[index].classList.add('active');

    }, time);
}


// Tooltip
myButtons = document.querySelectorAll("#mesBoutons");
tippy(myButtons, {
    content: 'Pour aller plus loin',
});