import { combineReducers, createStore } from "redux";
import shopReducer from "./shop-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    shop: shopReducer
})
const store = createStore(rootReducer, composeWithDevTools())

export default store;