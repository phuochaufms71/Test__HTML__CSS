var menu = document.querySelector('.header__menu');
var navMobile = document.querySelector('.navbar__list-mobile');
var close = document.querySelector('.header__close');
var overlay = document.querySelector('.overlay');

menu.onclick = function() {
    overlay.classList.toggle('open');
    navMobile.classList.toggle('click')
}

overlay.onclick = function() {
    overlay.classList.toggle('open');
    navMobile.classList.toggle('click')
}

close.onclick = function() {
    overlay.classList.toggle('open');
    navMobile.classList.toggle('click')
}

