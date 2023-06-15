const progress = document.getElementById('progress');
const form = document.getElementById('form');

document.getElementById("file").onchange = function() {
  const fileDesc = document.querySelector(".input__wrapper-desc");
  let fileName = this.value.split("\\");
  fileName = fileName[fileName.length - 1];
  fileDesc.textContent = fileName;
};

form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', (event)=> { 
    const percentLoad = event.loaded / event.total;
    progress.value = percentLoad;
    if(percentLoad === 1) {
      setTimeout(() => {
        alert('Файл загружен');
        location.reload();
      }, 1000);
    };
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
});