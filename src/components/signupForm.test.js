import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import store from '../store';
import SignupForm from './signupForm';

describe('<SignupForm />', () => {
    it('Renders without crashing', () => {
        shallow(<SignupForm store={store} />);
    });
  });
