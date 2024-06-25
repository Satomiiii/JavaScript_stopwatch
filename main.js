// main.js
$(document).ready(function() {
    var timer;
    var isRunning = false;
    var startTime;
    var elapsedTime = 0;

    function updateDisplay(time) {
        var date = new Date(time);
        var hours = Math.floor(time / 3600000).toString().padStart(2, '0');
        var minutes = date.getUTCMinutes().toString().padStart(2, '0');
        var seconds = date.getUTCSeconds().toString().padStart(2, '0');
        var milliseconds = Math.floor(date.getUTCMilliseconds() / 10).toString().padStart(2, '0');
        $('#display').text(`${hours}:${minutes}:${seconds}:${milliseconds}`);
    }

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            startTime = Date.now() - elapsedTime;
            timer = setInterval(function() {
                elapsedTime = Date.now() - startTime;
                updateDisplay(elapsedTime);
            }, 10);
        }
    }

    function stopTimer() {
        if (isRunning) {
            isRunning = false;
            clearInterval(timer);
        }
    }

    function resetTimer() {
        stopTimer();
        elapsedTime = 0;
        updateDisplay(elapsedTime);
    }

    $('#start').click(startTimer);
    $('#stop').click(stopTimer);
    $('#reset').click(resetTimer);
});


