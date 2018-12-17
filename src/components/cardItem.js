import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addItem} from '../actions/actions';

import Card from './card';
import './card.css';

export class CardItem extends Component {

  toggleHidden = () => {
    this.props.toggleHidden(this.props.item.cardId)
  }

  render() {//ternary operator for toggling between list and card view
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
    theUser: state.bestow.theUser,
    filter: state.bestow.filter,
    items: state.bestow.items,
    searchCollection: state.bestow.searchCollection
});

export default connect(mapStateToProps, {addItem})(CardItem);
