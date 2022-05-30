import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import userReducer from "./userReducer";
import modulesReducer from "./modulesReducer";
import tagsReducer from "./tagsReduces";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
  questionsReducer,
  userReducer,
  modulesReducer,
  tagsReducer,
  commentsReducer,
});

export default rootReducer;
