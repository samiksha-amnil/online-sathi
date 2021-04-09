$(document).ready(function () {
    $("nav ul li").children("ul").parent().addClass("caret")
    $('.product').slick({
        infinite: false,
        autoplay: false,
        arrows: true,
        speed: 300,
        dots: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
 
   $(".nav-link-icon").click(function(){
    $(".left-menu").addClass("show-menu")
    $("body").addClass("no-scroll")
   });
   $(".close-btn").click(function(){
    $(".left-menu").removeClass("show-menu")
    $("body").removeClass("no-scroll")
   });
    $('.parent-menu li:has(.sub-menu)').addClass('icon');
    // $('.parent-menu li .sub-menu:has(.sub-menu)').addClass('border-right');
});

