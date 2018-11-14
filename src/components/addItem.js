import React, { Component } from 'react';

import './addItem.css';

class AddItem extends Component {
  render() {
      return (
          <div className="itemForm">
            <label>Who</label>
            <input type="text" />
            <br />
            <label>What</label>
            <input type="text" />
            <br />
            <label>When</label>
            <input type="date" />
            <br />
            <button>Borrowed</button>
            <button>Bestowed</button>
          </div>
      );
  }
}

export default AddItem;
