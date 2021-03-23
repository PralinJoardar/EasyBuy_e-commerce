import { FETCH_PRODUCTS, LOADING, ERROR } from "../constants";
import axios from "axios";
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch({ type: LOADING });
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((response) => {
        const products = response.data;
        dispatch({
          type: FETCH_PRODUCTS,
          payload: products,
        });
      })
      .catch((errorResponse) => {
        const error = errorResponse.message;
        dispatch({
          type: ERROR,
          payload: error,
        });
      });
  };
};
