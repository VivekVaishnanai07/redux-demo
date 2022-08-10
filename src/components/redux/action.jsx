import { ProductList } from '../../util/constant';

const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    product,
  };
};

const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    product,
  };
};

const loadProducts = () => {
  let products = ProductList;
  return {
    type: 'LOAD_PRODUCTS',
    products: products,
    cart: [],
  };
};

export { addToCart, removeFromCart, loadProducts };
