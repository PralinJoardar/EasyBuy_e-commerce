import { ADD_TO_CART, CHECKOUT } from "../../Redux/constants";

export const addToCartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { product: action.payload }];
    case CHECKOUT:
      return state;
    default:
      return state;
  }
};
