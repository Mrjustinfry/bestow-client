import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import Filter from './filter';

describe('<Filter />', () => {
    it('Renders without crashing', () => {
        shallow(<Filter />);
    });
  });
