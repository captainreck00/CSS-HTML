//carousel-start

const track= document.querySelector(".carousel-track")
const slides= Array.from(track.children)
const next_btn= document.querySelector(".next"); 
const prev_btn= document.querySelector(".prev"); 

const dots_nav= document.querySelector(".carousel-nav")
const dots= Array.from(dots_nav.children)

const slide_width= slides[0].getBoundingClientRect().width;

// arranging the slides
const setSlidePos=(slide,index) => {
    slide.style.left= slide_width * index +"px";
}
slides.forEach(setSlidePos)


const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform='translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('currentSlide')
    targetSlide.classList.add('currentSlide')
}

const updateDots=(currentDot,targetDot)=>{
    currentDot.classList.remove('currentSlide')
    targetDot.classList.add('currentSlide')
}

const hideShowArrow= (slides,prev_btn,next_btn,targetIndex) =>{
    if (targetIndex === 0){
        prev_btn.classList.add('is-hidden')
        next_btn.classList.remove('is-hidden')
    }
    else if(targetIndex === slides.length-1){
        prev_btn.classList.remove('is-hidden')
        next_btn.classList.add('is-hidden')
    }
    else{
        prev_btn.classList.remove('is-hidden')
        next_btn.classList.remove('is-hidden')
    }
}


next_btn.addEventListener("click", e => {
    const currentSlide= track.querySelector(".currentSlide");
    const nextSlide= currentSlide.nextElementSibling;

    const currentDot= dots_nav.querySelector('.currentSlide')
    nextDot=currentDot.nextElementSibling;

    const nextIndex=slides.findIndex(slide => slide===nextSlide)

    moveToSlide(track,currentSlide,nextSlide);
    updateDots(currentDot,nextDot); 
    hideShowArrow(slides,prev_btn,next_btn,nextIndex);
})


prev_btn.addEventListener("click", e => {
    const currentSlide= track.querySelector(".currentSlide");
    const prevSlide= currentSlide.previousElementSibling;

    const currentDot= dots_nav.querySelector('.currentSlide')
    prevDot=currentDot.previousElementSibling;

    const prevIndex=slides.findIndex(slide => slide===prevSlide)
    

    moveToSlide(track,currentSlide,prevSlide)
    updateDots(currentDot,prevDot);
    hideShowArrow(slides,prev_btn,next_btn,prevIndex); 
})


// dots nav
dots_nav.addEventListener('click',e =>{
    const targetDot=e.target.closest('button');
    if(!targetDot) return;

    const currentSlide=track.querySelector('.currentSlide');
    const currentDot=dots_nav.querySelector('.currentSlide');
    const targetIndex= dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track,currentSlide,targetSlide)
    updateDots(currentDot,targetDot)
    hideShowArrow(slides,prev_btn,next_btn,targetIndex)
})
//carousel-end

//Chat gpt's----navlinks scrolling

const scrollLinks = document.querySelectorAll(".nav-links");

scrollLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const targetId = this.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const targetOffset = targetSection.getBoundingClientRect().top;
            const startPosition = window.pageYOffset;
            const duration = 1000; // Adjust the duration (in milliseconds) as needed
            let startTime;

            function scrollAnimation(currentTime) {
                if (!startTime) startTime = currentTime;
                const progress = currentTime - startTime;
                const scrollY = easeInOutQuad(progress, startPosition, targetOffset, duration);
                window.scrollTo(0, scrollY);

                if (progress < duration) {
                    requestAnimationFrame(scrollAnimation);
                }
            }

            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return (c / 2) * t * t + b;
                t--;
                return (-c / 2) * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(scrollAnimation);
        }
    });
});

//navlinks-end