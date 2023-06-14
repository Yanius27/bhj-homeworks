const progress = document.getElementById('progress');
const form = document.getElementById('form');

document.getElementById("file").onchange = function() {
  const fileDesc = document.querySelector(".input__wrapper-desc");
  let fileName = this.value.split("\\");
  fileName = fileName[fileName.length - 1];
  fileDesc.textContent = fileName;
};

form.addEventListener('submit', (e)=> {
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);

  xhr.addEventListener('load', ()=> {
    const timerId = setInterval(() => {
      progress.value += 0.005;
      if(xhr.readyState === xhr.DONE && progress.value === 1) {
        clearInterval(timerId);
        alert('Документ загружен!');
        location.reload();
      }
    }, 10);
   
  });
  e.preventDefault();
});