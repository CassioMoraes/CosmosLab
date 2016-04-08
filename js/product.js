function flip(cardId) {
    if ($(cardId).hasClass('flip')) {
        $(cardId).removeClass('flip');
        
        return true;
    }

    $(cardId).addClass('flip').mouseleave(function() {
        $(cardId).removeClass('flip');
    });
    return true;
}

$(document).ready(function () {
    updateImageSize();
    $(window).resize(function() {
        updateImageSize();
    });
});

var IMAGE_X = 960;
var IMAGE_Y = 540;

function updateImageSize()
{
    var currentWidth = $('.flip-container').width();
    var newHeight = Math.floor((currentWidth * IMAGE_Y) / IMAGE_X);
    
    $('.flip-container').height(newHeight + 'px');
    $('.front').height(newHeight + 'px');
    $('.back').height(newHeight + 'px');
}