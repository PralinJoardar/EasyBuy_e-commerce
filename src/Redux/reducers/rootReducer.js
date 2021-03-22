import { combineReducers } from "redux";
import { fetchProductsReducer } from "./fetchProductsReducer";
import { addToCartReducer } from "./addToCartReducer";
import { loginReducer } from "./loginReducer";
import { cartQuantityReducer } from "./cartQuantityReducer";
import { userNameReducer } from "./userNameReducer";
const rootReducer = combineReducers({
  fetchProductsReducer,
  addToCartReducer,
  loginReducer,
  cartQuantityReducer,
  userNameReducer,
});
export default rootReducer;
