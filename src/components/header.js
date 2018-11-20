import React, { Component } from 'react';
import {connect} from 'react-redux';

import Filter from './filter';

import './filter.css';
import './header.css';

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {name: "Justin", filter: this.props.filter}
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

  render() {
    let message = this.giveGreeting();
      return (
        <header className="head">
        <h2>{message} {this.state.name}!</h2>
        <Filter filter={this.props.filter} />
        </header>
      );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filter
});

export default connect(mapStateToProps)(Header);
