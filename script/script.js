
let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav");
let nav__list = document.querySelector(".nav__list");
let nav__link = document.querySelectorAll(".nav__link");


burger.addEventListener("click", function () {
    burger.classList.toggle("burger-active");
    nav.classList.toggle("nav-burger");
    nav__list.classList.toggle("nav-burger");
    document.body.classList.toggle("body-burger");
})

nav__link.forEach(el => el.addEventListener("click", function () {
    burger.classList.toggle("burger-active");
    nav.classList.toggle("nav-burger");
    nav__list.classList.toggle("nav-burger");
    document.body.classList.toggle("body-burger");
})
)

let scrollBtn = document.getElementById("scrollBtn");
window.onscroll = () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show-btn")
    } else  if (window.scrollY < 300){
        scrollBtn.classList.remove("show-btn")
    }
}
scrollBtn.addEventListener("click", function () {
    window.scrollTo(0, 0)
})