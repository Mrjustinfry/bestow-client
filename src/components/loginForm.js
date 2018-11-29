import React, { Component } from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';

import Input from './input';
import {required, valid} from '../validator';

import './loginForm.css';

class LoginForm extends Component {
  render() {
      return (
          <div className="loginForm">
            <form
              onSubmit={this.onSubmit}>
            <Field
                name="username"
                type="text"
                component={Input}
                display="logInput"
                label="Username"
                validate={[required, valid]}
            />
            <br />
            <Field
                name="password"
                type="password"
                component={Input}
                display="logInput"
                label="Password"
                validate={[required, valid]}
            />
              <br />
                <button
                  className="logBtn"
                  disabled={this.props.pristine || this.props.submitting}>
                  Sign In</button>
            </form>
          </div>
      );
  }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('login', Object.keys(errors)[0]))
})(LoginForm);
