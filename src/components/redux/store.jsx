
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import reducer from "./reducer";
import { logger } from "redux-logger";


const initialState = {
    cart: [],
    products: []
}


export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(logger, thunk)
))