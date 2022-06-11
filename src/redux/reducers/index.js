import { combineReducers } from "redux";
import questionsReducer from "./questionsReducer";
import userReducer from "./userReducer";
import modulesReducer from "./modulesReducer";
import tagsReducer from "./tagsReduces";
import commentsReducer from "./commentsReducer";
import favouritesReducer from "./favouritesReducer.js";
import inboxesReducer from "./InboxesReducer.js";

const rootReducer = combineReducers({
  questionsReducer,
  userReducer,
  modulesReducer,
  tagsReducer,
  commentsReducer,
  favouritesReducer,
  inboxesReducer,
});

export default rootReducer;
