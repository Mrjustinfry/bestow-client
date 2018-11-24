import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addUser} from '../actions/actions';

import './signupForm.css';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
      e.preventDefault();
      const firstName = this.firstName.value.trim();
      const lastName = this.lastName.value.trim();
      const username = this.username.value.trim();
      const password = this.password.value.trim();;
      this.props.addUser({
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password
      });
      this.firstName.value = '';
      this.lastName.value = '';
      this.username.value = '';
      this.password.value = '';

  }

  render() {
      return (
          <div className="signupForm">
            <form onSubmit={this.onSubmit}>
              <h4>Sign up now!</h4>
              <label>First name
              <input type="text" ref={input => this.firstName = input} /></label>
              <br />
              <label>Last name
              <input type="text" ref={input => this.lastName = input} /></label>
              <br />
              <label>Username
              <input type="text" ref={input => this.username = input} /></label>
              <br />
              <label>Password
              <input type="password" ref={input => this.password = input} /></label>
              <br />
              <label>Re-enter Password
              <input type="password" /></label>
              <br />
              <button>Submit</button>
            </form>
          </div>
      );
  }
}

const mapStateToProps = state => ({
  users: {
    firstName: state.firstName,
    lastName: state.lastName,
    username: state.username,
    password: state.password
  }
})

export default connect(mapStateToProps, {addUser})(SignupForm);
