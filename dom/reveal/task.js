const reveal = document.querySelector('.reveal');

document.addEventListener('scroll', () => {
  if(reveal.getBoundingClientRect().top < 848 && reveal.getBoundingClientRect().bottom > 0) {
    reveal.classList.add('reveal_active');  
  }
  else {
    reveal.classList.remove('reveal_active');
  } 
});