import React, { Component } from 'react';
import {connect} from 'react-redux';

import './loginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div className="loginForm">
            <form>
              <label>Username
              <br />
              <input type="text" className="logInput" /></label>
              <br />
              <label>Password
              <br />
              <input type="password" className="logInput" /></label>
              <br />
              <button className="logBtn">Sign In</button>
            </form>
          </div>
      );
  }
}



export default connect(store)(LoginForm);
