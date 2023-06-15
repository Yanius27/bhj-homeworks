const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

function xhrInit(type, url) {
  const request = new XMLHttpRequest();
  request.open(type, url);
  return request;
}

function addPoll(obj) {
  pollTitle.innerText = obj.data.title; 
  for(let i = 0; i < obj.data.answers.length; i++) {
    const btn = document.createElement('button');
    btn.classList.add('poll__answer');
    btn.innerText = obj.data.answers[i];
    pollAnswers.appendChild(btn);
    btn.addEventListener('click', () => {
      btn.style.color = 'white';
      alert('Спасибо, ваш голос засчитан!');
      const resultXhr = xhrInit('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
      resultXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      resultXhr.send(`vote=${obj.id}&answer=${i}`);
      resultXhr.addEventListener('load', () => {
        if(resultXhr.readyState === resultXhr.DONE && xhr.status === 200) {
          const responseStat = JSON.parse(resultXhr.response);
          pollAnswers.innerHTML = '';
          pollAnswers.className = 'stats';
          for(item of responseStat.stat) {
            const div = document.createElement('div');
            pollAnswers.appendChild(div);
            div.innerText = `${item.answer}: ${item.votes}%`;
          }
        }
      });
      setTimeout(() => location.reload(), 10000);
    });
  }
}

const xhr = xhrInit('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('load', () => {
  if(xhr.readyState === xhr.DONE && xhr.status === 200) {
    const response = JSON.parse(xhr.response);
    addPoll(response);
  }
});