import { combineReducers } from "redux";
import { fetchProductsReducer } from "./fetchProductsReducer";
const rootReducer = combineReducers({
  fetchProductsReducer,
});
export default rootReducer;
