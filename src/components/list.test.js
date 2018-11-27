import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import store from '../store';
import List from './list';

describe('<List />', () => {
    it('Renders without crashing', () => {
        shallow(<List store={store} />);
    });
  });
