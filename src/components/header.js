import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../actions/actions';

import Filter from './filter';

import './filter.css';
import './header.css';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: this.props.loggedIn
    }
  }

giveGreeting() {
  let today = new Date();
  let now = today.getHours();

  if (now > 18) {
   return "Good evening ";
  }
  else if (now > 12) {
    return "Good afternoon ";
  }
  else if (now > 0) {
    return "Good morning ";
  }
  else {
    return "Hello ";
  }
}

getName() {
  if(!this.props.theUser) {
    return localStorage.localUserName;
  } else if (this.props.theUser) {
    return this.props.theUser.firstName;
  }
}

  render(props) {
    let message = this.giveGreeting();
    let name = this.getName();
      return (
        <header className="head">
          <h2 className="greeting">{message} {name}!</h2>
          <Filter />
        </header>
      );
  }
}



const mapStateToProps = (state) => ({
  theUser: state.bestow.theUser,
  users: state.users,
  filter: state.filter
});

export default connect(mapStateToProps, {loginUser})(Header);
