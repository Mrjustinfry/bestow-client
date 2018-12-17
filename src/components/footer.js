import React from 'react';
import {Link} from 'react-router-dom';

import './footer.css';

export default function Footer() {
      return (
          <div className="footer">
            <Link to="/info" role="link"><p className="learn">New to Bestow? Click here to learn more!</p></Link>
          </div>
      );
  }
