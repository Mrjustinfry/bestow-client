import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import Card from './card';

describe('<Card />', () => {
    it('Renders without crashing', () => {
        shallow(<Card />);
    });
  });
