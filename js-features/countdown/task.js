let timer = document.getElementById('timer');
let preTimer = document.getElementById('pre-timer');

function changeTimer() {
  if(+timer.textContent < 11 && +timer.textContent != 0) {
    preTimer.textContent = ' 00:00:0';
  }

  if(+timer.textContent > 0) {
    +timer.textContent--;
  }
  else {
    clearTimeout(timerId);
    alert('Вы победили в конкурсе!');
    location.assign('https://www.youtube.com/shorts/EFwPdzM8u9s');
  }
}

let timerId = setInterval(changeTimer, 1000);