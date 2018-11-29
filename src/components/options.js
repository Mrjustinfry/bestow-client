import React from 'react';
import {Link} from 'react-router-dom';

import './options.css';

export default function Options() {
    return (
      <ul className="optionsBox">
        <li className="logoutBtn">log out</li>
        <li className="infoBtn"><Link to="/info" style={{textDecoration:'none',color:'black'}}>info</Link></li>
        <li className="deleteUserBtn"><Link to="/delete" style={{textDecoration:'none',color:'inherit'}}>delete account</Link></li>
      </ul>
    );
  };
