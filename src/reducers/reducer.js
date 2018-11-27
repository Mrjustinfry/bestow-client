import {SET_FILTER,
        ADD_ITEM,
        EDIT_ITEM,
        DELETE_ITEM,
        ADD_USER,
        DELETE_USER,
        LOGIN_USER,
        GET_ITEMS,
        } from '../actions/actions';

const initialState = {
  users: [
    {
      userId: 1,
      firstName: 'Justin',
      lastName: 'Fry',
      username: 'Mrjustinfry'
    }
  ],
  items: [
      {
        cardId: 1,
        isHidden: false,
        who: 'karen',
        what: 'phone charger',
        when: '11-14-18',
        how: 'bestowed'
      },
      {
        cardId: 2,
        isHidden: false,
        who: 'John',
        what: 'Harry Potter',
        when: '10-31-18',
        how: 'bestowed'
      },
      {
        cardId: 3,
        isHidden: false,
        who: 'Jane',
        what: 'Bundt pan',
        when: '09-12-18',
        how: 'borrowed'
      },
      {
        cardId: 4,
        isHidden: false,
        who: 'Phillip',
        what: 'Pulp Fiction',
        when: '03-03-18',
        how: 'bestowed'
      },
  ]
};


export const itemReducer = (state=initialState, action) => {
  const {type} = action;
  switch(type){
    case ADD_ITEM:
        return Object.assign({}, state, {
        items: [...state.items, {
            cardId: 9,
            isHidden: true,
            who: action.items.who,
            what: action.items.what,
            when: action.items.when,
            how: action.items.how
        }]
      });
    case GET_ITEMS:
      return state;
    case EDIT_ITEM:
      const itemsEdit = state.items.filter(item => item.cardId === action.item);
        return Object.assign({}, state, {
          items: [...itemsEdit, {
              cardId: action.item.cardId,
              who: action.item.who,
              what: action.item.what,
              when: action.item.when,
              how: action.item.how
          }]
        });
    case DELETE_ITEM:
      const items = state.items.filter(item => item.cardId !== action.item);
          return Object.assign({}, state, {
            items: [...items]
        });
    case ADD_USER:
      return Object.assign({}, state, {
        users: [...state.users, {
            firstName: action.user.firstName,
            lastName: action.user.lastName,
            username: action.user.username,
            password: action.user.password
    }]
  });
    case DELETE_USER:
      const users = state.users.filter(user => user.userId !== action.user);
        return Object.assign({}, state, {
          users: [...users]
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
