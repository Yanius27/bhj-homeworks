const img = document.getElementById('loader');
const items = document.getElementById('items');

function saveLocalStorage(state) {
  const stringCurrency = JSON.stringify(state);
  localStorage.setItem('data', stringCurrency);
} 

function initState() {
  const localState = JSON.parse(localStorage.getItem('data'));
  if(localState) {
    img.classList.remove('loader_active');
    
    for(let key in localState.response.Valute) {
      const item = document.createElement('div');
      item.classList.add('item');
    
      const itemCode = document.createElement('div');
      itemCode.classList.add('item__code');
    
      const itemValue = document.createElement('div');
      itemValue.classList.add('item__value');
    
      const itemCurrency = document.createElement('div');
      itemCurrency.classList.add('item__currency');
      itemCurrency.innerText = 'руб.'
    
      item.appendChild(itemCode);
      item.appendChild(itemValue);
      item.appendChild(itemCurrency);
    
      itemCode.innerText = localState.response.Valute[key].CharCode;
      itemValue.innerText = localState.response.Valute[key].Previous;
      items.appendChild(item);
    }

    const xhrActual = new XMLHttpRequest();
    xhrActual.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    xhrActual.send();
    
    xhrActual.addEventListener('load', () => {
      if(xhrActual.readyState === xhrActual.DONE) {
        const currency = JSON.parse(xhrActual.response);
        const itemsValue = document.querySelectorAll('.item__value');
        let it = 0;
        for(let key in currency.response.Valute) {
          itemsValue[it].innerText = currency.response.Valute[key].Value;
          currency.response.Valute[key].Previous = currency.response.Valute[key].Value;
          it++;
        }
        saveLocalStorage(currency);
      }
    });
  }
  else {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    xhr.send();
    
    xhr.addEventListener('load', () => {
      if(xhr.readyState === xhr.DONE) {
        const currency = JSON.parse(xhr.response);
       
        img.classList.remove('loader_active');
    
        for(let key in currency.response.Valute) {
          const item = document.createElement('div');
          item.classList.add('item');
    
          const itemCode = document.createElement('div');
          itemCode.classList.add('item__code');
    
          const itemValue = document.createElement('div');
          itemValue.classList.add('item__value');
    
          const itemCurrency = document.createElement('div');
          itemCurrency.classList.add('item__currency');
          itemCurrency.innerText = 'руб.'
    
          item.appendChild(itemCode);
          item.appendChild(itemValue);
          item.appendChild(itemCurrency);
    
          itemCode.innerText = currency.response.Valute[key].CharCode;
          itemValue.innerText = currency.response.Valute[key].Value;
          currency.response.Valute[key].Previous = itemValue.innerText;

          saveLocalStorage(currency);

          items.appendChild(item);
        }
      }
    });
  }
}

initState();