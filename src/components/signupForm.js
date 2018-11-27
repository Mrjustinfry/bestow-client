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
          <div className="signupForm suContainer">
            <form
                className="signupForm"
                onSubmit={this.onSubmit}>
              <h4 className="suHead">Sign up now!</h4>
              <label className="suLabel">First name<br />
                <input
                    className="firstIn sfIn"
                    type="text"
                    htmlFor="firstName"
                    ref={input => this.firstName = input} /></label>
              <br />
              <label className="suLabel">Last name<br />
                <input
                    className="lastIn sfIn"
                    type="text"
                    htmlFor="lastName"
                    ref={input => this.lastName = input} /></label>
              <br />
              <label className="suLabel">Username<br />
                <input
                    className="userIn sfIn"
                    type="text"
                    htmlFor="username"
                    ref={input => this.username = input} /></label>
              <br />
              <label className="suLabel">Password<br />
                <input
                    className="passIn sfIn"
                    type="password"
                    htmlFor="password"
                    ref={input => this.password = input} /></label>
              <br />
              <label className="suLabel">Verify Password<br />
                <input
                    className="passAgainIn sfIn"
                    type="password"
                    htmlFor="passwordAgain" /></label>
              <br />
              <button
                    className="signupBtn"
                    type="submit">
                    Sign Up
                </button>
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
