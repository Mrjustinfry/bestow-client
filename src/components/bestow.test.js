import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import Bestow from './bestow';

describe('<Bestow />', () => {
    it('Renders without crashing', () => {
        shallow(<Bestow />);
    });
  });
