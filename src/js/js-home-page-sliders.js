const swiperSlider = (
    sliderContainer,
    loop,
    slidesPerView,
    mousewheel,
    centeredSlides,
    pagination,
    nextEl,
    prevEl
) => {
    // eslint-disable-next-line no-undef
    new Swiper(sliderContainer, {
        // Optional parameters
        loop: loop,
        slidesPerView: slidesPerView,
        mousewheel: mousewheel,
        centeredSlides: centeredSlides,
        pagination: {
            el: pagination,
            clickable: true,
        },
        navigation: {
            nextEl: nextEl,
            prevEl: prevEl,
        },
    });
};
swiperSlider(
    '.js-custome-builds__slider-container',
    true,
    5,
    true,
    false,
    false,
    false,
    false
);
swiperSlider(
    '.js-msi-laptops__slider-container',
    true,
    5,
    true,
    false,
    false,
    false,
    false
);
swiperSlider(
    '.js-desktops__slider-container',
    true,
    5,
    true,
    false,
    false,
    false,
    false
);
swiperSlider(
    '.js-gaming-monitors__slider-container',
    true,
    5,
    true,
    false,
    false,
    false,
    false
);
swiperSlider(
    '.js-review-slider__wrapper__items__swiper-container',
    true,
    1,
    true,
    true,
    '.swiper-pagination',
    false,
    false
);
swiperSlider(
    '.js-new-products-slider__container',
    true,
    6,
    true,
    false,
    false,
    '.js-new-products-slider__buttons__button-next',
    '.js-new-products-slider__buttons__button-prev'
);
