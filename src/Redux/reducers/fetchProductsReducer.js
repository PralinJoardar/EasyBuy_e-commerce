import { FETCH_PRODUCTS } from "../constants";
const initialState = { products: [] };

export const fetchProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};
