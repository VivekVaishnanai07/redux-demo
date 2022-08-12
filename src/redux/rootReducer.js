import { combineReducers } from "redux";

import ProductReducer from "./product-redux/product-reducer";
import UserReducer from "./user-list-redux/user-list-reducer";

const rootReducer = combineReducers({
  product: ProductReducer, user: UserReducer
});

export default rootReducer;
