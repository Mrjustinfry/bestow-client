import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addItem, getItems} from '../actions/actions';


import './addButton.css';
import './addItem.css';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        editing: false
    }
    this.addItem = this.addItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

setEditing(editing) {
    this.setState({
        editing
    });
}

addItem(items) {
     this.props.dispatch(addItem(items));
}

onSubmit(e) {
    e.preventDefault();
    const who = this.whoInput.value.trim();
    const what = this.whatInput.value.trim();
    const when = this.whenInput.value.trim();
    const how = this.howInput.id;
    this.addItem({who, what, when, how});
    this.whoInput.value = '';
    this.whatInput.value = '';
    this.whenInput.value = '';
    console.log(who,what,when,how);
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
        <form className="itemForm" onSubmit={this.getItems}>
          <p className="close" onClick={() => this.setEditing(false)}>close</p>
          <label><input type="text" className="whoIn" ref={input => this.whoInput = input} /></label>
          <br />
          <label><input type="text" className="whatIn" ref={input => this.whatInput = input} /></label>
          <br />
          <label><input type="date" className="whenIn" ref={input => this.whenInput = input} /></label>
          <br />
          <button
          onClick={this.onSubmit}
          ref={value => this.howInput = value}
          className="borrowBtn" id="borrowed" type="button">Borrowed</button>
          <button
          onClick={this.onSubmit}
          ref={value => this.howInput = value}
          className="bestowBtn" id="bestowed" type="button">Bestowed</button>
        </form>
    );
  }
}


const mapStateToProps = state => ({
  items: [
    state.who,
    state.what,
    state.when,
    state.how
  ]
});

export default connect(mapStateToProps)(AddButton);
