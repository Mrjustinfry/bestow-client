import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './header';
import AddButton from './addButton';
import List from './list';

import './bestow.css';

class Bestow extends Component {
  render() {
      return (
          <div className="bestow">
          <Header />
          <List />
          <AddButton />
          </div>
      );
  }
}

const mapStateToProps = state => ({
  filter: state.filter,
    items: state.items
});

export default connect(mapStateToProps)(Bestow);
