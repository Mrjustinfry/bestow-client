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
    //this.addItem = this.addItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

setEditing(editing) {
    this.setState({
        editing
    });
}
/*
addItem(item) {
  console.log("Add item:", item)
     this.props.addItem(item);
}
*/
onSubmit(e) {
    e.preventDefault();
    const who = this.whoInput.value.trim();
    const what = this.whatInput.value.trim();
    const when = this.whenInput.value.trim();
    const how = e.target.id;
    this.props.addItem({
      who: who,
      what: what,
      when: when,
      how: how
    });
    this.whoInput.value = '';
    this.whatInput.value = '';
    this.whenInput.value = '';
    console.log(who,what,when,how);
}

  render() {
    if (!this.state.editing) {
      return (
          <div className="addButton">
          <footer className="addFoot"><button className="addBtn" onClick={() => this.setEditing(true)}>+</button></footer>
          </div>
      );
  }
  return (
        <form className="itemForm">
          <p className="close" onClick={() => this.setEditing(false)}>close</p>
          <label><input type="text" className="whoIn itemIn" ref={input => this.whoInput = input} /></label>
          <br />
          <label><input type="text" className="whatIn itemIn" ref={input => this.whatInput = input} /></label>
          <br />
          <label><input type="date" className="whenIn itemIn" ref={input => this.whenInput = input} /></label>
          <br />
          <button
          onClick={this.onSubmit}
          className="borrowBtn" id="borrowed" type="button">Borrowed</button>
          <button
          onClick={this.onSubmit}
          className="bestowBtn" id="bestowed" type="button">Bestowed</button>
        </form>
    );
  }
}


const mapStateToProps = state => ({
  items: {
    who: state.who,
    what: state.what,
    when: state.when,
    how: state.how
  }
});

export default connect(mapStateToProps, {addItem, getItems})(AddButton);
