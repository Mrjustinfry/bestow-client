import React, { Component } from 'react';

import './signupForm.css';

class SignupForm extends Component {
  render() {
      return (
          <div className="signupForm">
            <form>
              <h4>Sign up now!</h4>
              <label>First name
              <input type="text" /></label>
              <br />
              <label>Last name
              <input type="text" /></label>
              <br />
              <label>Username
              <input type="text" /></label>
              <br />
              <label>Password
              <input type="password" /></label>
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

export default SignupForm;
