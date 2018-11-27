import React from 'react';
import {connect} from 'react-redux';

import Item from './item';

import './list.css';

export function List(props) {
    return (
      <div className="listContainer">
          <ul className="items">
              <Item />
          </ul>
      </div>
    )
}

export default connect()(List);
