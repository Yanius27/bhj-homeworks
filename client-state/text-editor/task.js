const textArea = document.getElementById('editor');
const clearButton = document.getElementById('clear');
let text;

textArea.addEventListener('keyup', ()=> {
  text = textArea.value;
  localStorage.setItem('text', text);
});

window.addEventListener('DOMContentLoaded', (e)=> {
  const localStorageText = localStorage.getItem('text');
  if(localStorageText) {
    textArea.value = localStorageText;
  }
});

clearButton.addEventListener('click', ()=> {
  textArea.value = '';
  localStorage.clear();
});