import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import userReducer from './reducer';
const rootReducer = combineReducers({
  user: userReducer,

});
const composeEnhancers = process.env.REACT_APP_SHOW_REDUX ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
