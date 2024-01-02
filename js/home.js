$(window).on('load', function () {
  if ($(".wrapHeroSlide").length) {
    const slideItems = $(".wrapHeroSlide .swiper-slide");

    new Swiper(".wrapHeroSlide .swiper", {
      loop: slideItems.length > 1,
      effect: "fade",
      speed: 1e3,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });
  }
})

if ($(".wrapCollectionSlide").length) {
  const slideItems = $(".wrapCollectionSlide .swiper-slide");

  new Swiper('.wrapCollectionSlide .swiper', {
    loop: true,
    speed: 1e3,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: `.wrapCollections .swiperBtnNext`,
    //     prevEl: `.wrapCollections .swiperBtnPrev`,
    // },
    pagination: {
      clickable: true,
      el: `.wrapCollectionSlide .swiper-pagination`,
    },
    breakpoints: {
      1201: {
        spaceBetween: 30,
        slidesPerView: 4,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 15,
        slidesPerView: 3,
      },
      576: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
    },
  })
}


if ($(".wrapTesterminialSlise").length) {
  const slideItems = $(".wrapTesterminialSlise .swiper-slide");

  new Swiper('.wrapTesterminialSlise .swiper', {
    loop: true,
    speed: 1e3,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    //   pagination: {
    //     clickable: true,
    //     el: `.wrapTestimonial .swiper-pagination`,
    //   },
    breakpoints: {
      1201: {
        spaceBetween: 60,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      576: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
    },
  })
}


if ($(".wrapBlogSlide").length) {
  const slideItems = $(".wrapBlogSlide .swiper-slide");

  new Swiper('.wrapBlogSlide .swiper', {
    loop: true,
    speed: 1e3,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      clickable: true,
      el: `.wrapBlog .swiper-pagination`,
    },
    breakpoints: {
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      576: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
    },
  })
}

/* ================== || Show Products Slide || ================== */
if ($(".wrapProductSlide").length) {
  const slideItems = $(".wrapProductSlide .swiper-slide");

  new Swiper('.wrapProductSlide .swiper', {
    loop: slideItems.length > 1,
    speed: 1e3,
    grabCursor: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: `.wrapProductSlide .swiper-pagination`,
    },
  })
}

/* ================== || Show Promotions Slide || ================== */
if ($(".wrapPromotionSlide").length) {
  const slideItems = $(".wrapPromotionSlide .swiper-slide");

  new Swiper('.wrapPromotionSlide .swiper', {
    loop: true,
    speed: 1e3,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 15,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      clickable: true,
      el: `.wrapPromotionSlide .swiper-pagination`,
    },
    breakpoints: {
      1201: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 26,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 13,
        slidesPerView: 2,
      },
    },
  })
}

if ($(".wrapNewSlide").length) {
  const slideItems = $(".wrapNewSlide .swiper-slide");

  new Swiper('.wrapNewSlide .swiper', {
    loop: true,
    speed: 1e3,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      clickable: true,
      el: `.wrapBlog .swiper-pagination`,
    },
    breakpoints: {
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      576: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
    },
  })
}

/* ===================== Count Down Promotion ===================== */
$(".btn-cart").each(function(i, e) {
  $(this).on("click", () => {
    const val = $(".wrap-cart-header .text-qtt").text();

    $(".wrap-cart-header .text-qtt").text(Number(val) + 1)
  })
})

/* ===================== Count Down Promotion ===================== */
; (function () {
  let TIMER;
  let Init = true;
  const deadline = $(".promotion-main").data("countdown");

  const $pCountDown = $(".wrap-count");
  const $pHour = $pCountDown.find('.text-item.hour h2');
  const $pMinute = $pCountDown.find('.text-item.minute h2');
  const $pSecond = $pCountDown.find('.text-item.second h2');

  const getTimeUntil = (val) => {
    const time = Date.parse(val) - Date.parse(new Date().toString());
    Init = false;
    if (time < 0) {
      // setDays(0);
      $pHour.text('00');
      $pMinute.text('00');
      $pSecond.text('00');
      return false;
    }
    // setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    $pHour.text(Math.floor((time / (1000 * 60 * 60 * 24)) * 24));
    $pMinute.text(Math.floor((time / 1000 / 60) % 60));
    $pSecond.text(Math.floor((time / 1000) % 60));

    setTimeout(() => {
      getTimeUntil(deadline);
    }, 1000);
    return true;
  };

  getTimeUntil(deadline);
})();

/* ===================== Wow Animation ===================== */
const initWow = () => {
  if ($('.wow').length) {
    wow = new WOW(
      {
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: false,       // default
        live: true        // default
      }
    )
    wow.init();
  }
}

$(window).on('load', function () {
  initWow();
});