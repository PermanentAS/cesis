$(document).ready(function(){

    new WOW().init(); //Init wow.js

    // Menu class toggle
    $(".nav__burger").click(function(){
        $(".header__nav").css("display", "block");
    });

    $(".header__nav-close").click(function(){
        $(".header__nav").css("display", "none");
    });


    // Lazy Scroll
    $(".header__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".header__button").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



});