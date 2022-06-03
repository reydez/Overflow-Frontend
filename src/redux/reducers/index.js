import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import userReducer from "./userReducer";
import modulesReducer from "./modulesReducer";
import tagsReducer from "./tagsReduces";
import commentsReducer from "./commentsReducer";
import loginGit from "./loginGit";

const rootReducer = combineReducers({
  questionsReducer,
  userReducer,
  modulesReducer,
  tagsReducer,
  commentsReducer,
  loginGit,
});

export default rootReducer;
