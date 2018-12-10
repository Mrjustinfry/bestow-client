import {
        ADD_ITEM_SUCCESS,
        EDIT_ITEM_REQ, EDIT_ITEM_SUCCESS,
        DELETE_ITEM_SUCCESS,
        ADD_USER_SUCCESS,
        DELETE_USER_SUCCESS,
        GET_AUTH_TOKEN, DELETE_AUTH_TOKEN,
        AUTH_TOKEN_REQ, AUTH_TOKEN_SUCCESS, AUTH_TOKEN_ERROR,
        GET_ITEMS_REQ, GET_ITEMS_SUCCESS, GET_USER_ITEMS,
        TOGGLE_HIDDEN, SET_FILTER
      } from '../actions/actions';

const initialState = {
  authToken: null,
  theUser: null,
  loading: false,
  error: null,
  loggedIn: '',
  users: [
    {
      userId: 1,
      firstName: 'Justin',
      lastName: 'Fry',
      username: 'Mrjustinfry'
    }
  ],
  items: [
      /*{
        cardId: 1,
        hide: true,
        who: 'karen',
        what: 'phone charger',
        when: '11-14-18',
        how: 'bestowed'
      },
      {
        cardId: 2,
        hide: true,
        who: 'John',
        what: 'Harry Potter',
        when: '10-31-18',
        how: 'bestowed'
      },
      {
        cardId: 3,
        hide: true,
        who: 'Jane',
        what: 'Bundt pan',
        when: '09-12-18',
        how: 'borrowed'
      },
      {
        cardId: 4,
        hide: true,
        who: 'Phillip',
        what: 'Pulp Fiction',
        when: '03-03-18',
        how: 'bestowed'
      },*/
  ]
};


export const itemReducer = (state=initialState, action) => {
  const {type} = action;
  switch(type){

    // AUTH REDUCERS //
    case GET_AUTH_TOKEN:
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    case DELETE_AUTH_TOKEN:
        return Object.assign({}, state, {
            authToken: null,
            theUser: null,
            loggedIn: false,
            hasAuthToken: false
        });
    case AUTH_TOKEN_REQ:
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    case AUTH_TOKEN_SUCCESS:
        return Object.assign({}, state, {
            loading: false,
            theUser: action.theUser,
            loggedIn: true
        });
    case AUTH_TOKEN_ERROR:
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });

        // ITEM REDUCERS //
    case GET_ITEMS_REQ || EDIT_ITEM_REQ:
      return Object.assign({}, state, {
            loading: true,
            error: null
      })
    case ADD_ITEM_SUCCESS:
        return Object.assign({}, state, {
        items: [...state.items]
      });
    case GET_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        items: action.items
      });
    case GET_USER_ITEMS:
      const userItems = state.items.filter(item => item.user._id === action.userId);
      return Object.assign({}, state, {
            items: [...userItems]
      })
    case EDIT_ITEM_SUCCESS:
      const editItems = state.items.filter(item => item.cardId !== action.item.cardId);
      return Object.assign({}, state, {
          items: [...editItems, {
            cardId: action.item.cardId,
            hide: action.item.hide,
            who: action.item.who,
            what: action.item.what,
            when: action.item.when,
            how: action.item.how
          }]
      });
    case DELETE_ITEM_SUCCESS:
      const items = state.items.filter(item => item.cardId !== action.cardId);
          return Object.assign({}, state, {
            items: [...items]
        });

        // USER REDUCERS //
    case ADD_USER_SUCCESS://Duplicate????
      return Object.assign({}, state, {
        users: [...state.users, {
            firstName: action.user.firstName,
            lastName: action.user.lastName,
            username: action.user.username,
            password: action.user.password
        }]
      });
    case DELETE_USER_SUCCESS:
      const users = state.users.filter(user => user.userId !== action.user);
        return Object.assign({}, state, {
          users: [...users]
        });

        // OTHER REDUCERS //
    case SET_FILTER:
      return Object.assign({}, state, {
          filter: action.filter
        });
    case TOGGLE_HIDDEN:
      const indexItem = state.items.findIndex(item => item.cardId === action.cardId);
      const itemToggle = state.items[indexItem];
      const itemsUpdated = [
        ...state.items.slice(0, indexItem),
        {
          ...itemToggle,
          hide: !itemToggle.hide
        },
        ...state.items.slice(indexItem+1)
      ]
      return Object.assign({}, state, {
          items: itemsUpdated,
      })
      default:
        return state;
  }
};
