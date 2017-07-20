var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      if(i==0)
      {
        slides[0].style.display = "none";
        slides[1].style.display = "none";
        slides[2].style.display = "none";
      }
      if(i==3){
        slides[3].style.display = "none";
        slides[4].style.display = "none";
        slides[5].style.display = "none";
      }

  }
  slides[slideIndex-1].style.display = "block";
}
