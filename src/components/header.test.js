import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import store from '../store';
import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header store={store} />);
    });
  });
