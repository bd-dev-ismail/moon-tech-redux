import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const initalState = {
  cart: [],
};

const productsReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default productsReducer;
