getHole = index => document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

endOfGame = (message) => {
  alert(message);
  dead.textContent = 0;
  lost.textContent = 0;
}

for(let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    getHole(i).classList.contains('hole_has-mole') ? +dead.textContent++ : +lost.textContent++;
    if(dead.textContent === '10') {
      endOfGame('Вы выиграли!');
    }
    if(lost.textContent === '5') {
      endOfGame('Вы проиграли.');
    }
  } 
}