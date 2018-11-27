import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import store from '../store';
import LoginForm from './loginForm';

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm store={store} />);
    });
  });
