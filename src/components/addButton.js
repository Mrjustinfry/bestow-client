import React, { Component } from 'react';
import {connect} from 'react-redux';

import AddItemForm from './addItemForm';

import './addButton.css';
import './addItem.css';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        editing: false,
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
            <footer className="addFoot">
              <button className="addBtn" onClick={() => this.setEditing(true)}>+</button>
            </footer>
          </div>
      );
  }
  return (
        <AddItemForm
          onClick={() => this.setEditing(false)}
           />
    );
  }
}

const mapStateToProps = state => ({
  theUser: state.bestow.theUser
});

export default connect(mapStateToProps)(AddButton);
