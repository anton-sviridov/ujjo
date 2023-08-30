"use strict";

const header = document.getElementById("header");

let prevSscrollPositionY = 0;

document.addEventListener ("scroll", () => {
    let currentSscrollPositionY = window.scrollY;
    if (currentSscrollPositionY > 138) {
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