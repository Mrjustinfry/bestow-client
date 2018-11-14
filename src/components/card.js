import React, { Component } from 'react';

import './card.css';

class Card extends Component {
  render() {
      return (
          <div className="itemCard">
            <p>Who: Karen Smith</p>
            <p>what: Phone Charger</p>
            <p>when: 11-13-18 (2 days ago)</p>
            <button><img src="" alt="edit" /></button>
            <button>X</button>
          </div>
      );
  }
}

export default Card;
