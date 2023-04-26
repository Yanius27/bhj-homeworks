getHole = index => document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for(let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    getHole(i).classList.contains('hole_has-mole') ? +dead.textContent++ : +lost.textContent++;
    if(dead.textContent === '10') {
      alert('Вы выиграли!');
      dead.textContent = 0;
      lost.textContent = 0;
    }
    if(lost.textContent === '5') {
      alert('Вы проиграли!');
      dead.textContent = 0;
      lost.textContent = 0;
    }
  } 
}