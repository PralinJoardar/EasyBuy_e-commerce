import { FETCH_PRODUCTS, LOADING, ERROR } from "../constants";
const initialState = {
  loading: false,
  products: [],
  error: false,
  errorMessage: "",
};

export const fetchProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        loading: true,
        products: [],
        error: false,
        errorMessage: "",
      };
    }
    case FETCH_PRODUCTS:
      return {
        loading: false,
        products: action.payload,
        error: false,
        errorMessage: "",
      };
    case ERROR:
      return {
        loading: false,
        products: [],
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
