const products = Array.from(document.querySelectorAll('.product'));
const cartProducts = document.querySelector('.cart__products');

function pushInСart(product, quantity) {
  const cartProductsArr = Array.from(document.querySelectorAll('.cart__product'));

  const productQuantity = +quantity.innerText;

  const cartProductImg = document.createElement('img');
  cartProductImg.classList.add('cart__product-image');

  const cartProductQuantity = document.createElement('div');
  cartProductQuantity.classList.add('cart__product-count');

  if(!cartProductsArr.find((e) => e.dataset.id === product.dataset.id)) {
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    
    cartProduct.dataset.id = product.dataset.id;
    
    cartProductImg.src = product.querySelector('img').src;
    cartProduct.appendChild(cartProductImg);
    
    cartProductQuantity.innerText = productQuantity;
    cartProduct.appendChild(cartProductQuantity);

    cartProducts.appendChild(cartProduct);

    cartProductsArr.push(product); 
  }
  else {
   const cartProductQuantity = cartProductsArr.find((e) => e.dataset.id === product.dataset.id).querySelector('.cart__product-count');
   const count = +cartProductQuantity.innerText;
   cartProductQuantity.innerText = count + productQuantity;
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