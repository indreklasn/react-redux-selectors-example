import { combineReducers } from "redux";
import petsReducer from "./petsReducer";

const rootReducer = combineReducers({
  pets: petsReducer
});

export default rootReducer;
