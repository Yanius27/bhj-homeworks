const products = Array.from(document.querySelectorAll('.product'));
const cartProducts = document.querySelector('.cart__products');

const cartProduct = document.createElement('div');
cartProduct.classList.add('cart__product');

const cartProductsArr = Array.from(document.querySelectorAll('.cart__product'));

const cartProductImg = document.createElement('img');
cartProductImg.classList.add('cart__product-image');

const cartProductQuantity = document.createElement('div');
cartProductQuantity.classList.add('cart__product-count');


function pushInСart(product, quantity) {
  if(!cartProductsArr.find((e) => e.dataset.id === product.dataset.id)) {
    cartProduct.dataset.id = product.dataset.id;

    cartProductImg.src = product.querySelector('img').src;
    cartProduct.appendChild(cartProductImg);

    cartProductQuantity.innerText = quantity.innerText;
    cartProduct.appendChild(cartProductQuantity);

    cartProducts.appendChild(cartProduct);

    console.log('!');
    cartProductsArr.push(product); 
  }
  else {
    cartProductQuantity.innerText = +cartProductQuantity.innerText + +quantity.innerText;
  }  
}

products.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    let quantity = event.currentTarget.querySelector('.product__quantity-value');
    switch(event.target.textContent.trim()) {
      case '+':
        +quantity.innerText++;
        break;
      case '-':
        if(+quantity.innerText > 1) {
          +quantity.innerText--;
        }
        break;  
      case 'Добавить в корзину':
        pushInСart(event.currentTarget, quantity);
        break; 
    } 

  })
});