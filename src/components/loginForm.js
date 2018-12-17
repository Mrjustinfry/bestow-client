import React, { Component } from 'react';
import {reduxForm, Field, focus, change, untouch, SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {loginUser} from '../actions/actions';
import Input from './input';
import {required, valid} from '../validator';

import './loginForm.css';

class LoginForm extends Component {
constructor(props) {
  super(props);

  this.state = {
    loggedIn: false
  }
}
  submit = () => {
      const username = this.username.value.trim();
      const password = this.password.value.trim();
      return new Promise((resolve, reject) => {
        this.props.loginUser({
          username: username,
          password: password,
          loggedIn: true
        }).then(() => resolve())
        .catch(err => {
            const {code} = err;
            const message =
                code === 401
                    ? 'Incorrect username or password'
                    : 'Unable to login, please try again';
            return reject(
              new SubmissionError({
                     _error: message
                 })
            )
        });
        let resetInput = (formName, inputsObj) => {
               Object.keys(inputsObj).forEach(inputKey => {
                   this.props.dispatch(change(formName, inputKey, inputsObj[inputKey]));
                   this.props.dispatch(untouch(formName, inputKey));
               });
         }
         resetInput('login', {
         username: '',
         password: '',
     });
      })
 }

  render(props) {
    let error;
    let load;
      if (this.props.error) {
          error = (
              <div className="formError" aria-live="polite">
                  {this.props.error}
              </div>
          );
      } else if(this.props.loading) {
        load = (
          <div className="formLoad" aria-live="polite">
            <p>Loading...</p>
          </div>
        )
      }
      return (
          <div className="loginForm">
            <form
              onSubmit={this.props.handleSubmit(this.submit)}>
            <Field
                name="username"
                type="text"
                component={Input}
                display="logInput"
                label="Username"
                validate={[required, valid]}
                ref={input => (this.username = input)}
            />
            <br />
            <Field
                name="password"
                type="password"
                component={Input}
                display="logInput"
                label="Password"
                validate={[required, valid]}
                ref={input => (this.password = input)}
            />
            {error}
            {load}
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

const mapStateToProps = state => ({
  loading: state.bestow.loading
})

const LoginFormConnected = connect(mapStateToProps, {loginUser})(LoginForm)

export default withRouter(reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('login', Object.keys(errors)[0]))
})(LoginFormConnected));
