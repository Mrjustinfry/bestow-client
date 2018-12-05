import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './options.css';

export class Options extends Component {
constructor(props) {
  super(props);

  this.state = {
    visible: true
  }
this.toggleHidden = this.toggleHidden.bind(this);
}

toggleHidden () {
  this.setState({
    visible: !this.state.visible
  })
}

  render() {
    if(this.state.visible === true) {
    return (
      <ul className="optionsBox">
        <li><p className="optionsClose" onClick={this.toggleHidden}>close</p></li>
        <li className="logoutBtn">log out</li>
        <li className="infoBtn"><Link to="/info" style={{textDecoration:'none',color:'black'}}>info</Link></li>
        <li className="contactBtn"><a href="mailto:mrjustinfry@gmail.com" style={{textDecoration:'none',color:'black'}}>contact</a></li>
        <li className="deleteUserBtn"><Link to="/delete" style={{textDecoration:'none',color:'inherit'}}>delete account</Link></li>
      </ul>
    )} else {
      return (
        <img
          src="/menu.png"
          alt="menu"
          className="optionsBtn"
          onClick={this.toggleHidden} />
      )
    }
  }
};

export default connect()(Options)
