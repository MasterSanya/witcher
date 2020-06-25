var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    speed: 400,
    // spaceBetween: 100,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
        }
    }
});

var menuButton = document.querySelector(".menu-btn");
var menu = document.querySelector(".header");

menuButton.addEventListener("click", function () {
    // console.log("click");
    menuButton.classList.toggle("menu-btn-active");
    menu.classList.toggle("header-active");
})