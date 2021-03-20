import { FETCH_PRODUCTS } from "../constants";
import axios from "axios";
export const fetchProducts = () => {
  return (dispatch) => {
    axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline").then((response) => {
      const products = response.data;
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,
      });
    })
  };
};
