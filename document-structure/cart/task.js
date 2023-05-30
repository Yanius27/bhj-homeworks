const products = Array.from(document.querySelectorAll('.product'));
const cartProducts = document.querySelector('.cart__products');

function pushInСart(product, quantity) {
  const cartProduct = document.createElement('div');
  cartProduct.classList.add('cart__product');
  if(!cartProducts.contains()) {
    cartProducts.appendChild(cartProduct);
    cartProduct.dataset.id = product.dataset.id;

    const cartProductImage = document.createElement('img');
    cartProductImage.src = product.querySelector('img').src;
    cartProductImage.classList.add('cart__product-image');
    cartProduct.appendChild(cartProductImage);

    const cartProductQuantity = document.createElement('div');
    cartProductQuantity.innerText = quantity.innerText;
    cartProductQuantity.classList.add('cart__product-count');
    cartProduct.appendChild(cartProductQuantity);
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