import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './loginForm';
import Footer from './footer';

import './App.css';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: ''
    }
  }

  componentWillUpdate(prevProps) {
    /*if (!prevProps.theUser && this.props.theUser) {
        return this.setState({theUser: prevProps.theUser})
    } else*/ if (prevProps.loggedIn && !this.props.loggedIn) {
        return this.setState({loggedIn: false});
    } else if (!prevProps.loggedIn && this.props.loggedIn) {
        return this.setState({loggedIn: true});
    }
  }


  render(props) {
    if (this.props.loggedIn) {
        return <Redirect to="/home" />;
      }
    return (
            <div className="app">
                <img src="/bestowL.png" alt="logo" className="logo" />
                <LoginForm />
                <Footer />
            </div>
    );
  }
}

Landing.defaultProps = {
  loggedIn: false
}

const mapStateToProps = state => ({
  theUser: state.bestow.theUser,
  loggedIn: state.bestow.theUser !== null
})

export default connect(mapStateToProps)(Landing);
