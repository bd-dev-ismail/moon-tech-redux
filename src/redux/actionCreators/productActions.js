import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
