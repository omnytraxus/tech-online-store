(function ($) {
    const sideBar = (
        select,
        target,
        percentWidthTablet,
        percentWidthMobile
    ) => {
        $(select).on('click', () => {
            if ($(window).width() > 767) {
                $(target).animate({ width: percentWidthTablet });
            } else $(target).animate({ width: percentWidthMobile });
        });
    };
    sideBar('.left-menu', '.sidebar', '57%', '80%');
    sideBar('.sidebar-close-button', '.sidebar', '0%', '0%');
    sideBar('.sidebar-desktopPc', '.desktopPc-sidebar-page', '100%', '100%');
    sideBar('.back-desktopPc-button', '.desktopPc-sidebar-page', '0%', '0%');
})(jQuery);
