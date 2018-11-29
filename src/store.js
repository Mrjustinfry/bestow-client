import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {itemReducer} from './reducers/reducer';

//export default createStore(itemReducer);
export default createStore(
    combineReducers({
      form: formReducer,
      bestow: itemReducer
    })
);

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
