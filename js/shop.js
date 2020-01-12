// const dots = document.getElementsByClassName("demo");
let slideIndex = 1;
let range = 0;

const slideshow = document.getElementsByClassName("slideshow"); 

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);      
}

function showSlides(n) {
  let i;  
  const slide = document.getElementsByClassName("mySlides");
  // const captionText = document.getElementById("caption");
  const currentNum = document.querySelectorAll(".num p")[0];
  const totalNum = document.querySelectorAll(".num p")[1];    

  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length} 
    
  if(n==1 || n>slide.length){
    range = 0;             
  }  
  else if(n<1){
    range = -42 * (slide.length-1);
  }
  else{
      range = (slideIndex-1) * -42;            
  }

  for (i = 0; i < slide.length; i++) {   
    slide[i].className = slide[i].className.replace(" col-12", " col-7");      
  } 
 
  slideshow[0].style.top = range + "%";   
  slide[slideIndex-1].className = slide[slideIndex-1].className.replace(" col-7", " col-12");
}