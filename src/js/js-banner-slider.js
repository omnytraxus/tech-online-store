// eslint-disable-next-line no-undef
const bannerSlider = new Swiper('.js-banner-slider__container', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.js-banner-slider__buttons__button-next',
        prevEl: '.js-banner-slider__buttons__button-prev',
    },
});
bannerSlider;
