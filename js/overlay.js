function toggleNav() {
    if (document.getElementById("options").style.height == "100%") {
        document.getElementById("options").style.height = "0%";
        $("#menu").attr("src", "img/Icon_OpenMenu.png");
    }
    else {
        document.getElementById("options").style.height = "100%";
        $("#menu").attr("src", "img/Icon_CloseMenu.png");
    }
}