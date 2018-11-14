import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM testing

import AddButton from './addItem';

describe('<AddButton />', () => {
    it('Renders without crashing', () => {
        shallow(<AddButton />);
    });
  });
