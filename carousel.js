const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children)
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav")
const dots = Array.from(dotsNav.children)

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;


// arrange the slides next to another
// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";
const setSlidePosition = (slide,index)=>{
    slide.style.left = slideWidth * index + "px"

}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+targetSlide.style.left+')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add("current-slide");
    

}

//when I click left move slide to the left
prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;


    moveToSlide(track, currentSlide, prevSlide)
})


// when I click right mo slide to the right
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide")
    const nextSlide = currentSlide.nextElementSibling;
  
    moveToSlide(track,currentSlide,nextSlide)

})

//when I click the nav indicators, move slide to that slide ;


