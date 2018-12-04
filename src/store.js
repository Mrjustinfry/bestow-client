import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {itemReducer} from './reducers/reducer';


export default createStore(
    combineReducers({
      form: formReducer,
      bestow: itemReducer
    })
);
