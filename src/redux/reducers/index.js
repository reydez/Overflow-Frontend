import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    questionsReducer,
    userReducer
});

export default rootReducer;