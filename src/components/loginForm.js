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



export default connect()(LoginForm);
