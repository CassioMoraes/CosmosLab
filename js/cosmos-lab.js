window.onload = function() {
    StartSparkling();
    initializeOverlay();
    updateImageSize();
};

window.onresize = function () {
    updateImageSize();
    alert("resizing");
}