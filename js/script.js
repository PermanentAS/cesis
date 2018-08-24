$(document).ready(function(){

    new WOW().init(); //Init wow.js

    // Menu class toggle
    $(".nav__burger").click(function(){
        $(".header__nav").css("display", "block");
    });

    $(".header__nav-close").click(function(){
        $(".header__nav").css("display", "none");
    });
});