import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Bestow from './bestow';
import Landing from './landing';

import './App.css';
import './loginForm.css';
import './bestow.css';
import './card.css';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
                <main>
                  <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/bestow" component={Bestow} />
                  </Switch>
                </main>
            </div>
        </Router>
    );
  }
}

const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps)(App);
