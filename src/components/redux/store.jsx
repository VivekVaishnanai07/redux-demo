import { combineReducers, createStore } from "redux";
import Reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    shop: Reducer
})
const store = createStore(rootReducer, composeWithDevTools())

export default store;