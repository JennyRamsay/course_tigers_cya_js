const shoppingBasket = require("./shopping_basket");
const products = require("./products");

shoppingBasket.addProduct(products[0]);
shoppingBasket.addProduct(products[1]);
shoppingBasket.addProduct(products[2]);
const total = shoppingBasket.getTotal() / 100;

console.log(
  total.toLocaleString("en-GB", { style: "currency", currency: "GBP" })
);
