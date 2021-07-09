(function ($) {
    const dropDownList = (
        selector,
        target,
        arrowDown,
        arrowUp,
        initialValue,
        heightValue,
        windowWidth
    ) => {
        let click = 0;
        $(selector).on('click', () => {
            if ($(window).width() <= windowWidth) {
                if (click === 0) {
                    // eslint-disable-next-line no-inner-declarations
                    function slideDown() {
                        click++;
                        $(target).animate({
                            height: heightValue,
                        });
                        $(arrowDown).css({
                            display: 'none',
                        });
                        $(arrowUp).css({
                            display: 'block',
                        });
                    }
                    slideDown();
                } else {
                    // eslint-disable-next-line no-inner-declarations
                    function slideUp() {
                        click--;
                        $(target).animate({
                            height: initialValue,
                        });
                        $(arrowUp).toggle();
                        $(arrowDown).toggle();
                    }
                    slideUp();
                }
            }
        });
    };
    dropDownList(
        '.footer-information',
        '.footer__middle-floor__items__information',
        '.footer-information__arrow-down',
        '.footer-information__arrow-up',
        '30px',
        '270px',
        '998'
    );
    dropDownList(
        '.footer-pcParts',
        '.footer__middle-floor__items__pcParts',
        '.footer-pcParts__arrow-down',
        '.footer-pcParts__arrow-up',
        '30px',
        '295px',
        '998'
    );
    dropDownList(
        '.footer-desktopPc',
        '.footer__middle-floor__items__desktopPc',
        '.footer-desktopPc__arrow-down',
        '.footer-desktopPc__arrow-up',
        '30px',
        '190px',
        '998'
    );
    dropDownList(
        '.footer-laptops',
        '.footer__middle-floor__items__laptops',
        '.footer-laptops__arrow-down',
        '.footer-laptops__arrow-up',
        '30px',
        '190px',
        '998'
    );
    dropDownList(
        '.footer-address',
        '.footer__middle-floor__items__address',
        '.footer-address__arrow-down',
        '.footer-address__arrow-up',
        '30px',
        '230px',
        '998'
    );
    dropDownList(
        '.category-button',
        '.left-block__items__filters__category',
        '.category-button__arrow-down',
        '.categoty-button__arrow-up',
        '46px',
        '126px',
        '99999'
    );
    dropDownList(
        '.prise-button',
        '.left-block__items__filters__prise',
        '.prise-button__arrow-down',
        '.prise-button__arrow-up',
        '46px',
        '262px',
        '99999'
    );
    dropDownList(
        '.color-button',
        '.left-block__items__filters__color',
        '.color-button__arrow-down',
        '.color-button__arrow-up',
        '46px',
        '80px',
        '99999'
    );
})(jQuery);
