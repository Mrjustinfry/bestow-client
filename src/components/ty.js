import React from 'react';
import {Link} from 'react-router-dom';

import './signupForm.css';

export default function Ty() {
    return (
    <div className="thankYou">
      <p className="tyMsg">Thank you for signing up!</p>
      <p className="tyLink"><Link to='/'>Click here to log in</Link></p>
    </div>
    )
}
