import { combineReducers } from "redux";
import rightReducer from "./rightReducer";
import leftReducer from "./leftReducer";

export default combineReducers({
  leftList: leftReducer
});
