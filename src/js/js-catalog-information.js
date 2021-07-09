(function ($) {
    const dropDownInfo = (
        selector,
        target,
        shroud,
        initalValue,
        heightValue
    ) => {
        let clickInfo = 0;
        $(selector).on('click', function () {
            if (clickInfo === 0) {
                // eslint-disable-next-line no-inner-declarations
                function slideDown() {
                    clickInfo++;
                    $(target).animate({ height: heightValue });
                    $(shroud).toggle();
                    $(selector).text('Less');
                }
                slideDown();
            } else {
                // eslint-disable-next-line no-inner-declarations
                function slideUp() {
                    clickInfo--;
                    $(target).animate({ height: initalValue });
                    $(shroud).toggle();
                    $(selector).text('More');
                }
                slideUp();
            }
        });
    };
    dropDownInfo(
        '.information__wrapper__button-more',
        '.information__wrapper__text',
        '.information__wrapper__text__shroud',
        '154px',
        '100%'
    );
})(jQuery);
