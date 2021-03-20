import { ADD_TO_CART } from "../../Redux/constants";
const initialState = {
  productId: 0,
};
export const addTocartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        productId: action.payload,
      };

    default:
      return state;
  }
};
