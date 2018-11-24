import React, { Component } from 'react';
import {connect} from 'react-redux';

import Card from './card';
import Item from './item';

import {setFilter, addItem, getItems} from '../actions/actions';

import './list.css';///Delete this
/*
class ListItem extends Component {
constructor(props) {
  super(props);

  this.state = {
    isHidden: true
  }

 this.toggleHidden = this.toggleHidden.bind(this);
}


addItem(items) {
    this.props.addItem(items);
}

  setEditing(editing) {
      this.setState({
          editing
      });
}

  toggleHidden () {
    this.setState({
      isHidden: !this.props.isHidden
    })
  }

  componentDidUpdate(prevProps) {
   if (this.props.items !== prevProps.items) {
     this.props.getItems();
   }
 }

    render() {
    return (
      <div className="itemList">
        <ul className="items">
          <Item />
        </ul>
      </div>
    )
  };
}

const mapStateToProps = state => ({
    items: state.items,
    filter: state.filter
});
*/
export default connect(mapStateToProps, {addItem})(ListItem);
