const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        products: action.products,
        cart: action.cart
      }
    case 'ADD_TO_CART':
      console.log(action)
      return {
        cart: state.cart.concat(action.product),
        products: state.products
      }
    case 'REMOVE_FROM_CART':
      return {
        cart: state.cart.filter(product => product !== action.product),
        products: state.products.concat(action.product)
      }
    default:
      return state
  }
}

export default reducer;