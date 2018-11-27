import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './header';
import AddButton from './addButton';
import List from './list';
import Filter from './filter';

class Bestow extends Component {
  render() {
      return (
          <div className="bestow">
            <Header />
            <List listItems={Filter.listItems} />
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
