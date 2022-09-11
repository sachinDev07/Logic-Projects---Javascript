window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("start");
  var buttonStop = document.getElementById("stop");
  var buttonReset = document.getElementById("reset");
  var interval;

  buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(interval);
  };

  buttonReset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendTens.textContent = tens;
    appendSeconds.textContent = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.textContent = tens;
    }

    if (tens > 9) {
      appendTens.textContent = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.textContent = "0" + seconds;
      tens = 0;
      appendTens.textContent = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.textContent = seconds;
    }
  }
};
