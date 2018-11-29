import React, { Component } from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, valid} from '../validator';

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
              <Field
                  name="firstName"
                  type="text"
                  component={Input}
                  label="First Name"
                  display="firstIn sfIn"
                  validate={[required, valid]}
              />
              <br />
              <Field
                  name="lastName"
                  type="text"
                  component={Input}
                  label="Last Name"
                  display="LastIn sfIn"
                  validate={[required, valid]}
              />
              <br />
              <Field
                  name="username"
                  type="text"
                  component={Input}
                  label="Username"
                  display="userIn sfIn"
                  validate={[required, valid]}
              />
              <br />
              <Field
                  name="password"
                  type="password"
                  component={Input}
                  label="Password"
                  display="passIn sfIn"
                  validate={[required, valid]}
              />
              <br />
              <Field
                  name="passwordAgain"
                  type="password"
                  component={Input}
                  label="Verify Password"
                  display="passAgainIn sfIn"
                  validate={[required, valid]}
              />
              <br />
              <button
                    className="signupBtn"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
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

export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm);
