import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import Options from './options';

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(<Options />);
    });
  });
