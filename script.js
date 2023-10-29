let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        document.getElementById("startStop").innerText = "Start";
    } else {
        interval = setInterval(updateTime, 1000);
        document.getElementById("startStop").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("startStop").innerText = "Start";
    isRunning = false;
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    const timeString = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
    document.getElementById("display").innerText = timeString;
}

reset();
