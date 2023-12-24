function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}

function fixedMenu() {
    if ($('.header').length) {
        var windowScrollTop = $(window).scrollTop();
        var heightHeader = 30;

        if ($(window).width() <= 991) heightHeader = -1;

        if (windowScrollTop > heightHeader) $('body').addClass('fixedMenu');
        else {
            if ($('body').hasClass("fixedMenu")) $('body').removeClass('fixedMenu');
        }
    }
}

/* =================== || INITIAL || =================== */
$(window).on('load', function () {
    fixedMenu();
});

$(window).on('scroll', function () {
    fixedMenu();
});