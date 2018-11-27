import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Bestow from './bestow';
import Landing from './landing';
import Info from './info'

import './App.css';
import './loginForm.css';

class App extends Component {
  render() {
    return (
        <Router>
                <main>
                  <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/bestow" component={Bestow} />
                    <Route exact path="/info" component={Info} />
                  </Switch>
                </main>
        </Router>
    );
  }
}

const mapStateToProps = state => ({
    users: state.users,
    items: state.items
});

export default connect(mapStateToProps)(App);
