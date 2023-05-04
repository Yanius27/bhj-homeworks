const btn = document.querySelector('.dropdown');
const list = document.querySelector('.dropdown__list');
const value = document.querySelector('.dropdown__value');
const items = Array.from(document.querySelectorAll('.dropdown__item'));

btn.onclick = function() {
  list.classList.toggle('dropdown__list_active');
}

items.forEach((elem) => {
  elem.onclick = function(event) {
    value.textContent = event.target.textContent;
    return false;
  }
})