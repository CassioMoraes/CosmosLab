$(document).ready(function () {
    function pulsate() {
        $(".pulsate").animate({ opacity: 0.2 }, 1200, 'linear')
            .animate({ opacity: 1 }, 1200, 'linear', pulsate)
            .animate({ opacity: 1 }, 400, 'linear', pulsate);
    }
    pulsate();
}); 