import React, { Component } from 'react';
import {connect} from 'react-redux';

import Landing from './landing';
import Header from './header';
import AddButton from './addButton';
import List from './list';

class Bestow extends Component {

  render(props) {
    if(!localStorage.authToken) {
    return (
      <Landing />
    );
    }
      return (
          <div className="bestow" aria-live="polite">
            <Header />
            <List />
            <AddButton />
          </div>
      );
  }
}

Bestow.defaultProps = {
  theUser: 'Friend'
}


export default connect()(Bestow);
