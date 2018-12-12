import {
        ADD_ITEM_SUCCESS,
        EDIT_ITEM_REQ, EDIT_ITEM_SUCCESS,
        DELETE_ITEM_SUCCESS,
        ADD_USER_SUCCESS,
        DELETE_USER_SUCCESS,
        GET_AUTH_TOKEN, DELETE_AUTH_TOKEN,
        AUTH_TOKEN_REQ, AUTH_TOKEN_SUCCESS, AUTH_TOKEN_ERROR,
        GET_ITEMS_REQ, GET_ITEMS_SUCCESS, GET_USER_ITEMS,
        TOGGLE_HIDDEN, TOGGLE_HIDDEN_COLLECTION, SET_FILTER, FILTER_ITEMS
      } from '../actions/actions';

const initialState = {
  authToken: null,
  theUser: null,
  loading: false,
  error: null,
  loggedIn: '',
  searchItem: '',
  users: [],
  searchCollection: [],
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
            hasAuthToken: false,
            searchCollection: []
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
        items: [...state.items],
        searchCollection: [...state.items],
        loading: false
      });
    case GET_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        items: action.items,
        loading: false
      });
    case GET_USER_ITEMS:
      const userItems = state.items.filter(item => item.user._id === action.userId);
      return Object.assign({}, state, {
            items: [...userItems]
      })
    case EDIT_ITEM_SUCCESS:
      const editItems = state.items.filter(item => item.cardId !== action.item.cardId);
      //const editItemsC = state.searchCollection.filter(item => item.cardId !== action.item.cardId);
      return Object.assign({}, state, {
          items: [...editItems, {
            cardId: action.item.cardId,
            hide: action.item.hide,
            who: action.item.who,
            what: action.item.what,
            when: action.item.when,
            how: action.item.how
          }],
          searchCollection: [...editItems, {
            cardId: action.item.cardId,
            hide: action.item.hide,
            who: action.item.who,
            what: action.item.what,
            when: action.item.when,
            how: action.item.how
          }],
          loading: false
      });
    case DELETE_ITEM_SUCCESS:
      const items = state.items.filter(item => item.cardId !== action.cardId);
          return Object.assign({}, state, {
            items: [...items],
            searchCollection: [...items],
            loading: false
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
          users: [...users],
          loading: false,
          hasAuthToken: false,
          theUser: null
        });

        // OTHER REDUCERS //
    case SET_FILTER:
      return Object.assign({}, state, {
          filter: action.filter
        });
    case FILTER_ITEMS:
      let filteredItems = state.items.filter(item => item.who.toLowerCase().indexOf(action.searchItem) !== -1 || item.what.toLowerCase().indexOf(action.searchItem) !== -1 || item.when.indexOf(action.searchItem) !== -1);
          return Object.assign({}, state, {
            items: [...state.items],
            searchCollection: filteredItems
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
      case TOGGLE_HIDDEN_COLLECTION:
        const indexItemC = state.searchCollection.findIndex(item => item.cardId === action.cardId);
        const itemToggleC = state.searchCollection[indexItemC];
        const itemsUpdatedC = [
          ...state.searchCollection.slice(0, indexItemC),
          {
            ...itemToggleC,
            hide: !itemToggleC.hide
          },
          ...state.searchCollection.slice(indexItemC+1)
        ]
        return Object.assign({}, state, {
            searchCollection: itemsUpdatedC,
        })
      default:
        return state;
  }
};
