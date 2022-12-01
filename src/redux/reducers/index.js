import { combineReducers } from "redux";
import { productReducer } from "./product-reducer";
import { selectedProductReducer } from "./product-reducer";

const reducers = combineReducers({
  productReducer: productReducer,
  selectedProductReducer: selectedProductReducer,
});

export default reducers;
