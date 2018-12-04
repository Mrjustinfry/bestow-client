import React from 'react';

import './info.css';

export default function NoItems() {
    return (
    <div className="noItems">
      <img src='./what.png' alt="what icon" />
      <p>Nothing has been <span className="blue">borrowed</span> or <span className="purple">bestowed</span></p>
    </div>
    )
}
