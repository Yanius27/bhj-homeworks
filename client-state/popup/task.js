const popup = document.getElementById('subscribe-modal');
const closeIcon = document.querySelector('.modal__close');

closeIcon.addEventListener('click', ()=> {
  popup.classList.remove('modal_active');
  document.cookie = 'className=' + encodeURIComponent(popup.className);
});

window.addEventListener('DOMContentLoaded', (e)=> {
  const classList = getCookie('className');
  if(classList) {
    popup.className = classList;
  }
});

function getCookie(name) {
  const value = document.cookie;
  let parts = value.split(name + '=');
  if(parts.length === 2) {
    return parts.pop().split(';').shift();
  }
}

window.addEventListener('keydown', (event)=> {
  if(event.code === 'KeyP') {
    document.cookie = 'className=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
});