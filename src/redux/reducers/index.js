import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import userReducer from "./userReducer";
import modulesReducer from "./modulesReducer";
import tagsReducer from "./tagsReduces";

const rootReducer = combineReducers({
  questionsReducer,
  userReducer,
  modulesReducer,
  tagsReducer,
});

export default rootReducer;
