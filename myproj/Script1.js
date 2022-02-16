window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendStart = document.getElementById("start");
    var appendPause = document.getElementById("pause");
    var appendReset = document.getElementById("reset");
    var interval;

    start.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
    pause.onclick = function () {
        clearInterval(interval);
    }
    reset.onclick = function () {
        clearInterval(interval);
        tens = 00;
        seconds = 00;
        appendTens.innerHTML = "0" + tens;
        appendSeconds.innerHTML = "0" + seconds;
    }
    function startTimer() {
        tens++;

        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}