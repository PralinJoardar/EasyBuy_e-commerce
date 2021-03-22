import { CART_QUANTITY, CART_QUANTITY_CLEAR } from "../constants";
export const cartQuantityReducer = (state = 0, action) => {
  switch (action.type) {
    case CART_QUANTITY:
      return (state = state + 1);
    case CART_QUANTITY_CLEAR:
      return (state = 0);
    default:
      return state;
  }
};
