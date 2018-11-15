import React, { Component } from 'react';

//import AddItem from './addItem';
import './addButton.css';
import './addItem.css';

class AddButton extends Component {
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
    if (!this.state.editing) {
      return (
          <div className="addButton">
          <footer><button className="addBtn" onClick={() => this.setEditing(true)}>+</button></footer>
          </div>
      );
  }
  return (
    <div className="itemForm">
      <p className="close" onClick={() => this.setEditing(false)}>close</p>
      <label><input type="text" className="whoIn"/></label>
      <br />
      <label><input type="text" className="whatIn"/></label>
      <br />
      <label><input type="date" className="whenIn" /></label>
      <br />
      <button onSubmit={() => this.setEditing(false)} className="borrowBtn">Borrowed</button>
      <button onSubmit={() => this.setEditing(false)} className="bestowBtn">Bestowed</button>
    </div>
    );
  }
}
export default AddButton;
