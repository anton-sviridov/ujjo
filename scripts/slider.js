const button = document.getElementById("testbtn");
let slider = document.getElementById("slider__items");

button.onclick = function () {
    slider.classList.add("move");
}