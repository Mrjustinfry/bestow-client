import React, { Component } from 'react';
import {connect} from 'react-redux';

import './card.css';

class Card extends Component {
constructor(props) {
  super(props);

  this.state = {
      editing: false,
  };
}


  setEditing(editing) {
      this.setState({
          editing
      });
}

  render() {
    if(!this.state.editing) {
      return (
        <div className="itemCard">
          <h1>{this.props.items.what}</h1>
          <p className="whoItem">{this.props.items.who}</p>
          <p className="whenItem">{this.props.items.when}</p>
          <div className="btns">
          <button className="editBtn" onClick={() => this.setEditing(true)}></button>
          <button className="trashBtn"></button>
          </div>
          <p className="close">close</p>
        </div>
      );
  }
  return (
    <div className="editItem">
      <p className="close" onClick={() => this.setEditing(false)}>close</p>
      <label><input type="text" className="whoIn"/></label>
      <br />
      <label><input type="text" className="whatIn"/></label>
      <br />
      <label><input type="date" className="whenIn" /></label>
      <br />
      <button onSubmit={() => this.setEditing(false)} className="borrowBtn">Borrowed</button>
      <button onSubmit={() => this.setEditing(false)} className="bestowBtn">Bestowed</button>
    </div>
  );
}
}

const mapStateToProps = state => ({
    items: state.items
});

export default connect(mapStateToProps)(Card);
