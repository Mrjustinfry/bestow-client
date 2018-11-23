import {SET_FILTER,
        ADD_ITEM,
        EDIT_ITEM,
        DELETE_ITEM,
        ADD_USER,
        DELETE_USER,
        LOGIN_USER,
        GET_ITEMS} from '../actions/actions';

const initialState = {
  items: [
      {
        id: 1,
        who: 'karen',
        what: 'phone charger',
        when: '11-14-18',
        how: 'bestowed'
      },
      {
        id: 2,
        who: 'John',
        what: 'Harry Potter',
        when: '10-31-18',
        how: 'bestowed'
      },
      {
        id: 3,
        who: 'Jane',
        what: 'Bundt pan',
        when: '09-12-18',
        how: 'borrowed'
      },
      {
        id: 4,
        who: 'Phillip',
        what: 'Pulp Fiction',
        when: '03-03-18',
        how: 'bestowed'
      },
  ]
};


export const reducer = (state=initialState, action) => {
  const {type} = action;
  switch(type){
    case ADD_ITEM:
        return Object.assign({}, state, {
        items: [...state.items, {
            who: action.items.who,
            what: action.items.what,
            when: action.items.when,
            how: action.items.how
        }]
      });
    case GET_ITEMS:
      return state;
    case EDIT_ITEM:
      return Object.assign({}, state, {

      });
    case DELETE_ITEM:
      return Object.assign({}, state, {

      });
    case ADD_USER:
      return Object.assign({}, state, {

      });
    case DELETE_USER:
      return Object.assign({}, state, {

      });
    case LOGIN_USER:
      return Object.assign({}, state, {

      });
    case SET_FILTER:
      return Object.assign({}, state, {
          filter: action.filter
        });
      default:
        return state;
  }
};
