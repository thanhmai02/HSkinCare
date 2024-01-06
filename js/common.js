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

/* ===================== Handle Update Cart ===================== */
; (function () {
    const $headerCartList = $(".wrapHeaderCart ul");
    const $headerCartWrap = $(".wrap-cart-header");

    let productStorage = {};
    let titleKey = '';
    let key = 0;

    let isShow = false;

    const _ProductCartHtml = (data) => {
        const { title, img, price, subPrice, qtt } = data;

        return `<li data-key='${key}'>
            <div class="wrapImg">
                <div class="wrapImgResize imgSquare"> <img class="object-contain"
                        src=${img} alt=${title}>
                </div>
            </div>
            <div class="wrapText">
                <h3 class="titleMain">${title}</h3>
                <div class="wrapPriceQuantity">
                    <div class="wrapPrice">
                        <div class="mainPrice">${price}</div>
                        <div class="subPrice"> <b>${subPrice}</b></div>
                    </div><span class="textQuantity">x${qtt}</span>
                </div>
            </div>
        </li>`
    }

    function HandleBtnCartClick() {
        const $productItem = $(this).closest('.wrapProductItem');

        const val = $(".wrap-cart-header .text-qtt").text();
        $(".wrap-cart-header .text-qtt").text(Number(val) + 1);

        if (!$productItem.length) return;

        const imgData = $productItem.find("img")?.attr("src");
        const titleData = $productItem.find(".title-main")?.text();
        const priceData = $productItem.find(".textPrice")?.text();
        const subPriceData = $productItem.find(".textSubPrice")?.text();
        let titleKey = $productItem.data().key;
        let itemQtt = productStorage[titleKey];

        if(!titleKey) {
            key += 1;
            $productItem.data("key", key);
        }


        if (itemQtt) itemQtt = itemQtt + 1;
        else {
            productStorage[titleKey] = 1;
            itemQtt = 1;
        }

        
        if (itemQtt > 1) {
            $(`[data-key=${titleKey}]`).find(".textQuantity").text(`x${itemQtt}`);
        } else $headerCartList.append(_ProductCartHtml({
            img: imgData,
            title: titleData,
            price: priceData,
            subPrice: subPriceData,
            qtt: itemQtt
        }));

        

        if (!isShow) $headerCartWrap.addClass("isShow");
    }

    $(".btn-cart").each(function (i, e) {
        $(this).on("click", HandleBtnCartClick);
    });
})();


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