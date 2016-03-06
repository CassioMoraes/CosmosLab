var tickTimer = 20;

setInterval(onTimerTick, tickTimer);

function StartSparkling() {
    var sparkleMaxSize = 10;
    var sparkleMinSize = 5;
    
    for (i = 0; i < 100; i++) {
        
        var x = (Math.random() * ($(document).width() -  sparkleMaxSize)).toFixed();
        var y = (Math.random() * ($(document).height() - sparkleMaxSize)).toFixed();
        var randonSize = Math.floor(Math.random() * sparkleMaxSize) + sparkleMinSize;

        var $circle = $("<div>", { id:"circle" + i, class: "circle pulsate"});               
        $circle.css(
            {
                'left': x + 'px',
                'top': y + 'px',
                'width': randonSize + 'px',
                'height': randonSize + 'px',                
                '-webkit-border-radius': randonSize / 2 + 'px',
                '-moz-border-radius':  randonSize / 2 + 'px',
                'border-radius':  randonSize / 2 + 'px'
            });
            
        $(".sparkles").append($circle);
    }
}

function onTimerTick() {
    var randomSplarkle = Math.floor(Math.random() * 100) + 1;
    
    $("#circle" + randomSplarkle).animate({ opacity: 0.2 }, 1200, 'linear')    
            .animate({ opacity: 1 }, 1200, 'linear')
            .animate({ opacity: 1 }, 400, 'linear');    
}