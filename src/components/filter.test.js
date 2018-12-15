import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import store from '../store';
import Filter from './filter';

import {setFilter} from '../actions/actions';

describe('<Filter />', () => {
    it('Renders without crashing', () => {
        shallow(<Filter store={store} />);
    });

  });
