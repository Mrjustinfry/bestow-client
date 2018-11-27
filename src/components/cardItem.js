import React, {Component} from 'react';
import {connect} from 'react-redux';

import Card from './card';

export class CardItem extends Component {

  toggleHidden = () => {
    this.props.toggleHidden(this.props.item.cardId)
  }

  render() {
    return (
      <div className={this.props.item.how}>
        {this.props.isHidden
          ? <p onClick={this.toggleHidden} className="itemName" id={this.props.item.cardId}>{this.props.itemDefinition}</p>
          : <p className="close" onClick={this.toggleHidden}>close</p> }
        {!this.props.isHidden && <Card {...this.props.item} />}
      </div>
  )}
}

export default connect()(CardItem);
