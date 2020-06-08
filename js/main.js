$(function(){

    $(".header__nav-gamburger").click(function() {
        $(".header__nav-items").toggleClass("active__menu"),
        $("body").toggleClass("active__body");         
        $(this).toggleClass("active");
    });

    $(".first").click(function() {
        $(".first").toggleClass("active");       
        // $(this).toggleClass("active");
    });

    $(".two").click(function() {
        $(".two").toggleClass("active");       
        // $(this).toggleClass("active");
    });

    $(".three").click(function() {
        $(".three").toggleClass("active");       
        // $(this).toggleClass("active");
    });

    $(".four").click(function() {
        $(".four").toggleClass("active");       
        // $(this).toggleClass("active");
    });

    $(".five").click(function() {
        $(".five").toggleClass("active");       
        // $(this).toggleClass("active");
    });

    $(".six").click(function() {
        $(".six").toggleClass("active");       
        // $(this).toggleClass("active");
    });

    $(".seven").click(function() {
        $(".seven").toggleClass("active");       
        // $(this).toggleClass("active");
    });

    $(".eight").click(function() {
        $(".eight").toggleClass("active");       
        // $(this).toggleClass("active");
    });


    $(".nine").click(function() {
        $(".nine").toggleClass("active");       
        // $(this).toggleClass("active");
    });

    
    $(".form__button").click(function() {
        $(".form__thank").toggleClass("active__text"),        
        $(this).toggleClass("active__text");
    });
    
    
});