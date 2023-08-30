const tabsBox = document.getElementById("slider__tabs-box");
const sliderLink = document.querySelectorAll(".slider__tab");
let isDragging = false;
let isClicking = false;

const drag = (e) => {
    if(isDragging && !isClicking) {
        tabsBox.scrollLeft -= e.movementX;
        e.preventDefault();

        for(let i = 0; i < sliderLink.length; i++) {
            sliderLink[i].classList.add("slider__link_non-clickable");
        }
    }
    
    else return
}

const dragStop = () => {
    isDragging = false;
    for(let i = 0; i < sliderLink.length; i++) {
        sliderLink[i].classList.remove("slider__link_non-clickable");
    }

}

tabsBox.addEventListener("mousedown", () => isDragging = true, isClicking = true);
tabsBox.addEventListener("mousemove", drag, isClicking = false);
tabsBox.addEventListener("mouseup", dragStop);