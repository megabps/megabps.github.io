let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-container");
  console.log(slides)
    if ($(window).width() > 1199) {
        m = "carousel-tab";
    }
    else {
        m = "dot";
    }
  let dots = document.getElementsByClassName(m);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-0].style.display = "block";
  dots[slideIndex-1].className += " active";
}
