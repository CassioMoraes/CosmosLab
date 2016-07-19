"use strict";

window.onload = function () {
    StartSparkling();
    initializeOverlay();
    updateImageSize();
    getWordpressPost();
};

window.onresize = function () {
    updateImageSize();
    getWordpressPost();
};

function getWordpressPost() {
    $.ajax({
        url: 'php/loadWordpressPosts.php',
        type: 'GET',
        data: {
            'screenWidth': screen.width
        },
        error: function (msg) {
            $("#blog-posts").html("<h3>Em breve traremos mais postagens para você...<h3>");
        },
        success: function (msg) {
            $("#blog-posts").html(msg);
        }
    });
}