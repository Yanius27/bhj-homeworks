let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');
let time = new Date(2023, 3, 27, 0, 0, 59);

seconds.textContent = time.getSeconds();
minutes.textContent = time.getMinutes();
hours.textContent = time.getHours();

function changeTimer() {
  if(seconds.textContent > 0) {
    seconds.textContent--;
  }
  else {
    clearTimeout(timerId);
    alert('Вы победили в конкурсе!');
    location.assign('https://www.youtube.com/shorts/EFwPdzM8u9s');
  }
}

let timerId = setInterval(changeTimer, 1000);