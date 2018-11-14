import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import AddItem from './addItem';

describe('<AddItem />', () => {
    it('Renders without crashing', () => {
        shallow(<AddItem />);
    });
  });
