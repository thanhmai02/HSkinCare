$(window).on('load', function () {
    $('.showGalleryImgDetail').lightGallery({
        showThumbByDefault: false,
        download: false,
        fullScreen: false,
        zoom: false,
        scale: false,
        autoplayControls: false,
        share: false,
        counter: false,
        getCaptionFromTitleOrAlt: false,
        prevHtml: prevLg,
        nextHtml: nextLg
    });
});

