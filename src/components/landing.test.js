import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import Landing from './landing';

describe('<Landing />', () => {
    it('Renders without crashing', () => {
        shallow(<Landing />);
    });
  });
