import React from 'react';
import {shallow} from 'enzyme';

import store from '../store';
import Filter from './filter';

describe('<Filter />', () => {
    it('Renders without crashing', () => {
        shallow(<Filter store={store} />);
    });

  });
