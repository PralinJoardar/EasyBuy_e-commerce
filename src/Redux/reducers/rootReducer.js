import { combineReducers } from "redux";
import { fetchProductsReducer } from "./fetchProductsReducer";
import { addToCartReducer } from "./addToCartReducer";
import { loginReducer } from "./loginReducer";
const rootReducer = combineReducers({
  fetchProductsReducer,
  addToCartReducer,
  loginReducer,
});
export default rootReducer;
