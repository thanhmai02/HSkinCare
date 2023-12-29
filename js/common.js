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

const showContent = () => {
    $('body').addClass('showBody');
}

/* =================== || HANDLE MOBILE MENU || =================== */
$('.wrapBtnCtrMenuHeader .btnCtrMenu').on('click', function (e) {
    $('body').toggleClass('showMenu wrapHidden');
    e.preventDefault();

    if ($('.showContact').length) {
        $('body').removeClass('showContact wrapHidden');
    }
});

$('.wrap-bg-menu-mobile').on('click', function (e) {
    $('body').removeClass('showMenu wrapHidden');
    e.preventDefault();
});

$('.btnDropdownMenuSub').on('click', function (e) {
    $(this).next('.wrapMenuHeader').slideToggle();
    $(this).parent('.menuSub').toggleClass('activeMenu');

    e.preventDefault();
});


/* =================== || LANGUAGE || =================== */
$('.language-btn').on('click', function () {
    $('body').removeClass('showMenu');
    $('body').toggleClass('showLanguage');
    $('.dropdown-languge').fadeToggle();

    if ($('.showMenu').length) {
        $('body').removeClass('wrapHidden showMenu');
    }
});

$('body, html').on('click', function (e) {
    var target = $(e.target);
    if (
        e.type == "focusin" ||
        target.closest(this.element).length ||
        target.closest(this.container).length ||
        target.closest('.header-language').length
    ) return;

    if ($('body').hasClass('showLanguage')) {
        $('body').removeClass('showLanguage');
        $('.dropdown-languge').fadeOut();
    }
});

/* =================== || Button Scroll Top || =================== */
function showBtnScrollTop() {
    if ($('.wrapBtnScrollTop').length) {
        var windowScrollTop = $(window).scrollTop();

        $("body").toggleClass("showScrollTop", windowScrollTop > 1)
    }
}

$(".wrapBtnScrollTop .linkItem").on('click', function (e) {
    $('body,html').animate({
        scrollTop: 0
    }, 100);

    e.preventDefault();
});

/* =================== || INITIAL || =================== */
$(window).on('load', function () {
    fixedMenu();
    showBtnScrollTop();

    showContent();
});

$(window).on('scroll', function () {
    fixedMenu();
    showBtnScrollTop();
});