import {itemReducer} from './reducer';
import {addItem, signupSuccess} from '../actions/actions';

describe('itemReducer', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = itemReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
          authToken: null,
          theUser: null,
          loading: false,
          error: null,
          loggedIn: '',
          searchItem: '',
          signIn: false,
          users: [],
          searchCollection: [],
          items: []
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = itemReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('signupSuccess', () => {
    it('Should signup a user', () => {
        let loading;
        let signIn;
        let state = {
          loading: true,
          signIn: false
        };
        state = itemReducer(state, signupSuccess(loading));
        state = itemReducer(state, signupSuccess(signIn));
        expect(state).toEqual({
          loading: false,
          signIn: true
        });
    });
});
});
