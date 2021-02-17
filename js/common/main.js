$(document).ready(function () {
//    search form js
    $("#search-toggle").click(function () {
        $("form").toggleClass("show-search");
    });
});

// Nav Hover Animation
function highlightMenu(element) {
    if ($(window).width() >= 1366) {
        var activeMenu = $('.nav-links li.active a');
        if (activeMenu.length !== 0) {
            var actWidth = activeMenu.width();
            var leftPos = activeMenu.offset().left;
            $(".active-nav").css({
                "width": actWidth,
                "left": leftPos
            });
        } else {
            $(".active-nav").css({
                "left": '-50%',
            });
        }
    } else {
//        console.log('here');
        var activeMenu = $('.nav-links li.active a');
        if (activeMenu.length !== 0) {
            var actWidth = activeMenu.width();
            var leftPos = activeMenu.offset().left;
            $(".active-nav").css({
                "width": actWidth,
                "left": leftPos
            });
        } else {
            $(".active-nav").css({
                "left": '-50%',
            });
        }
    }
}
function highlightHoverMenu(element) {
    if ($(window).width() >= 1366) {
        var hoverWidth = element.width();
        var hoverPos = element.offset().left;
        $(".active-nav").css({
            "width": hoverWidth,
            "left": hoverPos
        });
    } else {
        var hoverWidth = element.width();
        var hoverPos = element.offset().left;
        $(".active-nav").css({
            "width": hoverWidth,
            "left": hoverPos
        });
    }
}

$(window).load(function () {
    highlightMenu();
    $(".nav-links li a").mouseenter(function () {
        highlightHoverMenu($(this));
    });
    $(".nav-links li a").mouseleave(function () {
        highlightMenu($(".nav-links .active"));
    });
});

$(window).resize(function () {
    highlightMenu();
});