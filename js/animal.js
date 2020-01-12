// menu mobile
function openNav() {
    document.getElementById("menu-mobile").style.width = "80%";
  }
  
function closeNav() {
document.getElementById("menu-mobile").style.width = "0%";
}

// slideShow
const dots = document.getElementsByClassName("demo");
var range = 100 / dots.length; 
var slideIndex = 1;
var width = 20; 

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n); 
  progressBar();     
}

function currentSlide(n) {
  showSlides(slideIndex = n);  
  progressBar();
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  // const captionText = document.getElementById("caption");
  const currentNum = document.querySelectorAll(".num p")[0];
  const totalNum = document.querySelectorAll(".num p")[1];
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}  

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";      
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  currentNum.innerHTML = "0" + slideIndex;
  totalNum.innerHTML = "0" + slides.length;
  // captionText.innerHTML = dots[slideIndex-1].alt;
}

function progressBar(){
  const slider = document.getElementById("slider");          

  // if(n == 1){
  //   width += 20;    
  // }
  // else if(n == -1){
  //   width -= 20
  // }
  // else{
  //   width * n;
  // } 

  if (width > 100) {
    width = 20;      
  }
  else if(width < 20){
    width = 100;      
  }
 
  slider.style.width =  width * slideIndex  + "%";
}