import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/actions';

import './addItem.css';

class AddItem extends Component {
  constructor(props) {
    super(props);

}

addItem(item) {
    this.props.dispatch(addItem(item));
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
    const how = this.howInput.value;
    this.addItem(who,what,when,how);
    this.whoInput.value = '';
    this.whatInput.value = '';
    this.whenInput.value = '';
}

  render() {
      return (
      );
  }
}

const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps)(AddItem);
