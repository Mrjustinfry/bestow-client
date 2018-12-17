import React, {Component} from 'react';
import {connect} from 'react-redux';

import Item from './item';

import './list.css';

class List extends Component {

  render() {
    return (
      <div className="listContainer">
          <ul className="items">
              <Item />
          </ul>
      </div>
    )
}
}

export default connect()(List);
