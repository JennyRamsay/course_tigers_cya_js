# Lab: DOM Lab 2

**Lab Duration: 60 minutes**

## Intro

In this lab we will continue to build on what we have learned about using JavaScript to interact with the DOM in a web browser. We will give you some data containing the products for a shop and you will loop over it and render it on the page.

Why would you do this instead of just writing things directly in the HTML file? If we hard-code values in the HTML file then they can't be updated dynamically. As the theme for this lab is a shop - you might be able to complete the products listing page by writing the items directly into the HTML but what about the basket page, for example? That needs to contain different values every time it's displayed to a user. The user also expects to be able to remove items or change the quantity of an item in the basket and see the new cost displayed to them in real-time. We need to be able to update the DOM after the page has already loaded in order for this to be possible.

## Brief

You have been given some start code which includes the following files:

- index.html
- style.css
- app.js
- data.js

You should `not` modify `index.html` or `data.js`.

`data.js` contains the data for the app. Any JavaScript should be written in `app.js`. Both `app.js` and `data.js` are imported into `index.html` via `script` tags. The data from `data.js` will be in scope in `app.js`. They're just separated to keep things a little bit neater. Any styling should be done in `style.css`.

You'll notice that `app.js` is using `console.log()` to output the value of the variable `data`. This variable contains all of the data that we will need for the app.

## Task

The solution to each problem is provided, but you should only look at it if you get stuck and are unable to get there on your own. You may also find it useful to check your solution against ours once you have completed each problem. Don't worry if they aren't exactly the same!



1. Iterate over the products in `data` and output the name of each product to the console.

- Write a `for` loop that iterates over the `products` in `data`.
- Use `console.log` to output the `name` of each product.



2. Use `querySelector` to target the `section` on the page with the id `products` and store it in a variable. This is the element that we will append the product list to.



3. Use `createElement` to create a `ul` element and store it in a variable, then append it to the `products` section that you targetted previously. We will do this for each product in the array, but let's get it working with the first one to start with.



4. Use `createElement` to create an `li` element and store it in a variable, then append it to the `ul` that you created previously using `appendChild`. The `li` should display the name of the first product from `data.products`.



5. Move the creation of the `ul` and `li` elements into the for loop, so that we're creating a new HTML element for each element in the array of products. Change the product name so that it displays correctly for each element in the array.



6. Add the CSS class 'product' to each `ul` after it is created and apply some basic styling to the class via CSS.



7. Add additional `li` elements to display the description and price of each product.



<details>
<summary>Solutions</summary>

  <details>
  <summary>Solution 1</summary>

  ```js
  for (const product of data.products) {
    console.log(product.name);
  }
  ```
  </details>


  <details>
  <summary>Solution 2</summary>

  ```js
  const products = document.querySelector('#products');
  ```
  </details>


  <details>
  <summary>Solution 3</summary>

  ```js
  const newProduct = document.createElement('ul');
  products.appendChild(newProduct);
  ```

  `app.js` should now look something like this:

  ```js
  // app.js

  document.addEventListener('DOMContentLoaded', () => {
    for (const product of data.products) {
      console.log(product.name);
    }

    const products = document.querySelector('#products');

    const newProduct = document.createElement('ul');
    products.appendChild(newProduct);
  });
  ```
  </details>


  <details>
  <summary>Solution 4</summary>

  ```js
  const productName = document.createElement('li');
  productName.textContent = data.products[0].name;
  newProduct.appendChild(productName);
  ```

  `app.js` should now look something like this:

  ```js
  // app.js

  document.addEventListener('DOMContentLoaded', () => {
    for (const product of data.products) {
      console.log(product.name);
    }

    const products = document.querySelector('#products');

    const newProduct = document.createElement('ul');
    products.appendChild(newProduct);

    const productName = document.createElement('li');
    productName.textContent = data.products[0].name;
    newProduct.appendChild(productName);
  });
  ```
  </details>


  <details>
  <summary>Solution 5</summary>

  ```js
  for (const product of data.products) {
    const newProduct = document.createElement('ul');
    products.appendChild(newProduct);

    const productName = document.createElement('li');
    productName.textContent = product.name;
    newProduct.appendChild(productName);
  }
  ```

  `app.js` should now look something like this:

  ```js
  // app.js

  document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelector('#products');

    
    for (const product of data.products) {
      const newProduct = document.createElement('ul');
      products.appendChild(newProduct);

      const productName = document.createElement('li');
      productName.textContent = product.name;
      newProduct.appendChild(productName);
    }
  });
  ```
  </details>


  <details>
  <summary>Solution 6</summary>

  ```js
  // app.js
  const newProduct = document.createElement('ul');
  newProduct.classList.add('product')
  products.appendChild(newProduct);
  ```

  ```css
  /* style.css */

  .product {
    border: 1px solid black;
    list-style: none;
  }
  ```

  `app.js` should now look something like this:

  ```js
  // app.js

  document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelector('#products');

    
    for (const product of data.products) {
      const newProduct = document.createElement('ul');
      newProduct.classList.add('product');
      products.appendChild(newProduct);

      const productName = document.createElement('li');
      productName.textContent = product.name;
      newProduct.appendChild(productName);
    }
  });
  ```
  </details>


  <details>
  <summary>Solution 7</summary>

  ```js
  const productDescription = document.createElement('li');
  productDescription.textContent = product.description;
  newProduct.appendChild(productDescription);

  const productPrice = document.createElement('li');
  productPrice.textContent = product.price;
  newProduct.appendChild(productPrice);
  ```

  `app.js` should now look something like this:

  ```js
  // app.js

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
  ```
  </details>
</details>