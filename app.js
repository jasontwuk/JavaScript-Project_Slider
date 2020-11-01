// set const
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let counter = 0;
let slidesLength = slides.length;

// dynamic add .slide style.left
slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`
});

// hide preBtn initially (for Version 2)
// prevBtn.style.display = "none";

function transfromSlide(){
    // Version 1: infinite loop silder
    if(counter === slidesLength){
        counter = 0;
    }
    if(counter < 0){
        counter = slidesLength - 1;
    }
    // console.log(counter);

    // Version 2: hide prevBtn at the first slide, hide nextBtn at the last slide
    // if(counter < slidesLength - 1){
    //     nextBtn.style.display = "block";
    // } else {
    //     nextBtn.style.display = "none";
    // }
    // if(counter > 0){
    //     prevBtn.style.display = "block";
    // } else {
    //     prevBtn.style.display = "none";
    // }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

// set click event
nextBtn.addEventListener("click", function(){
    counter++;
    transfromSlide();
});

prevBtn.addEventListener("click", function(){
    counter--;
    transfromSlide(counter);
});