function $(str) {
  return document.querySelector(str);
}

const timer =  $("#timer");
const input = $("#input");
const start = $("#start");
let minutes = 0;
let seconds = 0;
let started = false;

function startTimer() {
  let interval = setInterval(function() {
    seconds--;
    timer.innerHTML = displayTime();
    if (minutes == 0 && seconds == 0) {
      clearInterval(interval);
      alert("Time is Up!");
      started = false;
    }
    calculateSeconds(seconds);
  }, 1000)

  return interval;
}

function calculateSeconds(_seconds) {
  if (_seconds > 60) {
    minutes = Math.floor(_seconds / 60);
    seconds = _seconds - (minutes * 60);
  }
  if (seconds == 0) {
    seconds = 60;
    minutes--;
  }
}

function displayTime() {
  if (minutes < 10 && seconds < 10)
    return `0${minutes}:0${seconds}`;
  if (minutes == 0 && seconds < 10)
    return `00:0${seconds}`;
  if (minutes == 0 && seconds == 0)
    return `00:00`;
  if (minutes < 10)
    return `0${minutes}:${seconds}`;
  if (seconds < 10)
    return `${minutes}:0${seconds}`;
  if (minutes == 0)
    return `00:${seconds}`;
  return `${minutes}:${seconds}`;
}

start.addEventListener("click", function() {
  try {
    if (!started) {
      seconds = parseInt(input.value);
      alert(seconds);
      if (seconds < 1 || typeof seconds != "number") {
        alert("Invalid number")
        return;
      }
      input.value = "";
      startTimer();
      started = true;
    }
  } catch (e) {
    console.log(e);
  }
});

