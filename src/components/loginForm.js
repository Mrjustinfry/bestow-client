import React, { Component } from 'react';

import './loginForm.css';

class LoginForm extends Component {
  render() {
      return (
          <div className="loginForm">
            <form>
              <label>Username
              <br />
              <input type="text" /></label>
              <br />
              <label>Password
              <br />
              <input type="password" /></label>
              <br />
              <button>Submit</button>
            </form>
          </div>
      );
  }
}

export default LoginForm;
