let slideIndex = 1;
let slideInterval;

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  slideInterval = setInterval(() => plusSlides(1), 2000); // Auto-play every 2 seconds
});

// Next/previous controls
function plusSlides(n) {
  clearInterval(slideInterval); // Stop auto-play on manual navigation
  showSlides(slideIndex += n);
  slideInterval = setInterval(() => plusSlides(1), 2000); // Restart auto-play
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
  slideInterval = setInterval(() => plusSlides(1), 2000);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides
  for (let slide of slides) {
    slide.style.display = "none";
  }

  // Remove active class from all dots
  for (let dot of dots) {
    dot.classList.remove("bg-gray-800");
    dot.classList.add("bg-gray-400");
  }

  // Show the current slide and highlight the correct dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.remove("bg-gray-400");
  dots[slideIndex - 1].classList.add("bg-gray-800");
}
