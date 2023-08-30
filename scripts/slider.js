const tabsBox = document.getElementById("slider__tabs-box");
let isDragging = false;

const drag = (e) => {
    if(!isDragging) return;
    tabsBox.scrollLeft -= e.movementX;
    e.preventDefault();
    console.log('running');
}

const dragStop = () => {
    isDragging = false;
    console.log("stopped");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", drag);
tabsBox.addEventListener("mouseup", dragStop);