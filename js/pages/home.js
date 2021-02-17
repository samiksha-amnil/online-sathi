$(document).ready(function() {

    $('.main-slide').slick({
        arrows: false,
        autoplay: true,
        fade: true,
        speed: 2000,
        dots: true,
        lazyLoad: 'progressive'
    });
    $('.services-list-wrap').slick({
        infinite: false,
        speed: 300,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1356,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
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
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.rates-wrap').slick({
        infinite: false,
        speed: 300,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1356,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.tab-slide').slick({
        infinite: true,
        speed: 300,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1356,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".msg-box").hide();
    $(".overlay").hide();
    $(".msg-open").click(function () {
        $(".msg-box").fadeToggle(500);
        $(".overlay").fadeToggle(400);
    });

    $(".notice-msg").hide();
    $(".notice").click(function () {
        $(".notice-msg").toggle(300);
        $(".notice").toggleClass("left");
    });

    $(".slick-dots").addClass("container");
});