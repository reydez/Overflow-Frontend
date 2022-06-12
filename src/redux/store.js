import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import throttle from "lodash/throttle";
import { saveState } from "./localstorage/localstorage";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState({ questions: store.getState().questionsReducer.questions });
  }, 1000)
);

export default store;
