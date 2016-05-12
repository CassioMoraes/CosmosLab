"use strict";

function initializeOverlay() {
    document.getElementById("options").style.pointerEvents = "none";
};

function toggleNav() {
    if (document.getElementById("options").style.opacity == "1") {
        document.getElementById("options").style.pointerEvents = "none";
        document.getElementById("options").style.opacity = "0";
        $("#menu").attr("src", "img/Icon_OpenMenu.png");
    }
    else {
        document.getElementById("options").style.pointerEvents = "auto";
        document.getElementById("options").style.opacity = "1";
        $("#menu").attr("src", "img/Icon_CloseMenu.png");
    }
}