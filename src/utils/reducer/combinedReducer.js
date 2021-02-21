import { combineReducers } from "redux";
import { plantReducer } from "./plantReducer";
import { userReducer } from "./userReducer";

const combinedReducer = combineReducers({
  user: userReducer,
  plants: plantReducer,
});

export default combinedReducer;
