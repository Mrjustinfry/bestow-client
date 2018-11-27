import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM testing

import store from '../store';
import AddButton from './addButton';

describe('<AddButton />', () => {
    it('Renders without crashing', () => {
        shallow(<AddButton store={store} />);
    });
  });
