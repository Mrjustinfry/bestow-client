import {API_BASE_URL} from '../config';
import {modifyError} from './utils';
import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import {saveAuthToken, saveUserInfo, clearAuthToken} from '../validator';


//Item actions//
//POST request//
export const ADD_ITEM_REQ = 'ADD_ITEM_REQ';
export const addItemReq = items => ({
    type: ADD_ITEM_REQ,
    items
});

export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const addItemSuccess = items => ({
    type: ADD_ITEM_SUCCESS,
    items
});

export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';
export const addItemError = items => ({
    type: ADD_ITEM_ERROR,
    items
});

export const addItem = (item, callback) =>(dispatch, getState) => {
    dispatch(addItemReq());
    const authToken = getState().bestow.authToken;
    fetch(`${API_BASE_URL}/items`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${authToken}`
      }
    })
        .then(res => modifyError(res))
        .catch(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        dispatch(getItems())
        dispatch(addItemSuccess(item))
}

//GET request //
export const GET_ITEMS_REQ = 'GET_ITEMS_REQ';
export const getItemsReq = items => ({
  type: GET_ITEMS_REQ,
  items
});

export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const getItemsSuccess = items => ({
  type: GET_ITEMS_SUCCESS,
  items
});

export const GET_USER_ITEMS = 'GET_USER_ITEMS';
export const getUserItems = userId => ({
  type: GET_USER_ITEMS,
  userId
})

export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';
export const getItemsError = items => ({
  type: GET_ITEMS_ERROR,
  items
});

export const getItems = () => (dispatch, getState) => {
    const authToken = getState().bestow.authToken;
    dispatch(getItemsReq());
    return fetch(`${API_BASE_URL}/items`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => modifyError(res))
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(items => dispatch(getItemsSuccess(items)))
        .catch(error => getItemsError(error));
}

//PUT request //
export const EDIT_ITEM_REQ = 'EDIT_ITEM_REQ';
export const editItemReq = item => ({
    type: EDIT_ITEM_REQ,
    item
});

export const EDIT_ITEM_SUCCESS = 'EDIT_ITEM_SUCCESS';
export const editItemSuccess = item => ({
    type: EDIT_ITEM_SUCCESS,
    item
});

export const EDIT_ITEM_ERROR = 'EDIT_ITEM_ERROR';
export const editItemError = item => ({
    type: EDIT_ITEM_ERROR,
    item
});

export const editItem = (item, callback) =>(dispatch, getState) => {
    dispatch(editItemReq());
    const authToken = getState().bestow.authToken;
    fetch(`${API_BASE_URL}/items/${item.cardId}`, {
        method: 'PUT',
        body: JSON.stringify({
          cardId: item.cardId,
          who: item.who,
          what: item.what,
          how: item.how,
          when: item.when,
          hide: item.hide
        }),
        headers: {
          'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
        .then(res => modifyError(res))
        .catch(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        dispatch(getItems())
        dispatch(editItemSuccess(item))
}

//DELETE request //
export const DELETE_ITEM_REQ = 'DELETE_ITEM_REQ';
export const deleteItemReq = item => ({
  type: DELETE_ITEM_REQ,
  item
});

export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const deleteItemSuccess = cardId => ({
  type: DELETE_ITEM_SUCCESS,
  cardId
});

export const DELETE_ITEM_ERROR = 'DELETE_ITEM_ERROR';
export const deleteItemError = item => ({
  type: DELETE_ITEM_ERROR,
  item
});

export const deleteItem = (cardId) => (dispatch, getState) => {
    dispatch(deleteItemReq(cardId));
    const authToken = getState().bestow.authToken;
        fetch(`${API_BASE_URL}/items/${cardId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify(cardId)
        })
        .then(res => modifyError(res))
        //.then(dispatch(getItems()))
        .catch(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
            //dispatch(getItems())
            dispatch(deleteItemSuccess(cardId))
};

//User actions//
//POST request //
export const ADD_USER_REQ ='ADD_USER_REQ';
export const addUserReq = user => ({
  type: ADD_USER_REQ,
  user
});

export const ADD_USER_SUCCESS ='ADD_USER_SUCCESS';
export const addUserSuccess = user => ({
  type: ADD_USER_SUCCESS,
  user
});

export const ADD_USER_ERROR ='ADD_USER_ERROR';
export const addUserError = user => ({
  type: ADD_USER_ERROR,
  user
});

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  user
});

