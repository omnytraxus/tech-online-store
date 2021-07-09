(function ($) {
    const init = (selector, target) => {
        $(selector).hover(
            () => {
                $(target).css({ display: 'block' });
            },
            () => {
                $(target).css({ display: 'none' });
            }
        );
    };
    init('.items-menu__laptops', '.header-menu');
    init('.header-menu', '.header-menu');
    init('.everyday-use-notebooks', '.first-nesting');
    init('.first-nesting', '.first-nesting');
    init('.msi-workstation-series', '.second-nesting');

    $('.second-nesting').hover(
        () => {
            $('.first-nesting').css({ display: 'block' });
            $('.second-nesting').css({ display: 'block' });
        },
        () => {
            $('.second-nesting').css({ display: 'none' });
        }
    );
})(jQuery);
