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
                //   el: ".swiper-pagination",
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
        // pagination: {
        //     clickable: true,
        //     el: `.wrapCollections .swiper-pagination`,
        // },
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
    //   pagination: {
    //     clickable: true,
    //     el: `.wrapProductSlide .swiper-pagination`,
    //   },
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
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    //   pagination: {
    //     clickable: true,
    //     el: `.wrapPromotion .swiper-pagination`,
    //   },
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