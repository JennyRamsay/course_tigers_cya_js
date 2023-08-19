document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelector('#products');

  for (const product of data.products) {
    const newProduct = document.createElement('ul');
    newProduct.classList.add('product');
    products.appendChild(newProduct);

    const productName = document.createElement('li');
    productName.textContent = product.name;
    newProduct.appendChild(productName);

    const productDescription = document.createElement('li');
    productDescription.textContent = product.description;
    newProduct.appendChild(productDescription);

    const productPrice = document.createElement('li');
    productPrice.textContent = product.price;
    newProduct.appendChild(productPrice);
  }
});
