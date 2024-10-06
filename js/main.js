// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// function showSlide(slideIndex) {
//     if (slideIndex >= totalSlides) {
//         currentSlide = 0; // Reiniciar al primer slide
//     } else if (slideIndex < 0) {
//         currentSlide = totalSlides - 1; // Ir al último slide
//     } else {
//         currentSlide = slideIndex;
//     }

//     // Desplazar el contenedor de slides
//     document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
// }

// function changeSlide(direction) {
//     showSlide(currentSlide + direction);
// }

// // Mostrar el primer slide al cargar la página
// showSlide(currentSlide);

// // Deslizar automáticamente cada 5 segundos
// setInterval(() => {
//     changeSlide(1); // Pasar al siguiente slide automáticamente
// }, 5000);



// Carrusel de eventos 
let currentIndex = 0;
const Slides = document.querySelectorAll('.Slide');
const dots = document.querySelectorAll('.dot');
const totalSliders = slides.length;

function showSlides(index){
    if (index < 0){
        currentIndex = totalSliders -1;
    }else if(index >= totalSliders){
        currentIndex = 0;
    }else{
        currentIndex = index;
    }

    Slides.forEach((Slides, i) =>{
        const iscurrent = i === currentIndex;
        const scaleFactor = iscurrent ? 1:0.8;
        const transformValue = iscurrent ? 'scale(1)' : 'scale(0.8)';
        const widthValue = iscurrent ? '100%':'80%';

        Slides.style.transform = transformValue;
        Slides.style.width = widthValue;
        dots[1].classList.toggle('active-dot', iscurrent)
    });

    const transalateValue = -currentIndex * 100 + '%';
    document.querySelector('.Slider').style.transform = 'translateX(' +transalateValue+ ')'
}

function nextSlide(){
    showSlide(currentIndex +1);
}

function prevSlide(){
    showSlide(currentIndex -1);
}

function currentSlide(index){
    showSlide(index);
}

setInterval(nextSlide, 10000);