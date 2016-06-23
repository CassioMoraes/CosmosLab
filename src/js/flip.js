"use strict";

function flip(cardId) {
    var isInternetExplorer = /*@cc_on!@*/ false || !!document.documentMode;

    if (isInternetExplorer)
        return true;

    if ($(cardId).hasClass('flip')) {
        $(cardId).removeClass('flip');
        return true;
    }

    $(cardId).addClass('flip').mouseleave(function() {
        $(cardId).removeClass('flip');
    });
    return true;
}

var IMAGE_X = 960;
var IMAGE_Y = 540;

function updateImageSize() {
    var flipContainers = $('.flip-container');

    $.each(flipContainers, function() {
        var currentWidth = $(this).width();

        var newHeight;

        if (this.id.indexOf('large') > -1) {
            newHeight = Math.floor((currentWidth * IMAGE_Y) / (IMAGE_X * 2));
        } else {
            newHeight = Math.floor((currentWidth * IMAGE_Y) / IMAGE_X);
        }

        $(this).height(newHeight + 'px');
        $(this).find('.front').height(newHeight + 'px');
        $(this).find('.back').height(newHeight + 'px');
    });
}