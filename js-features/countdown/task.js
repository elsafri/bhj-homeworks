const timer = document.getElementById('timer');

let time = timer.textContent;

const formatTime = new Date();
formatTime.setTime(time * 1000 + formatTime.getTimezoneOffset() * 60000);

const setTimer = function() {
  time--;
  if (time) {
    formatTime.setTime(formatTime.getTime() - 1000);
    timer.textContent = formatTime.toLocaleTimeString('ru');
  } else {
    clearInterval(timerID);
    alert('Вы победили в конкурсе!');}
}

const timerID = setInterval(setTimer, 1000);
