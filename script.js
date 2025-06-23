function toggleMode() {
  const body = document.body;
  if (body.style.background === "black") {
    body.style.background = "#f0f8ff";
    body.style.color = "#222";
  } else {
    body.style.background = "black";
    body.style.color = "white";
  }
}

// Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Auto-slide every 3 sec

// On load
window.onload = () => {
  showSlide(currentSlide);
};
