import React, { Component } from 'react';
import {connect} from 'react-redux';

import LoginForm from './loginForm';
import Footer from './footer';
import Info from './info';

import './App.css';

class Landing extends Component {
  render() {
    return (
            <div className="app">
                <img src="/bestowL.png" alt="logo" className="logo" />
                <LoginForm />
                <Footer />
            </div>
    );
  }
}

export default connect()(Landing);
