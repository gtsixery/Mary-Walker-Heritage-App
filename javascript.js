let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
showSlides();
//const timeout = setTimeout(showSlides, 7000); // Change image every 7 seconds
let timer;


function showSlides() {
  let i;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  slideTimer();

}

function slideTimer(){
  setTimeout(showSlides, 7000);
}

function getSlide(slideIndex){
  let k;

  for (k = 0; k < slides.length; k++) {
    slides[k].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (k = 0; k < dots.length; k++) {
    dots[k].className = dots[k].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}


function changeSlide(slideIndex) {
  getSlide(slideIndex);
  clearTimeout(timer);


}