export const signupUser = user => dispatch => {
  dispatch(addUserReq());
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => modifyError(res))
        .then(res => res.json())
        .then(dispatch(addUserSuccess(user)));
};

//DELETE request //
export const DELETE_USER_REQ = 'DELETE_USER_REQ';
export const deleteUserReq = user => ({
  type: DELETE_USER_REQ,
  user
});

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const deleteUserSuccess = user => ({
  type: DELETE_USER_SUCCESS,
  user
});

export const DELETE_USER_ERROR = 'DELETE_USER_ERROR';
export const deleteUserError = user => ({
  type: DELETE_USER_ERROR,
  user
});

export const deleteUser = (userId) => (dispatch, getState) => {
    dispatch(deleteUserReq(userId));
    const authToken = getState().bestow.authToken;
    return (
        fetch(`${API_BASE_URL}/users/${userId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${authToken}`
            },
            body: JSON.stringify(userId)
        })
            .then(res => modifyError(res))
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Something went wrong'
                        : 'Unable to delete user';
                dispatch(deleteUserError(err));
                return Promise.reject(
                    new SubmissionError({
                        err: message
                    })
                );
            })
            .then(dispatch(deleteUserSuccess(userId)))
            .then(({authToken}) => removeAuthToken(authToken, dispatch))
            .catch(err => console.log(err))
    );
};


//Auth actions//
export const GET_AUTH_TOKEN = 'GET_AUTH_TOKEN';
export const getAuthToken = authToken => ({
    type: GET_AUTH_TOKEN,
    authToken
});

export const DELETE_AUTH_TOKEN = 'DELETE_AUTH_TOKEN';
export const deleteAuthToken = () => ({
    type: DELETE_AUTH_TOKEN,
});

export const AUTH_TOKEN_REQ = 'AUTH_TOKEN_REQ';
export const authTokenReq = () => ({
    type: AUTH_TOKEN_REQ,
});

export const AUTH_TOKEN_SUCCESS = 'AUTH_TOKEN_SUCCESS';
export const authTokenSuccess = theUser => ({
    type: AUTH_TOKEN_SUCCESS,
    theUser
});

export const AUTH_TOKEN_ERROR = 'AUTH_TOKEN_ERROR';
export const authTokenError = error => ({
    type: AUTH_TOKEN_ERROR,
    error
});

const storeAuthToken = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(getAuthToken(authToken));
    saveAuthToken(authToken);
    saveUserInfo(decodedToken.user);
    dispatch(authTokenSuccess(decodedToken.user));
};

export const loginUser = (user) => dispatch => {
  let username = user.username;
  let password = user.password;
    dispatch(authTokenReq());
    dispatch(getItems());
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
            .then(res => modifyError(res))
            .then(res => res.json())
            .then(({authToken}) => storeAuthToken(authToken, dispatch))
    )
};

export const refreshAuthToken = () => (dispatch, getState) => {
    dispatch(authTokenReq());
    const authToken = getState().bestow.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => modifyError(res))
        .then(res => res.json())
        .then(({authToken}) => storeAuthToken(authToken, dispatch))
        .catch(err => {
            dispatch(authTokenError(err));
            dispatch(deleteAuthToken());
            clearAuthToken(authToken);
        });
};

export const removeAuthToken = () => {
    clearAuthToken();
};

//other actions//
export const SET_FILTER = 'SET_FILTER';
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

export const FILTER_ITEMS = 'FILTER_ITEMS';
export const filterItems = searchItem => ({
  type: FILTER_ITEMS,
  searchItem
});

export const TOGGLE_HIDDEN = 'TOGGLE_HIDDEN';
export const toggleHidden = cardId => ({
    type: TOGGLE_HIDDEN,
    cardId
})

export const TOGGLE_HIDDEN_COLLECTION = 'TOGGLE_HIDDEN_COLLECTION';
export const toggleHiddenCollection = cardId => ({
    type: TOGGLE_HIDDEN_COLLECTION,
    cardId
})
