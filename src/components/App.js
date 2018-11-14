import React, { Component } from 'react';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LoginForm from './loginForm';
import Footer from './footer';

import './App.css';

class App extends Component {
  render() {
    return (
            <div className="app">
                <main>
                <img src="/bestowL.png" alt="logo" className="logo" />
                <LoginForm />
                </main>
                <Footer />
            </div>
    );
  }
}
/*
class App extends Component {
  render() {
    return (
        //<Router>
            <div className="app">
                <main>
                <p>hello</p>
                //add "exact path" and "component" to routes
                    //<Route  />
                    //<Route  />
                </main>
            </div>
        //</Router>
    );
  }
}
*/
export default App;
