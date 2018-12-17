import React from 'react';
import {shallow} from 'enzyme';

import store from '../store';
import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header store={store} name={"user"} />);
    });

  });
