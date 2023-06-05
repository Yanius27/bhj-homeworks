const products = Array.from(document.querySelectorAll('.product'));
const cartProducts = document.querySelector('.cart__products');
const cart = document.querySelector('.cart');
let cartProductsArr;
//search elements from DOM

function pushInСart(product, quantity) {
  cartProductsArr = Array.from(document.querySelectorAll('.cart__product'));
//create arr from all products in cart
  const productQuantity = +quantity.innerText;

  const cartProductImg = document.createElement('img');
  cartProductImg.classList.add('cart__product-image');

  const cartProductQuantity = document.createElement('div');
  cartProductQuantity.classList.add('cart__product-count');

  const cartProductRemove = document.createElement('div');
  cartProductRemove.classList.add('cart__product-remove');
//create elements and adding classes

  if(!cartProductsArr.find((e) => e.dataset.id === product.dataset.id)) {
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
//create sample of product  
    cartProduct.dataset.id = product.dataset.id;
//appropriation id  
    cartProductImg.src = product.querySelector('img').src;
    cartProduct.appendChild(cartProductImg);
//copying information from img, adding in cartProduct  
    cartProductQuantity.innerText = productQuantity;
    cartProduct.appendChild(cartProductQuantity);
//copying information of quantity, adding in cartProduct
    cartProduct.appendChild(cartProductRemove);
//adding delet div
    cartProducts.appendChild(cartProduct);
//adding cartProduct in cart
    cartProductsArr.push(product);
    cart.classList.remove('cart__hidden'); 
//adding elem in array, delete hidden class from cart
    cartProduct.addEventListener('click', (event) => {
      if(event.target.className === 'cart__product-remove') {
        removeProduct(event.currentTarget);
      }
    });
//adding listener to cartProduct    
  }
  else {
   const cartProductQuantity = cartProductsArr.find((e) => e.dataset.id === product.dataset.id).querySelector('.cart__product-count');
   const count = +cartProductQuantity.innerText;
   cartProductQuantity.innerText = count + productQuantity;
//change quantity of products in cart
  }  
}

function removeProduct(elem) {
  cartProductsArr = cartProductsArr.filter((e) => {
    let actualElemIndex = cartProductsArr.findIndex(() => elem)
    return e !== cartProductsArr[actualElemIndex];
  });
  if(cartProductsArr.length === 0) {
    cart.classList.add('cart__hidden');
  }
  cartProducts.removeChild(elem);
}
//Func delete product from cart, adding hidden class to cart
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
//change quantity logic