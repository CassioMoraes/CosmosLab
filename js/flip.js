function flip(cardId) {
    var isInternetExplorer = /*@cc_on!@*/false || !!document.documentMode;
    
    if (isInternetExplorer)
        return true;
    
    if ($(cardId).hasClass('flip')) {
        $(cardId).removeClass('flip');
        return true;
    }

    $(cardId).addClass('flip').mouseleave(function () {
        $(cardId).removeClass('flip');
    });
    return true;
}

var IMAGE_X = 960;
var IMAGE_Y = 540;

function updateImageSize() {
    flipContainers = $('.flip-container');

    for (flipContainer in flipContainers) {
        currentFlipConteiner = flipContainers[flipContainer];

        var currentWidth = $(currentFlipConteiner).width();

        var newHeight;

        if (currentFlipConteiner.id.indexOf('large') > -1) {
            newHeight = Math.floor((currentWidth * IMAGE_Y) / (IMAGE_X * 2));
        }
        else {
            newHeight = Math.floor((currentWidth * IMAGE_Y) / IMAGE_X);
        }

        $(currentFlipConteiner).height(newHeight + 'px');
        $(currentFlipConteiner).find('.front').height(newHeight + 'px');
        $(currentFlipConteiner).find('.back').height(newHeight + 'px');
    }
}