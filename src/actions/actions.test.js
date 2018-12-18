import {filterItems, FILTER_ITEMS,
        setFilter, SET_FILTER,
        toggleHidden, TOGGLE_HIDDEN,
        toggleHiddenCollection, TOGGLE_HIDDEN_COLLECTION
       } from './actions';

describe('setFilter', () => {
    it('Should return the action', () => {
        const filter = 'who';
        const action = setFilter(filter);
        expect(action.type).toEqual(SET_FILTER);
        expect(action.filter).toEqual(filter);
    });
});

describe('filterItems', () => {
    it('Should return the action', () => {
        const searchItem = 'test';
        const action = filterItems(searchItem);
        expect(action.type).toEqual(FILTER_ITEMS);
        expect(action.searchItem).toEqual(searchItem);
    });
});

describe('toggleHidden', () => {
    it('Should return the action', () => {
      const cardId = '123';
      const action = toggleHidden(cardId);
      expect(action.type).toEqual(TOGGLE_HIDDEN);
      expect(action.cardId).toEqual(cardId);
    });
});

describe('toggleHiddenCollection', () => {
    it('Should return the action', () => {
      const cardId = '345';
      const action = toggleHiddenCollection(cardId);
      expect(action.type).toEqual(TOGGLE_HIDDEN_COLLECTION);
      expect(action.cardId).toEqual(cardId);
    })
})
