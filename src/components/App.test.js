import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import App from './App';

describe('<App />', () => {
    it('Renders without crashing', () => {
        shallow(<App />);
    });
  });
