import React, { Component } from 'react';
import {connect} from 'react-redux';

import {editItem, deleteItem} from '../actions/actions';

import './card.css';

class Card extends Component {
constructor(props) {
  super(props);

  this.state = {
      editing: false,
      isHidden: 'true'
  };
  this.onSubmit = this.onSubmit.bind(this);
}


  setEditing(editing) {
      this.setState({
          editing
      });
}

onSubmit(e) {
  e.preventDefault();
  const cardId = this.props.cardId;
  const who = this.whoInput.value.trim();
  const what = this.whatInput.value.trim();
  const when = this.whenInput.value.trim();
  const how = e.target.id;
  this.props.editItem({
    cardId: cardId,
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

deleteItem() {
  this.props.deleteItem(this.props.cardId);
}

  render() {
    if(!this.state.editing) {
      return (
        <div className="itemCard card" id={this.props.cardId} >
          <span className="btns">
            <button
              className="editBtn"
              onClick={() => this.setEditing(!this.state.editing)}></button>
            <button
              className="trashBtn"
              onClick ={() => this.deleteItem(this.props.cardId)} ></button>
          </span>
          <p className="whatItem">{this.props.what}</p>
          <p className="whoItem">{this.props.who}</p>
          <p className="whenItem">{this.props.when}</p>
        </div>
      );
  }
  return (
    <form className="editItemForm">
      <label>
        <input
          type="text"
          className="whoIn editIn"
          placeholder={this.props.who}
          ref={input => this.whoInput = input} /></label>
      <br />
      <label>
        <input
          type="text"
          className="whatIn editIn"
          placeholder={this.props.what}
          ref={input => this.whatInput = input} /></label>
      <br />
      <label>
        <input
          type="date"
          className="whenIn editIn editWhenIn"
          placeholder={this.props.when}
          ref={input => this.whenInput = input} /></label>
      <br />
        <button
          onClick={this.onSubmit}
          className="borrowBtn"
          id="borrowed"
          value="borrowed"
          type="button">Borrowed</button>
        <button
          onClick={this.onSubmit}
          className="bestowBtn"
          id="bestowed"
          value="bestowed"
          type="button">Bestowed</button>
    </form>
  );
}
}

const mapStateToProps = state => ({
    searchItem: state.searchItem,
    items: state.items
});

export default connect(mapStateToProps, {editItem, deleteItem})(Card);
