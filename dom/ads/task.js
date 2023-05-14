const rotatorCases = document.querySelectorAll('.rotator__case');

for (let i = 0; i < rotatorCases.length; i++) {
  rotatorCases[i].style.color = rotatorCases[i].getAttribute('data-color');
}

let item = 0;

let speed = 1000;

let timerId = setTimeout(function rotation() {
  if(item === rotatorCases.length - 1) {
    rotatorCases[item].classList.remove('rotator__case_active');
    item = 0;
    rotatorCases[item].classList.add('rotator__case_active'); 
  }
  else {
    rotatorCases[item].classList.remove('rotator__case_active');
    rotatorCases[item].nextElementSibling.classList.add('rotator__case_active');
    item++;
  }
  timerId = setTimeout(rotation, rotatorCases[item].getAttribute('data-speed'));
}, speed);
