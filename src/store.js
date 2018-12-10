import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {itemReducer} from './reducers/reducer';

const store = createStore(combineReducers({
      form: formReducer,
      bestow: itemReducer
    }),
    applyMiddleware(thunk)
);

export default store;
