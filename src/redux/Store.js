import { applyMiddleware, createStore } from "redux";
import getReducer from "./Reducer";
import thunk from "redux-thunk";
const store = createStore(getReducer, applyMiddleware(thunk));
export default store;
