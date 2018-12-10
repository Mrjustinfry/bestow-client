import React, { Component } from 'react';
import {reduxForm, Field, focus, change, untouch, SubmissionError} from 'redux-form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Input from './input';
import {required, valid, verify, length} from '../validator';

import {signupUser} from '../actions/actions';

import './signupForm.css';

const passLength = length({min:5,max:72})
const verifyPass = verify('password');

class SignupForm extends Component {

submit = () => {
      const firstName = this.firstName.value.trim();
      const lastName = this.lastName.value.trim();
      const username = this.username.value.trim();
      const password = this.password.value.trim();
      return new Promise((resolve, reject) => {
        this.props.signupUser({
          firstName: firstName,
          lastName: lastName,
          username: username,
          password: password
        }).then(() => resolve()).then(this.props.history.push('/'))
        .catch(err => {
            const {code} = err;
            const message =
                code === 401
                    ? 'Something is missing'
                    : 'Hmm, looks like something went wrong';
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
         resetInput('signup', {
         firstName: '',
         lastName: '',
         username: '',
         password: '',
         passwordAgain: ''
     });
      })
  }

  render(props) {
    let error;
      if (this.props.error) {
          error = (
              <div className="form-error" aria-live="polite">
                  {this.props.error}
              </div>
          );
      }
      return (
          <div className="signupForm suContainer">
            <form
                className="signupForm"
                onSubmit={this.props.handleSubmit(this.submit)}>
              <h4 className="suHead">Sign up now!</h4>
              <Field
                  name="firstName"
                  type="text"
                  component={Input}
                  label="First Name"
                  display="firstIn sfIn"
                  validate={[required, valid]}
                  ref={input => (this.firstName = input)}
              />
              <br />
              <Field
                  name="lastName"
                  type="text"
                  component={Input}
                  label="Last Name"
                  display="LastIn sfIn"
                  validate={[required, valid]}
                  ref={input => (this.lastName = input)}
              />
              <br />
              <Field
                  name="username"
                  type="text"
                  component={Input}
                  label="Username"
                  display="userIn sfIn"
                  validate={[required, valid]}
                  ref={input => (this.username = input)}
              />
              <br />
              <Field
                  name="password"
                  type="password"
                  component={Input}
                  label="Password"
                  display="passIn sfIn"
                  validate={[required, valid, passLength]}
                  ref={input => (this.password = input)}
              />
              <br />
              <Field
                  name="passwordAgain"
                  type="password"
                  component={Input}
                  label="Verify Password"
                  display="passAgainIn sfIn"
                  validate={[required, valid, verifyPass]}
              />
              {error}
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
    loggedIn: state.bestow.loggedIn,
    theUser: state.bestow.theUser,
    items: state.bestow.items,
    hasAuthToken: state.authToken !== null,
});

const SignupFormConnected = connect(mapStateToProps, {signupUser})(SignupForm)

export default withRouter(reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupFormConnected));
