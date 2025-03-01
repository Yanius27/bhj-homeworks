let cookie = document.getElementById('cookie');
let clickCounter = document.getElementById('clicker__counter');
let clickSpeedCounter = document.getElementById('clicker__speed');
let momentOfClick;
function clickSpeed() {
  clickSpeedCounter.textContent = (1 / ((Date.now() - momentOfClick) / 1000)).toFixed(2);
}

function changeSizeAndCounters() {
  if(+clickCounter.textContent !== 0) {
    clickSpeed();
  }
  momentOfClick = Date.now();

  cookie.width = clickCounter.textContent % 2 ? 200: 250;

  +clickCounter.textContent++;
}

cookie.onclick = changeSizeAndCounters;