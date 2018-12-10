import React, { Component } from 'react';
import {connect} from 'react-redux';

import {deleteItem} from '../actions/actions';

import EditItemForm from './editItemForm';

import './card.css';
import './list.css';

class Card extends Component {
constructor(props) {
  super(props);

  this.state = {
      theUser: this.props.theUser,
      editing: false,
      isHidden: 'true'
  };
}


  setEditing(editing) {
      this.setState({
          editing
      });
}

 timeLapse() {
    let date1 = new Date(this.props.when);
    let date2 = new Date();
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    if(date2>=date1){
      if(diffDays>1){
        return 'about ' + diffDays + ' days ago';
      } else if(diffDays===1){
        return ' yesterday';
      }
    }else if (date2<date1){
    return 'in the future';
  }
}

deleteUserItem() {
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
              onClick ={() => this.deleteUserItem(this.props.cardId)} ></button>
          </span>
          <p className="whatItem">{this.props.what}</p>
          <p className="whoItem">{this.props.who}</p>
          <p className="whenItem">{this.props.when.toDateString()}</p>
          <p className="howLong">  - ({this.props.how + ' ' + this.timeLapse()}) -</p>
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

const mapStateToProps = state => ({
    searchItem: state.searchItem,
    items: state.items
});

export default connect(mapStateToProps, { deleteItem })(Card);
