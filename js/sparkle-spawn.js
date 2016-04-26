var tickTimer = 20;

setInterval(onTimerTick, tickTimer);

function StartSparkling() {

    var sparkleMaxSize = 10;
    var sparkleMinSize = 5;
    var sparkleSizeTolerance = 2;

    var height = $('#home').height();
    var width = $('#home').width();

    for (i = 0; i < 100; i++) {
        var x = (Math.random() * (width - (sparkleMaxSize + sparkleSizeTolerance))).toFixed();
        var y = (Math.random() * (height - (sparkleMaxSize + sparkleSizeTolerance))).toFixed();
        var randonSize = Math.floor(Math.random() * sparkleMaxSize) + sparkleMinSize;

        var $circle = $("<div>", { id: "circle" + i, class: "circle pulsate" });
        $circle.css(
            {
                'left': x + 'px',
                'top': y + 'px',
                'width': randonSize + 'px',
                'height': randonSize + 'px',
                '-webkit-border-radius': randonSize / 2 + 'px',
                '-moz-border-radius': randonSize / 2 + 'px',
                'border-radius': randonSize / 2 + 'px'
            });
        $(".sparkles").append($circle);
    }
}

function onTimerTick() {
    var randomSplarkle = Math.floor(Math.random() * 100) + 1;

    $("#circle" + randomSplarkle).animate({ opacity: 0.2 }, 900, 'linear')
        .animate({ opacity: 1 }, 900, 'linear')
        .animate({ opacity: 1 }, 250, 'linear');
}