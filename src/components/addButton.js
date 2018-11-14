import React, { Component } from 'react';


import './addButton.css';

class AddButton extends Component {
  render() {
      return (
          <div className="addButton">
          <footer><button className="addBtn">+</button></footer>
          </div>
      );
  }
}

export default AddButton;
