import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {deleteItem, getUserItems} from '../actions/actions';

import EditItemForm from './editItemForm';

import './card.css';
import './list.css';

class Card extends Component {
constructor(props) {
  super(props);

  this.state = {
      editing: false,
      isHidden: 'true'
  };
}


  setEditing(editing) {
      this.setState({
          editing
      });
}

deleteUserItem() {
  this.props.deleteItem(this.props.cardId)
  return this.props.getUserItems(localStorage.localUserId);
}

  render() {
    if(!this.state.editing) {
      return (
        <div className="itemCard card" id={this.props.cardId} >
          <span className="btns">
            <button
              className="editBtn"
              aria-label="edit"
              onClick={() => this.setEditing(!this.state.editing)}></button>
            <button
              className="trashBtn"
              aria-label="delete"
              onClick ={() => this.deleteUserItem(this.props.cardId)} ></button>
          </span>
          <p className="whatItem">{this.props.what}</p>
          <p className="whoItem">{this.props.who}</p>
          <p className="whenItem">{moment(this.props.when).format("MMMM Do YYYY")}</p>
          <p className="howLong">  - ({this.props.how + ' ' + moment(this.props.when, "YYYYMMDD").fromNow()}) -</p>
        </div>
      );
  }
  return (
        <EditItemForm
          displayWhat={this.props.what}
          displayWho={this.props.who}
          displayWhen={this.props.when}
          theCardId={this.props.cardId} />
  );
}
}


export default connect(null, { deleteItem, getUserItems })(Card);
