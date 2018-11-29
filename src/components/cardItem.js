import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addItem} from '../actions/actions';

import Card from './card';

export class CardItem extends Component {
constructor(props) {
  super(props);
  this.state = {
    searchItem: this.props.searchItem
  }
}
  toggleHidden = () => {
    this.props.toggleHidden(this.props.item.cardId)
  }

  render() {
    return (
      <li className={this.props.item.how}>
        {this.props.isHidden
          ? <p onClick={this.toggleHidden} className="itemName" id={this.props.item.cardId}>{this.props.itemDefinition}</p>
          : <p className="close" onClick={this.props.toggleHidden}>close</p>}
        {!this.props.isHidden && <Card {...this.props.item} />}
      </li>
  )}
}

const mapStateToProps = state => ({
    searchItem: state.searchItem,
    filter: state.bestow.filter,
    items: state.bestow.items
});

export default connect(mapStateToProps, {addItem})(CardItem);
