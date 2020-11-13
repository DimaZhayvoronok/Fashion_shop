let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.header-nav-links')

menuToggle.addEventListener('click',function(event){
    event.preventDefault();
    menu.classList.toggle('visible')
})