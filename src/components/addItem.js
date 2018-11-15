import React, { Component } from 'react';

import './addItem.css';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        editing: false
    }
}

setEditing(editing) {
    this.setState({
        editing
    });
}
  render() {
      return (
          <div className="itemForm">
            <p className="close" onClick={() => this.setEditing(false)}>close</p>
            <label><input type="text" placeholder="who..." /></label>
            <br />
            <label><input type="text" placeholder="what..." /></label>
            <br />
            <label><input type="date" placeholder="when..." /></label>
            <br />
            <button onSubmit={() => this.setEditing(false)} className="borrowBtn">Borrowed</button>
            <button onSubmit={() => this.setEditing(false)} className="bestowBtn">Bestowed</button>
          </div>
      );
  }
}

export default AddItem;
