const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".previous-btn");

let counter = 0;

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

prevBtn.addEventListener("click", function () {
  counter--;
  moveSlide();
});

nextBtn.addEventListener("click", function () {
  counter++;
  moveSlide();
});

function moveSlide() {
  if (counter > slides.length - 1) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
