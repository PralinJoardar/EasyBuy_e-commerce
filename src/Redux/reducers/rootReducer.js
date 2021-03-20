import { combineReducers } from "redux";
import { fetchProductsReducer } from "./fetchProductsReducer";
import { addToCartReducer } from "./addToCartReducer";
const rootReducer = combineReducers({
  fetchProductsReducer,
  addToCartReducer,
});
export default rootReducer;
