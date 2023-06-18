const form = document.getElementById('signin__form');
const formContainer = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const spanId = document.getElementById('user_id');
const inputs = document.querySelectorAll('input');
const exitBtn = document.getElementById('exitBtn');

document.addEventListener('DOMContentLoaded', ()=> {
  const user = localStorage.getItem('userId');
  if(user) {
    formContainer.classList.remove('signin_active');
    spanId.textContent = user;
    welcome.classList.add('welcome_active');
    exitBtn.classList.add('exitbtn_active');
  }
});

form.addEventListener('submit', (e)=> {
  e.preventDefault();
 
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.send(formData);

  xhr.addEventListener('load', ()=> {
    if(xhr.readyState === xhr.DONE && xhr.status === 201) {
      const response = JSON.parse(xhr.response);
      if(response.success) {
        localStorage.setItem('userId', response['user_id']);
        formContainer.classList.remove('signin_active');
        spanId.textContent = response['user_id'];
        welcome.classList.add('welcome_active');
        exitBtn.classList.add('exitbtn_active');
      }
      else {
        alert('Неверный логин/пароль');
        form.reset();
      }
    }
  });
});

exitBtn.addEventListener('click', ()=> {
  localStorage.clear();
  welcome.classList.remove('welcome_active');
  formContainer.classList.add('signin_active');
  exitBtn.classList.remove('exitbtn_active');
  form.reset();
});