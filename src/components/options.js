import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteAuthToken, removeAuthToken} from '../actions/actions';
import {clearAuthToken} from '../validator';

import './options.css';

export class Options extends Component {
constructor(props) {
  super(props);

  this.state = {
    visible: true
  }
this.toggleHidden = this.toggleHidden.bind(this);
this.logOut = this.logOut.bind(this);
}

toggleHidden () {
  this.setState({
    visible: !this.state.visible
  })
}
logOut() {
  this.props.deleteAuthToken();
  clearAuthToken();
  this.setState({
    hasAuthToken: false
  })
}


  render(props) {
    if(this.state.visible === true) {
    return (
      <ul className="optionsBox" aria-live="polite">
        <li><p className="optionsClose" role="button" onClick={this.toggleHidden}>close</p></li>
        <li className="logoutBtn" role="button" onClick={this.logOut}>log out</li>
        <li className="infoBtn" role="button"><Link to="/info" style={{textDecoration:'none',color:'black'}}>info</Link></li>
        <li className="contactBtn" role="button"><a href="mailto:mrjustinfry@gmail.com" style={{textDecoration:'none',color:'black'}}>contact</a></li>
        <li className="deleteUserBtn" role="button"><Link to="/delete" style={{textDecoration:'none',color:'inherit'}}>delete account</Link></li>
      </ul>
    )} else {
      return (
        <img
          src="/menu.png"
          alt="menu"
          className="optionsBtn"
          role="button"
          onClick={this.toggleHidden} />
      )
    }
  }
};

const mapStateToProps = state => ({
    theUser: state.bestow.theUser,
    hasAuthToken: state.hasAuthToken
});

export default connect(mapStateToProps, {deleteAuthToken, removeAuthToken, clearAuthToken})(Options)
