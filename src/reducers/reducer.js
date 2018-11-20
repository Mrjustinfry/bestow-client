import * as actions from '../actions/actions';

const initialState = {
  filter: '',
  user: '',
  items: [
      {
        id: 1,
        who: 'karen',
        what: 'phone charger',
        when: '11-14-18',
        how: 'Bestowed'
      },
      {
        id: 2,
        who: 'John',
        what: 'Harry Potter',
        when: '10-31-18',
        how: 'Bestowed'
      },
      {
        id: 3,
        who: 'Jane',
        what: 'Bundt pan',
        when: '09-12-18',
        how: 'Borrowed'
      },
      {
        id: 4,
        who: 'Phillip',
        what: 'Pulp Fiction',
        when: '03-03-18',
        how: 'Bestowed'
      },
  ]
};


export const reducer = (state=initialState, action) => {
  const {type} = action;
  switch(type){
    case [actions.ADD_ITEM]:
      return Object.assign({}, state, {
      items: [...state.items, {
          who: action.who,
          what: action.what,
          when: action.when,
          how: action.how
      }]
  });
  case [actions.GET_ITEMS]:
    return state.items

    case [actions.EDIT_ITEM]:
      return Object.assign({}, state, {
        items: [...state.items, {
            who: action.who,
            what: action.what,
            when: action.when,
            how: action.how
        }]
      });
    case [actions.DELETE_ITEM]:
      return Object.assign({}, state, {
        items: [...state.items, {
            who: action.who,
            what: action.what,
            when: action.when,
            how: action.how
        }]
      });
    case [actions.ADD_USER]:
      return Object.assign({}, state, {
        items: [...state.items, {
            who: action.who,
            what: action.what,
            when: action.when,
            how: action.how
        }]
      });
    case [actions.DELETE_USER]:
      return Object.assign({}, state, {
        items: [...state.items, {
            who: action.who,
            what: action.what,
            when: action.when,
            how: action.how
        }]
      });
    case [actions.LOGIN_USER]:
      return Object.assign({}, state, {
        items: [...state.items, {
          who: action.who,
          what: action.what,
          when: action.when,
          how: action.how
        }]
      });
      case [actions.SET_FILTER]:
      return Object.assign({}, state, {
          filter: action.filter
        });
      default:
        return state;
  }
};
