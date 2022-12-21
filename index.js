 burger = document.querySelector(".burger");
 navlist = document.querySelector(".nav-list");
 rightNav = document.querySelector(".rightNav");
 navbar = document.querySelector(".navbar");

burger.addEventListener('click', function(){
    navlist.classList.toggle('vis-resp');
    rightNav.classList.toggle('vis-resp');
    navbar.classList.toggle('h-nav-resp');
});