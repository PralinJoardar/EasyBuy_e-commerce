import { ADD_TO_CART } from "../../Redux/constants";

export const addToCartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return[
        ...state,
        {product: action.payload}
      ]
    default:
      return state;
  }
};
