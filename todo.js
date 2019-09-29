"use strict";

const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", closeStartScreen);

function closeStartScreen() {
    const startScreen = document.querySelector(".startScreen");
    startScreen.classList.add("shrinkStartScreen");
    startScreen.addEventListener("animationend", ()=> {
        startScreen.classList.add("hide");
    })

    document.querySelector(".gradientBottom").classList.remove("hide");
}