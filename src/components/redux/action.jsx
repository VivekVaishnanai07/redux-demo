import * as actionTypes from "./types"

//Add product to cart
export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID
    }
  }
};

//Remove product to cart
export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID
    }
  }
};

//Adjust qty 
export const adjustQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value
    }
  }
}

//Load products
export const loadProducts = (item) => {
  return {
    type: actionTypes.LOAD_PRODUCTS,
    payload: item
  };
}
