import React, {Component} from 'react';
import {connect} from 'react-redux';

import Item from './item';

import './list.css';

class List extends Component {

  render(props) {
    return (
      <div className="listContainer">
          <ul className="items">
              <Item />
          </ul>
      </div>
    )
}
}

const mapStateToProps = state => ({
    theUser: state.bestow.theUser
});

export default connect(mapStateToProps)(List);
