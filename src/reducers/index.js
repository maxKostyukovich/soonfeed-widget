import { combineReducers } from 'redux';
import applicationReducer from './appReducer'
import eventReducer from "./eventReducer";

const appReducer = combineReducers({
    applicationReducer,
    eventReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;