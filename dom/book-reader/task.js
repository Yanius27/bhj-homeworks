const sizesButtons = Array.from(document.querySelectorAll('.font-size'));
const textColor = Array.from(document.querySelectorAll('div.book__control_color a.color'));
const bgColor = Array.from(document.querySelectorAll('div.book__control_background a.color'));
const book = document.querySelector('.book');

sizesButtons.forEach((el) => {
  el.onclick = () => {
    for (let i = 0; i < sizesButtons.length; i++) {
      sizesButtons[i].classList.remove('font-size_active');
    }
    el.classList.add('font-size_active');
    if(el.classList.contains('font-size_small')) {
      book.classList.remove('book_fs-big');
      book.classList.add('book_fs-small');
    }
    else if(el.classList.contains('font-size_big')) {
      book.classList.remove('book_fs-small');
      book.classList.add('book_fs-big');
    }
    else {
      book.classList.remove('book_fs-small', 'book_fs-big');
    }
  }
});  

textColor.forEach((el) => {
  el.onclick = () => {
    for (let i = 0; i < textColor.length; i++) {
      textColor[i].classList.remove('color_active');
    }
    el.classList.add('color_active');
    if(el.getAttribute('data-text-color') === 'black') {
      book.classList.remove('book_color-gray', 'book_color-whitesmoke');
      book.classList.add('book_color-black');
    }
    else if(el.getAttribute('data-text-color') === 'gray') {
      book.classList.remove('book_color-black', 'book_color-whitesmoke');
      book.classList.add('book_color-gray');
    }
    else {
      book.classList.remove('book_color-black', 'book_color-gray');
      book.classList.add('book_color-whitesmoke');
    }
  }
});

bgColor.forEach((el) => {
  el.onclick = () => {
    for (let i = 0; i < bgColor.length; i++) {
      bgColor[i].classList.remove('color_active');
    }
    el.classList.add('color_active');
    if(el.getAttribute('data-bg-color') === 'black') {
      book.classList.remove('book_bg-gray', 'book_bg-white');
      book.classList.add('book_bg-black');
    }
    else if(el.getAttribute('data-bg-color') === 'gray') {
      book.classList.remove('book_bg-black', 'book_bg-white');
      book.classList.add('book_bg-gray');
    }
    else {
      book.classList.remove('book_bg-black', 'book_bg-gray');
      book.classList.add('book_bg-white');
    }
  }
});

book_bg-gray
book_bg-black
book_bg-white