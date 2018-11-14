import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import Footer from './footer';

describe('<Footer />', () => {
    it('Renders without crashing', () => {
        shallow(<Footer />);
    });
  });
