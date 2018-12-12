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
        theUser: this.props.theUser
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
          user={this.props.theUser} />
    );
  }
}

const mapStateToProps = state => ({
  theUser: state.bestow.theUser,
  items: {
    cardId: state.cardId,
    isHidden: state.isHidden,
    who: state.who,
    what: state.what,
    when: state.when,
    how: state.how
  }
});

export default connect(mapStateToProps)(AddButton);
