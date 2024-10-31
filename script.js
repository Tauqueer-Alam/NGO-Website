/* Slider Script*/
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const slideContainer = document.querySelector('.slides');
const totalSlides = slides.length;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

slideContainer.appendChild(firstClone);
slideContainer.insertBefore(lastClone, slides[0]);

const updatedSlides = document.querySelectorAll('.slides img');

function showSlide(index) {
    slideIndex += index;

    if (slideIndex >= totalSlides) {
        slideContainer.style.transition = 'transform 0.5s ease';
        slideContainer.style.transform = `translateX(${-slideIndex * updatedSlides[0].clientWidth}px)`;

        setTimeout(() => {

            slideContainer.style.transition = 'none';
            slideIndex = 0;
            slideContainer.style.transform = `translateX(${-slideIndex * updatedSlides[0].clientWidth}px)`;
        }, 500);
    } else if (slideIndex < 0) {

        slideContainer.style.transition = 'transform 0.5s ease';
        slideContainer.style.transform = `translateX(${-slideIndex * updatedSlides[0].clientWidth}px)`;

        setTimeout(() => {

            slideContainer.style.transition = 'none';
            slideIndex = totalSlides - 1;
            slideContainer.style.transform = `translateX(${-slideIndex * updatedSlides[0].clientWidth}px)`;
        }, 500);
    } else {
        slideContainer.style.transition = 'transform 0.5s ease';
        slideContainer.style.transform = `translateX(${-slideIndex * updatedSlides[0].clientWidth}px)`;
    }
}

function changeSlide(n) {
    showSlide(n);
}

showSlide(0);

setInterval(() => {
    showSlide(1);
}, 3000);



/* Animated Swipe Msg and Image Script */

const swipeDiv = document.querySelector('.swipe');
const swipeMsg = document.querySelector('.swipe-msg');
const swipeImg = document.querySelector('.swipe-img');

function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }

window.addEventListener('scroll', () => {
  if (isElementInView(swipeDiv)) {
    swipeMsg.classList.add('animate');
    swipeImg.classList.add('animate');
  }
});


let x=document.querySelector(".bar")
let y=document.querySelector(".header")
let z=document.querySelector(".list")
x.addEventListener("click", function () {
    y.classList.toggle("active");
    z.classList.toggle("active");

})



