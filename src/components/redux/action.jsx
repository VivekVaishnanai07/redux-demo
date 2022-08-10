import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY,
  LOAD_PRODUCTS
} from "./types"

//Add product to cart
export const addToCart = (itemID) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemID
    }
  }
};

//Remove product to cart
export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemID
    }
  }
};

//Adjust qty 
export const adjustQty = (itemID, value) => {
  return {
    type: ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value
    }
  }
}

//Load products
export const loadProducts = (item) => {
  return {
    type: LOAD_PRODUCTS,
    payload: item
  };
}
