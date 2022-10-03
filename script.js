// Deklarerar en variabel som vet vart informationen från HTML dokumentet skall hämtas. Namnge den med # eftersom det är id. 

function validateForm() {
    var name = document.forms ["company-form"]["message"].value

    if (name === "") {
        alert ("Please enter a message. ");
        document.getElementById("message").focus();
        return false;
    }
}
//Funktion som ändrar temat på startsidan när man trycker på "toggle/temaknappen"
const body =document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}
// Funktioner till bildspelet.
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//Funktion till hamburgarmenyn. 
function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
