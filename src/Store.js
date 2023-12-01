import RootReducer from "./Reducer/index.js"
import { legacy_createStore as createStore } from "redux"

const store = createStore(RootReducer);

export default store;