import { createStore } from "redux";
import rootReducer from "../reducer";
import { initialState } from "../const/initialState";

export default createStore(rootReducer, initialState);
