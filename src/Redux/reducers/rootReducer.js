import { combineReducers } from "redux";
import { fetchProductsReducer } from "./fetchProductsReducer";
import { addToCartReducer } from "./addToCartReducer";
import { loginReducer } from "./loginReducer";
import { cartQuantityReducer } from "./cartQuantityReducer";
const rootReducer = combineReducers({
  fetchProductsReducer,
  addToCartReducer,
  loginReducer,
  cartQuantityReducer,
});
export default rootReducer;
