import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { apiUserData } from "./user-list-redux/user-list-reducer";
const thunkMiddleware = require('redux-thunk').default

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
store.subscribe(() => { })
store.dispatch(apiUserData())
export default store;
