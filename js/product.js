function flip(cardId) {
    if ($(cardId).hasClass('flip')) {
        $(cardId).removeClass('flip');
        
        return true;
    }

    // $(cardId).find('front').css('height', '0%');
    // $(cardId).find('back').css('height', '100%');

    $(cardId).addClass('flip').mouseleave(function() {
        $(cardId).removeClass('flip');
    });
    return true;
}