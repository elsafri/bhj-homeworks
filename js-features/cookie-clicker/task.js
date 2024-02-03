const cookie = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');
const speedCounter = document.getElementById('speed__counter')
let lastTime = Date.now();

cookie.addEventListener('click', () => {
  count.textContent++;
  cookie.width = cookie.width == 200 ? 250 : 200;

  const curTime = Date.now();
  speedCounter.textContent = (1 / ((curTime - lastTime) / 1000)).toFixed(2);
  lastTime = curTime;
});
