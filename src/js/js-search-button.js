(function ($) {
    const searchInput = (select, search, menu, closeButton, openButton) => {
        $(select).on('click', function () {
            $(search).toggleClass('hidden-item');
            $(menu).toggle();
            $(closeButton).toggle();
            $(openButton).toggle();
        });
    };
    searchInput(
        '.items-search__button',
        '.bottom-floor__items__search',
        '.bottom-floor__items-menu',
        '.search-input-close',
        '.search-input-open'
    );
})(jQuery);
