let compteur = 0;
let timer, elements, slides, slideWidth;
window.onload = () => {
    const diapo = document.querySelector(".diapo");
    elements = document.querySelector(".elements");
    slides = Array.from(elements.children);

    slideWidth = diapo.getBoundingClientRect().width; //on calcule la largeur du diapo

    let next = document.querySelector("#nav-droite");
    let prev = document.querySelector("#nav-gauche");

    next.addEventListener("click", slidesNext);
    prev.addEventListener("click", slidesPrev);

    timer = setInterval(slidesNext, 5000);

    diapo.addEventListener("mouseover", stopTimer);
    diapo.addEventListener("mouseout", startTimer);
    
    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width; //on calcule la largeur du diapo
        slidesNext();
    })
}

function slidesNext() {
    compteur++;
    if (compteur == slides.length) {
        compteur = 0;
    }
    let decalage = -slideWidth * compteur;
    elements.style.transform = `translateX(${decalage}px)`;
}

function slidesPrev() {
    compteur--;
    if (compteur < 0) {
        compteur = slides.length - 1;
    }
    let decalage = -slideWidth * compteur;
    elements.style.transform = `translateX(${decalage}px)`;
}

function stopTimer() {
    clearInterval(timer);
}

function startTimer() {
    timer = setInterval(slidesNext, 5000);
}



window.addEventListener('load', function() {
    // Code pour obtenir la taille de la page
    var largeurPage = document.documentElement.clientWidth;
    var hauteurPage = document.documentElement.clientHeight;

    console.log("Largeur de la page : " + largeurPage + " pixels");
    console.log("Hauteur de la page : " + hauteurPage + " pixels");

  });
  