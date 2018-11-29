import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addItem, getItems} from '../actions/actions';

import AddItemForm from './addItemForm';

import './addButton.css';
import './addItem.css';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        editing: false
    }
    this.onSubmit = this.onSubmit.bind(this);
}

setEditing(editing) {
    this.setState({
        editing
    });
}

onSubmit(e) {
    e.preventDefault();
    const who = this.whoInput.value.trim();
    const what = this.whatInput.value.trim();
    const when = this.whenInput.value.trim();
    const how = e.target.id;
    this.props.addItem({
      cardId: 10,
      isHidden: true,
      who: who,
      what: what,
      when: when,
      how: how
    });
    this.whoInput.value = '';
    this.whatInput.value = '';
    this.whenInput.value = '';
    this.setEditing(!this.state.editing);
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
          onClick={() => this.setEditing(false)}/>
    );
  }
}

const mapStateToProps = state => ({
  items: {
    cardId: state.cardId,
    isHidden: state.isHidden,
    who: state.who,
    what: state.what,
    when: state.when,
    how: state.how
  }
});

export default connect(mapStateToProps, {addItem, getItems})(AddButton);
