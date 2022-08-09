import { ProductList } from "../../util/constant";

//Add product to cart
const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    product
  }
};

//Remove product to cart
const removeFromCart = product => {
  return {
    type: 'REMOVE_FROM_CART',
    product
  }
};

//Load products
const loadProducts = () => {
  let products = ProductList;
  return {
    type: 'LOAD_PRODUCTS',
    products: products,
    cart: []
  };
}

export { addToCart, removeFromCart, loadProducts };