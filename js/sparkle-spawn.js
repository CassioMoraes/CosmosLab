var tickTimer = 20;

setInterval(onTimerTick, tickTimer);

function StartSparkling() {
    for (i = 0; i < 100; i++) {
        
        var posx = (Math.random() * ($(document).width() - 8)).toFixed();
        var posy = (Math.random() * ($(document).height() - 8)).toFixed();

        var $circle = $("<div>", {class: "circle pulsate"});
        $circle.css({
            'left':posx+'px',
            'top':posy+'px'});
        $(".container").append($circle);
    }
}

function onTimerTick() {
    $(".pulsate").animate({ opacity: 0.2 }, 1200, 'linear')
            .animate({ opacity: 1 }, 1200, 'linear', pulsate)
            .animate({ opacity: 1 }, 400, 'linear', pulsate);    
}