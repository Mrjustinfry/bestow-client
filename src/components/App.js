import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {refreshAuthToken} from '../actions/actions';

import Bestow from './bestow';
import Landing from './landing';
import Info from './info';
import DeleteUser from './deleteUser';

import './App.css';
import './loginForm.css';

class App extends Component {

  componentWillUpdate(prevProps) {
    /*if(prevProps.theUser && !this.props.theUser) {
      return this.setState({theUser: this.props.theUser});
    } else*/ if (!prevProps.loggedIn && this.props.loggedIn) {
      return this.stopRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      return this.startRefresh();
    }
  }

  componentWillUnmount() {
    this.stopRefresh();
  }

  startRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000
    );
  }

  stopRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render(props) {
    return (
        <Router>
                <main>
                  <Switch>
                    <Route exact path="/"
                      component={Landing}
                      loggedIn={this.props.loggedIn}
                      />
                    <Route exact path="/home"
                      component={Bestow}
                      theUser={this.props.theUser}
                      />
                    <Route exact path="/info" component={Info} />
                    <Route exact path="/delete"
                      component={DeleteUser}
                      //theUser={this.props.theUser}
                      />
                  </Switch>
                </main>
        </Router>
    );
  }
}

const mapStateToProps = state => ({
    users: state.bestow.users,
    items: state.bestow.items,
    theUser: state.bestow.theUser,
    hasAuthToken: state.authToken !== null,
    //loggedIn: state.bestow.theUser !== null
});

export default connect(mapStateToProps)(App);
