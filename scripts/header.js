"use strict";

const header = document.getElementById("header");

var prevSscrollPositionY = 0;

document.addEventListener ("scroll", () => {
    var currentSscrollPositionY = window.scrollY;
    if (currentSscrollPositionY > 135) {
        header.classList.add("header__sticky");
    } else {
        header.classList.remove("header__sticky");
    }

    // 
    if (prevSscrollPositionY > currentSscrollPositionY) {
        header.classList.add("header__sticky_visible");
    }
    else {
        header.classList.remove("header__sticky_visible");
    }
    prevSscrollPositionY = window.scrollY;
});