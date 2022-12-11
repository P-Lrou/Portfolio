"use strict"


let quisuisjeTitle = document.querySelector(".quisuisjeTitle")
let modal = document.querySelector(".modal")
let cross = document.querySelector('.cross')

quisuisjeTitle.addEventListener("click", () => {
    modal.style.display = "block"
    gsap.from(".modal", { x: 2100, duration: 0.5 });
})

cross.addEventListener("click", () => {
    gsap.to(".modal", { x: 2100, duration: 1 });
    setTimeout(() => {
        modal.style.display = "none"
        gsap.to(".modal", { x: 0, duration: 1 });
    }, 500);
})