let searchForm = document.querySelector('.search-form');
let searchButton = document.querySelector('#search-btn');
let shoppingCart = document.querySelector('.shopping-cart');
let cartButton = document.querySelector('#cart-btn');
let loginButton = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form');
let menuButton = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


searchButton.onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}

cartButton.onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}

loginButton.onclick = () => 
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');

}

menuButton.onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}
window.onscroll = () =>
{
    removeAllClasses();
}

function removeAllClasses ()
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 6000
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});