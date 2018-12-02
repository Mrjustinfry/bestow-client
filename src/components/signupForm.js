import React, { Component } from 'react';
import {reduxForm, Field, focus, change, untouch} from 'redux-form';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
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
      let resetInput = (formName, inputsObj) => {
             Object.keys(inputsObj).forEach(inputKey => {
                 this.props.dispatch(change(formName, inputKey, inputsObj[inputKey]));
                 this.props.dispatch(untouch(formName, inputKey));
             });
       }
       resetInput('signup', {
       firstName: ' ',
       lastName: ' ',
       username: ' ',
       password: ' ',
       passwordAgain: ' '
   });
   this.props.history.push('/');
  }

  render() {
      return (
          <div className="signupForm suContainer">
            <form
                className="signupForm"
                onSubmit={this.onSubmit.bind(this)}>
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
                  validate={[required, valid]}
                  ref={input => (this.password = input)}
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

const SignupFormConnected = connect(mapStateToProps, {addUser})(SignupForm)

export default withRouter(reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupFormConnected));
