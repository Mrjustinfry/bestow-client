
export const ADD_ITEM = 'ADD_ITEM';
export const addItem = items => ({
    type: ADD_ITEM,
    items
});

export const GET_ITEMS = 'GET_ITEMS';
export const getItems = items => ({
  type: GET_ITEMS,
  items
})

export const EDIT_ITEM = 'EDIT_ITEM';
export const editItem = item => ({
    type: EDIT_ITEM,
    item
});

export const DELETE_ITEM = 'DELETE_ITEM';
export const deleteItem = item => ({
  type: DELETE_ITEM,
  item
});

export const ADD_USER ='ADD_USER';
export const addUser = user => ({
  type: ADD_USER,
  user
});

export const DELETE_USER = 'DELETE_USER';
export const deleteUser = user => ({
  type: DELETE_USER,
  user
});

export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = user => ({
  type: LOGIN_USER,
  user
});

export const SET_FILTER = 'SET_FILTER';
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});
