import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import Info from './info';

describe('<Info />', () => {
    it('Renders without crashing', () => {
        shallow(<Info />);
    });
  });
