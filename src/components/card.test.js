import React from 'react';
import {shallow} from 'enzyme'; //don't forget to add "mount" for fullDOM

import store from '../store';
import Card from './card';

describe('<Card />', () => {
    it('Renders without crashing', () => {
        shallow(<Card store={store} />);
    });

    it('Renders the card initially', () => {
        const wrapper = shallow(<Card store={store} />);
        expect(wrapper.hasClass('itemCard')).toEqual(false);
    });

  });
