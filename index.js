
//the code responsible for making another image (image with the detailed advice) appear on a click on photo.
//Five visible photos and five corresponding hidden photos, which appear on a click.
document.addEventListener('DOMContentLoaded', function() {
  //giving the event as "click", so when the mouse is clicked on the first image with advice called "FirstAdvice", another image with more detailed advice called "FirstAdviceText" appears.
  document.getElementById('firstAdvice').addEventListener('click', function() {
      var first_advice_text = document.getElementById('firstAdviceText');
  //the conditional to make the second image hide and appear by the click of the mouse. So, if the image "FirstAdviceText" is hidden, with the click of the mouse on the "FirstAdvice" image, it appears and vice versa.
      if (first_advice_text.style.display === 'none' || first_advice_text.style.display === '') {
          first_advice_text.style.display = 'block'; // Show the image "firstAdviceText"
          first_advice_text.style.width = '70%';
          first_advice_text.style.margin = 'auto';
      } else {
          first_advice_text.style.display = 'none'; // Hide the image "firstAdviceText"
      }
  });
  //the same event and conditionals are done with other four shown and four hidden images.
  document.getElementById('secondAdvice').addEventListener('click', function() {
      var second_advice_text = document.getElementById('secondAdviceText');
      if (second_advice_text.style.display === 'none' || second_advice_text.style.display === '') {
          second_advice_text.style.display = 'block';
          second_advice_text.style.width = '70%';
          second_advice_text.style.margin = 'auto';
      } else {
          second_advice_text.style.display = 'none';
      }
  });
  document.getElementById('thirdAdvice').addEventListener('click', function() {
      var third_advice_text = document.getElementById('thirdAdviceText');
      if (third_advice_text.style.display === 'none' || third_advice_text.style.display === '') {
          third_advice_text.style.display = 'block';
          third_advice_text.style.width = '70%';
          third_advice_text.style.margin = 'auto';
      } else {
          third_advice_text.style.display = 'none';
      }
  });
  document.getElementById('fourthAdvice').addEventListener('click', function() {
      var fourth_advice_text = document.getElementById('fourthAdviceText');
      if (fourth_advice_text.style.display === 'none' || fourth_advice_text.style.display === '') {
          fourth_advice_text.style.display = 'block';
          fourth_advice_text.style.width = '70%';
          fourth_advice_text.style.margin = 'auto';
      } else {
          fourth_advice_text.style.display = 'none';
      }
  });
  document.getElementById('fifthAdvice').addEventListener('click', function() {
      var fifth_advice_text = document.getElementById('fifthAdviceText');
      if (fifth_advice_text.style.display === 'none' || fifth_advice_text.style.display === '') {
          fifth_advice_text.style.display = 'block';
          fifth_advice_text.style.width = '70%';
          fifth_advice_text.style.margin = 'auto';
      } else {
          fifth_advice_text.style.display = 'none';
      }
  });
});


//making a carousel from photos.
//An example of the code from "How TO - Slideshow" by W3 Schools. Source: https://www.w3schools.com/howto/howto_js_slideshow.asp is used to create this code.

//displaying the first slide when the page is loaded. However, this doesn't work properly because the dots need to be clicked for the first slide appear.
let slideIndex = 1;
showSlides(slideIndex);

// the navigation of the slides by addition of parameter "n" which can be either -1 or +1. Hence, it navigates to the next and previous slides.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Allows to jump directly to the necessary slide by a parameter "n".
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//the function to display the slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
// Checking if n is greater than the number of slides. If n is greater, then the first slide is shown.
  if (n > slides.length) {slideIndex = 1}
// Checking if n is less than 1. If n is less, then the last slide is shown.
  if (n < 1) {slideIndex = slides.length}
// hiding all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
//removing active class from all the dots.
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
//showing the current slide
  slides[slideIndex-1].style.display = "block";
//giving active class to the corresponding dot to show that it represents the current slide
  dots[slideIndex-1].className += " active";
}
