import React, { Component } from 'react';
import {reduxForm, Field, focus, change, untouch} from 'redux-form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {loginUser} from '../actions/actions';
import Input from './input';
import {required, valid} from '../validator';

import './loginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit(e) {
      e.preventDefault();
      /*const username = this.username.value.trim();
      const password = this.password.value.trim();;
      this.props.loginUser({
        username: username,
        password: password
      });*/
      let resetInput = (formName, inputsObj) => {
             Object.keys(inputsObj).forEach(inputKey => {
                 this.props.dispatch(change(formName, inputKey, inputsObj[inputKey]));
                 this.props.dispatch(untouch(formName, inputKey));
             });
       }
       resetInput('login', {
       username: ' ',
       password: ' ',
   });
   this.props.history.push('/home');
  }

  render() {
      return (
          <div className="loginForm">
            <form
              onSubmit={this.onSubmit.bind(this)}>
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

const LoginFormConnected = connect()(LoginForm)

export default withRouter(reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('login', Object.keys(errors)[0]))
})(LoginFormConnected));
