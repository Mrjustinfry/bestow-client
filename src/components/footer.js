import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './footer.css';

class Footer extends Component {
  render() {
      return (
          <div className="footer">
          <Link to="/bestow"><p>New to Bestow? Click here to learn more!</p></Link>
          </div>
      );
  }
}

export default Footer;
